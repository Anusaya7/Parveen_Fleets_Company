import { NextResponse } from 'next/server';
import { Readable } from 'stream';
import { connectStore } from '../../../../lib/store';
import { readUploadedFile } from '../../../../lib/media';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(_request, { params }) {
  await connectStore();
  const { id } = await params;
  const file = await readUploadedFile(id);
  if (!file) {
    return NextResponse.json({ message: 'Media not found.' }, { status: 404 });
  }

  return new NextResponse(Readable.toWeb(file.stream), {
    headers: {
      'Content-Type': file.contentType,
      'Content-Disposition': `inline; filename="${file.filename}"`,
      'Cache-Control': 'public, max-age=31536000, immutable'
    }
  });
}
