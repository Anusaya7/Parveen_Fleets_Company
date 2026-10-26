import { NextResponse } from 'next/server';
import { getAdminCredentials, serverError, signAdminToken } from '../../../../lib/auth';
import { connectStore, getStorageMode } from '../../../../lib/store';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(request) {
  try {
    await connectStore();
    const body = await request.json().catch(() => ({}));
    const email = String(body.email || '').trim().toLowerCase();
    const password = String(body.password || '');
    const admin = getAdminCredentials();

    if (email !== admin.email.toLowerCase() || password !== admin.password) {
      return NextResponse.json({ message: 'Invalid email or password.' }, { status: 401 });
    }

    return NextResponse.json({
      token: signAdminToken(),
      admin: { email: admin.email, role: 'Admin' },
      storage: getStorageMode()
    });
  } catch (error) {
    return serverError(error, 'Sign in failed. Please try again.');
  }
}
