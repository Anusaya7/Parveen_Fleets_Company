import { NextResponse } from 'next/server';
import { getAuthUser, serverError, unauthorized } from '../../../lib/auth';
import { detectContentType, isAllowedMedia, saveUploadedFile } from '../../../lib/media';
import { connectStore } from '../../../lib/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST(request) {
  try {
    await connectStore();
    if (!getAuthUser(request)) return unauthorized();

    const form = await request.formData();
    const file = form.get('file');
    if (!file || typeof file === 'string') {
      return NextResponse.json({ message: 'Please choose an image or video file.' }, { status: 400 });
    }

    const contentType = detectContentType(file.name, file.type);
    if (!isAllowedMedia(contentType)) {
      return NextResponse.json(
        { message: 'Only JPG, PNG, WEBP, GIF, MP4, MOV or WEBM files are allowed.' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    if (buffer.length > 60 * 1024 * 1024) {
      return NextResponse.json({ message: 'File is too large. Keep uploads under 60MB.' }, { status: 400 });
    }
    if (!buffer.length) {
      return NextResponse.json({ message: 'The selected file is empty.' }, { status: 400 });
    }

    const saved = await saveUploadedFile({
      buffer,
      filename: file.name,
      contentType
    });

    return NextResponse.json(saved);
  } catch (error) {
    const message = String(error?.message || '');
    if (/413|too large|Entity Too Large|FUNCTION_PAYLOAD_TOO_LARGE/i.test(message)) {
      return NextResponse.json(
        { message: 'Video is too large for a single upload. Use a smaller MP4 (under 4MB) or wait for chunked upload.' },
        { status: 413 }
      );
    }
    return serverError(error, 'Upload failed. Please try again.');
  }
}
