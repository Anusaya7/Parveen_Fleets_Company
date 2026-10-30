import { mkdir, writeFile } from 'fs/promises';
import os from 'os';
import path from 'path';
import { Readable } from 'stream';
import mongoose from 'mongoose';
import { getStorageMode } from './store';

const chunkSchema = new mongoose.Schema(
  {
    uploadId: { type: String, index: true, required: true },
    index: { type: Number, required: true },
    data: { type: Buffer, required: true }
  },
  { timestamps: true }
);
chunkSchema.index({ uploadId: 1, index: 1 }, { unique: true });

const sessionSchema = new mongoose.Schema(
  {
    uploadId: { type: String, unique: true, required: true },
    filename: { type: String, required: true },
    contentType: { type: String, default: 'application/octet-stream' },
    totalChunks: { type: Number, required: true },
    size: { type: Number, default: 0 },
    received: { type: Number, default: 0 }
  },
  { timestamps: true }
);

const UploadChunk = mongoose.models.UploadChunk || mongoose.model('UploadChunk', chunkSchema);
const UploadSession = mongoose.models.UploadSession || mongoose.model('UploadSession', sessionSchema);

export function safeName(name = 'upload') {
  return String(name).replace(/[^a-zA-Z0-9.\-_]/g, '-').slice(-80) || 'upload.bin';
}

export function detectContentType(filename = '', mime = '') {
  const type = String(mime || '').trim().toLowerCase();
  if (type && type !== 'application/octet-stream') return type;
  const ext = path.extname(String(filename)).toLowerCase();
  const map = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.webp': 'image/webp',
    '.gif': 'image/gif',
    '.mp4': 'video/mp4',
    '.webm': 'video/webm',
    '.ogg': 'video/ogg',
    '.ogv': 'video/ogg',
    '.mov': 'video/quicktime',
    '.m4v': 'video/x-m4v',
    '.avi': 'video/x-msvideo'
  };
  return map[ext] || type || 'application/octet-stream';
}

export function isAllowedMedia(contentType = '') {
  return /^(image\/(jpeg|jpg|png|webp|gif)|video\/(mp4|webm|ogg|quicktime|x-m4v|x-msvideo))$/i.test(contentType);
}

async function writeToGridFS({ buffer, filename, contentType }) {
  const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'media' });
  const upload = bucket.openUploadStream(filename, {
    contentType: contentType || 'application/octet-stream',
    metadata: { originalName: filename }
  });

  await new Promise((resolve, reject) => {
    upload.on('error', reject);
    upload.on('finish', resolve);
    Readable.from(buffer).on('error', reject).pipe(upload);
  });

  return {
    url: `/api/media/${upload.id}`,
    id: String(upload.id),
    filename,
    contentType
  };
}

async function writeToDisk({ buffer, filename, contentType }) {
  const base = process.env.VERCEL ? path.join(os.tmpdir(), 'parveen-uploads') : path.join(process.cwd(), 'public', 'uploads');
  await mkdir(base, { recursive: true });
  const stored = `${Date.now()}-${filename}`;
  await writeFile(path.join(base, stored), buffer);
  return {
    url: process.env.VERCEL ? '' : `/uploads/${stored}`,
    filename: stored,
    contentType,
    localPath: path.join(base, stored)
  };
}

export async function saveUploadedFile({ buffer, filename, contentType }) {
  const clean = safeName(filename);
  const type = detectContentType(clean, contentType);

  if (getStorageMode() === 'mongodb' && mongoose.connection?.db) {
    return writeToGridFS({ buffer, filename: clean, contentType: type });
  }

  const saved = await writeToDisk({ buffer, filename: clean, contentType: type });
  if (!saved.url) {
    throw new Error('File storage is unavailable. Connect MongoDB to upload videos on Vercel.');
  }
  return saved;
}

export async function initChunkUpload({ filename, contentType, size, totalChunks }) {
  if (getStorageMode() !== 'mongodb' || !mongoose.connection?.db) {
    throw new Error('Chunked uploads need MongoDB. Check MONGODB_URI on the server.');
  }
  const uploadId = `up_${Date.now()}_${Math.random().toString(36).slice(2, 10)}`;
  await UploadSession.create({
    uploadId,
    filename: safeName(filename),
    contentType: detectContentType(filename, contentType),
    totalChunks,
    size: size || 0,
    received: 0
  });
  return { uploadId };
}

export async function saveChunk({ uploadId, index, buffer }) {
  const session = await UploadSession.findOne({ uploadId });
  if (!session) throw new Error('Upload session expired. Please try again.');
  if (index < 0 || index >= session.totalChunks) throw new Error('Invalid upload chunk.');

  await UploadChunk.findOneAndUpdate(
    { uploadId, index },
    { uploadId, index, data: buffer },
    { upsert: true, new: true }
  );

  const received = await UploadChunk.countDocuments({ uploadId });
  session.received = received;
  await session.save();
  return { received, totalChunks: session.totalChunks };
}

export async function completeChunkUpload(uploadId) {
  const session = await UploadSession.findOne({ uploadId });
  if (!session) throw new Error('Upload session expired. Please try again.');

  const chunks = await UploadChunk.find({ uploadId }).sort({ index: 1 });
  if (chunks.length !== session.totalChunks) {
    throw new Error(`Upload incomplete (${chunks.length}/${session.totalChunks} parts). Please try again.`);
  }

  const buffer = Buffer.concat(chunks.map((chunk) => chunk.data));
  const saved = await writeToGridFS({
    buffer,
    filename: session.filename,
    contentType: session.contentType
  });

  await UploadChunk.deleteMany({ uploadId });
  await UploadSession.deleteOne({ uploadId });
  return saved;
}

export async function abortChunkUpload(uploadId) {
  await UploadChunk.deleteMany({ uploadId });
  await UploadSession.deleteOne({ uploadId });
}

export async function readUploadedFile(id) {
  if (!mongoose.Types.ObjectId.isValid(id) || !mongoose.connection?.db) return null;
  const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'media' });
  const _id = new mongoose.Types.ObjectId(id);
  const files = await bucket.find({ _id }).toArray();
  if (!files[0]) return null;
  return {
    stream: bucket.openDownloadStream(_id),
    contentType: files[0].contentType || 'application/octet-stream',
    filename: files[0].filename
  };
}
