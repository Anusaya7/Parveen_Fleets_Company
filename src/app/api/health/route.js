import { NextResponse } from 'next/server';
import { connectStore, getStorageMode } from '../../../lib/store';

export const runtime = 'nodejs';

export async function GET() {
  await connectStore();
  return NextResponse.json({ ok: true, storage: getStorageMode() });
}
