import { NextResponse } from 'next/server';
import { getAuthUser, serverError, unauthorized } from '../../../../lib/auth';
import { completeChunkUpload } from '../../../../lib/media';
import { connectStore } from '../../../../lib/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST(request) {
  try {
    await connectStore();
    if (!getAuthUser(request)) return unauthorized();

    const body = await request.json().catch(() => ({}));
    const uploadId = String(body.uploadId || '');
    if (!uploadId) {
      return NextResponse.json({ message: 'Missing upload id.' }, { status: 400 });
    }

    const saved = await completeChunkUpload(uploadId);
    return NextResponse.json(saved);
  } catch (error) {
    return serverError(error, 'Could not finish upload. Please try again.');
  }
}
