import { mkdir, writeFile } from 'fs/promises';
import path from 'path';
import { Readable } from 'stream';
import mongoose from 'mongoose';
import { getStorageMode } from './store';

function safeName(name = 'upload') {
  return String(name).replace(/[^a-zA-Z0-9.\-_]/g, '-').slice(-80);
}

export async function saveUploadedFile({ buffer, filename, contentType }) {
  const clean = safeName(filename);
  if (getStorageMode() === 'mongodb' && mongoose.connection?.db) {
    const bucket = new mongoose.mongo.GridFSBucket(mongoose.connection.db, { bucketName: 'media' });
    const upload = bucket.openUploadStream(clean, {
      contentType: contentType || 'application/octet-stream',
      metadata: { originalName: filename }
    });
    await new Promise((resolve, reject) => {
      Readable.from(buffer).pipe(upload).on('error', reject).on('finish', resolve);
    });
    return {
      url: `/api/media/${upload.id}`,
      id: String(upload.id),
      filename: clean,
      contentType
    };
  }

  const dir = path.join(process.cwd(), 'public', 'uploads');
  await mkdir(dir, { recursive: true });
  const stored = `${Date.now()}-${clean}`;
  await writeFile(path.join(dir, stored), buffer);
  return {
    url: `/uploads/${stored}`,
    filename: stored,
    contentType
  };
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
