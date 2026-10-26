import { NextResponse } from 'next/server';
import { getAuthUser, unauthorized } from '../../../lib/auth';
import { saveUploadedFile } from '../../../lib/media';
import { connectStore } from '../../../lib/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

const ALLOWED = /^(image\/(jpeg|jpg|png|webp|gif)|video\/(mp4|webm|ogg|quicktime))$/i;

export async function POST(request) {
  await connectStore();
  if (!getAuthUser(request)) return unauthorized();

  const form = await request.formData();
  const file = form.get('file');
  if (!file || typeof file === 'string') {
    return NextResponse.json({ message: 'Please choose an image or video file.' }, { status: 400 });
  }

  const contentType = file.type || 'application/octet-stream';
  if (!ALLOWED.test(contentType)) {
    return NextResponse.json({ message: 'Only JPG, PNG, WEBP, GIF, MP4 or WEBM files are allowed.' }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  if (buffer.length > 60 * 1024 * 1024) {
    return NextResponse.json({ message: 'File is too large. Keep uploads under 60MB.' }, { status: 400 });
  }

  const saved = await saveUploadedFile({
    buffer,
    filename: file.name,
    contentType
  });

  return NextResponse.json(saved);
}
