import { NextResponse } from 'next/server';
import { getAuthUser, unauthorized } from '../../../lib/auth';
import { connectStore, createEnquiry, getStorageMode, listEnquiries } from '../../../lib/store';

export const runtime = 'nodejs';

export async function GET(request) {
  await connectStore();
  if (!getAuthUser(request)) return unauthorized();
  const enquiries = await listEnquiries();
  return NextResponse.json({ data: enquiries, storage: getStorageMode() });
}

export async function POST(request) {
  await connectStore();
  const body = await request.json().catch(() => ({}));
  if (!body.name || !body.phone) {
    return NextResponse.json({ message: 'Name and phone are required.' }, { status: 400 });
  }
  const enquiry = await createEnquiry(body);
  return NextResponse.json({ data: enquiry }, { status: 201 });
}
