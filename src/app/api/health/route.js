import { NextResponse } from 'next/server';
import { serverError } from '../../../lib/auth';
import { connectStore, getStorageMode } from '../../../lib/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectStore();
    return NextResponse.json({ ok: true, storage: getStorageMode() });
  } catch (error) {
    return serverError(error, 'Health check failed.');
  }
}
