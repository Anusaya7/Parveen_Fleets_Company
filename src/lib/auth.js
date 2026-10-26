import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

const SECRET = process.env.JWT_SECRET || 'parveen-fleets-local-secret';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@parveenfleets.in';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ParveenAdmin@2026';

export function getAdminCredentials() {
  return { email: ADMIN_EMAIL, password: ADMIN_PASSWORD };
}

export function signAdminToken() {
  return jwt.sign({ email: ADMIN_EMAIL, role: 'Admin' }, SECRET, { expiresIn: '12h' });
}

export function getAuthUser(request) {
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : '';
  try {
    return jwt.verify(token, SECRET);
  } catch {
    return null;
  }
}

export function unauthorized() {
  return NextResponse.json({ message: 'Please sign in to the backend panel.' }, { status: 401 });
}
