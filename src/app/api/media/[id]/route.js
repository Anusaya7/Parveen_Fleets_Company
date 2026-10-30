import { NextResponse } from 'next/server';
import { Readable } from 'stream';
import { connectStore } from '../../../../lib/store';
import { readUploadedFile } from '../../../../lib/media';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 60;

function parseRange(rangeHeader, size) {
  if (!rangeHeader || !size) return null;
  const match = String(rangeHeader).match(/bytes=(\d*)-(\d*)/);
  if (!match) return null;
  let start = match[1] ? Number(match[1]) : 0;
  let end = match[2] ? Number(match[2]) : size - 1;
  if (Number.isNaN(start) || Number.isNaN(end) || start > end || start >= size) return null;
  end = Math.min(end, size - 1);
  return { start, end };
}

function nodeStreamToWeb(nodeStream, request) {
  const reader = Readable.toWeb(nodeStream);
  if (!request?.signal) return reader;

  const onAbort = () => {
    try {
      if (typeof nodeStream.destroy === 'function') nodeStream.destroy();
    } catch {
      /* ignore closed controllers */
    }
  };

  if (request.signal.aborted) onAbort();
  else request.signal.addEventListener('abort', onAbort, { once: true });

  nodeStream.on('error', (error) => {
    if (error?.code === 'ERR_STREAM_PREMATURE_CLOSE' || error?.code === 'ERR_INVALID_STATE') return;
    console.error('Media stream error:', error?.message || error);
  });

  return reader;
}

export async function GET(request, { params }) {
  try {
    await connectStore();
    const { id } = await params;
    const file = await readUploadedFile(id);
    if (!file) {
      return NextResponse.json({ message: 'Media not found.' }, { status: 404 });
    }

    const size = file.length || 0;
    const range = parseRange(request.headers.get('range'), size);
    const commonHeaders = {
      'Content-Type': file.contentType,
      'Accept-Ranges': 'bytes',
      'Content-Disposition': `inline; filename="${file.filename}"`,
      'Cache-Control': 'public, max-age=31536000, immutable'
    };

    if (range) {
      const { start, end } = range;
      const stream = file.openStream(start, end);
      return new NextResponse(nodeStreamToWeb(stream, request), {
        status: 206,
        headers: {
          ...commonHeaders,
          'Content-Length': String(end - start + 1),
          'Content-Range': `bytes ${start}-${end}/${size}`
        }
      });
    }

    const stream = file.openStream();
    return new NextResponse(nodeStreamToWeb(stream, request), {
      status: 200,
      headers: {
        ...commonHeaders,
        ...(size ? { 'Content-Length': String(size) } : {})
      }
    });
  } catch (error) {
    if (error?.code === 'ERR_INVALID_STATE' || error?.code === 'ERR_STREAM_PREMATURE_CLOSE') {
      return new NextResponse(null, { status: 499 });
    }
    console.error('Media route error:', error);
    return NextResponse.json({ message: 'Could not load media.' }, { status: 500 });
  }
}
