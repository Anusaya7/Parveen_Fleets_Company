import { NextResponse } from 'next/server';
import { getAuthUser, serverError, unauthorized } from '../../../../lib/auth';
import { detectContentType, initChunkUpload, isAllowedMedia } from '../../../../lib/media';
import { connectStore } from '../../../../lib/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    await connectStore();
    if (!getAuthUser(request)) return unauthorized();

    const body = await request.json().catch(() => ({}));
    const filename = String(body.filename || 'upload.bin');
    const contentType = detectContentType(filename, body.contentType);
    const size = Number(body.size) || 0;
    const totalChunks = Number(body.totalChunks) || 0;

    if (!isAllowedMedia(contentType)) {
      return NextResponse.json(
        { message: 'Only JPG, PNG, WEBP, GIF, MP4, MOV or WEBM files are allowed.' },
        { status: 400 }
      );
    }
    if (size > 60 * 1024 * 1024) {
      return NextResponse.json({ message: 'File is too large. Keep uploads under 60MB.' }, { status: 400 });
    }
    if (totalChunks < 1 || totalChunks > 40) {
      return NextResponse.json({ message: 'Invalid upload request.' }, { status: 400 });
    }

    const session = await initChunkUpload({ filename, contentType, size, totalChunks });
    return NextResponse.json(session);
  } catch (error) {
    return serverError(error, 'Could not start upload. Please try again.');
  }
}
