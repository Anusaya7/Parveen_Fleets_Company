import { NextResponse } from 'next/server';
import { getAuthUser, unauthorized } from '../../../../lib/auth';
import { connectStore, deleteEnquiry, updateEnquiry } from '../../../../lib/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function PATCH(request, { params }) {
  await connectStore();
  if (!getAuthUser(request)) return unauthorized();
  const { id } = await params;
  const body = await request.json().catch(() => ({}));
  const enquiry = await updateEnquiry(id, body);
  if (!enquiry) return NextResponse.json({ message: 'Enquiry not found.' }, { status: 404 });
  return NextResponse.json({ data: enquiry });
}

export async function DELETE(request, { params }) {
  await connectStore();
  if (!getAuthUser(request)) return unauthorized();
  const { id } = await params;
  const removed = await deleteEnquiry(id);
  if (!removed) return NextResponse.json({ message: 'Enquiry not found.' }, { status: 404 });
  return NextResponse.json({ ok: true });
}
