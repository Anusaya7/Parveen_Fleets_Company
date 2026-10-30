import { NextResponse } from 'next/server';
import { getAuthUser, serverError, unauthorized } from '../../../../lib/auth';
import { saveChunk } from '../../../../lib/media';
import { connectStore } from '../../../../lib/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

export async function POST(request) {
  try {
    await connectStore();
    if (!getAuthUser(request)) return unauthorized();

    const form = await request.formData();
    const uploadId = String(form.get('uploadId') || '');
    const index = Number(form.get('index'));
    const part = form.get('chunk');

    if (!uploadId || Number.isNaN(index) || !part || typeof part === 'string') {
      return NextResponse.json({ message: 'Invalid upload chunk.' }, { status: 400 });
    }

    const buffer = Buffer.from(await part.arrayBuffer());
    if (!buffer.length) {
      return NextResponse.json({ message: 'Empty upload chunk.' }, { status: 400 });
    }
    if (buffer.length > 4 * 1024 * 1024) {
      return NextResponse.json({ message: 'Each upload part must stay under 4MB.' }, { status: 400 });
    }

    const progress = await saveChunk({ uploadId, index, buffer });
    return NextResponse.json(progress);
  } catch (error) {
    return serverError(error, 'Chunk upload failed. Please try again.');
  }
}
