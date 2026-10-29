import crypto from 'node:crypto';
import { NextResponse } from 'next/server';

const SECRET = process.env.JWT_SECRET || 'parveen-fleets-local-secret';
const ADMIN_EMAIL = process.env.ADMIN_EMAIL || 'admin@parveenfleets.in';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'ParveenAdmin@2026';

export function getAdminCredentials() {
  return { email: ADMIN_EMAIL, password: ADMIN_PASSWORD };
}

function toBase64Url(value) {
  return Buffer.from(value).toString('base64url');
}

function sign(payload) {
  const header = toBase64Url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = toBase64Url(JSON.stringify(payload));
  const data = `${header}.${body}`;
  const signature = crypto.createHmac('sha256', SECRET).update(data).digest('base64url');
  return `${data}.${signature}`;
}

function safeEqual(left, right) {
  const a = crypto.createHash('sha256').update(String(left)).digest();
  const b = crypto.createHash('sha256').update(String(right)).digest();
  return crypto.timingSafeEqual(a, b);
}

export function signAdminToken() {
  const now = Math.floor(Date.now() / 1000);
  return sign({
    email: ADMIN_EMAIL,
    role: 'Admin',
    iat: now,
    exp: now + 60 * 60 * 12
  });
}

export function getAuthUser(request) {
  const header = request.headers.get('authorization') || '';
  const token = header.startsWith('Bearer ') ? header.slice(7).trim() : '';
  if (!token) return null;

  const parts = token.split('.');
  if (parts.length === 3) {
    const [encodedHeader, encodedPayload, signature] = parts;
    const expected = crypto
      .createHmac('sha256', SECRET)
      .update(`${encodedHeader}.${encodedPayload}`)
      .digest('base64url');
    if (safeEqual(signature, expected)) {
      try {
        const payload = JSON.parse(Buffer.from(encodedPayload, 'base64url').toString());
        if (payload.exp && payload.exp < Math.floor(Date.now() / 1000)) return null;
        return payload;
      } catch {
        return null;
      }
    }
  }

  return null;
}

export function unauthorized() {
  return NextResponse.json({ message: 'Please sign in to the backend panel.' }, { status: 401 });
}

export function serverError(error, fallback = 'Request failed. Please try again.') {
  console.error(error);
  return NextResponse.json(
    { message: error?.message || fallback },
    { status: 500 }
  );
}
