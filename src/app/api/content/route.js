import { NextResponse } from 'next/server';
import { getAuthUser, unauthorized } from '../../../lib/auth';
import { connectStore, getContent, getStorageMode, saveContent } from '../../../lib/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  await connectStore();
  const data = await getContent();
  return NextResponse.json({ data, storage: getStorageMode() });
}

export async function PUT(request) {
  await connectStore();
  if (!getAuthUser(request)) return unauthorized();
  const body = await request.json().catch(() => ({}));
  const data = await saveContent(body.data || body);
  return NextResponse.json({ data, storage: getStorageMode() });
}
