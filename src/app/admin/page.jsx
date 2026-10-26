'use client';

import { useRouter } from 'next/navigation';
import AdminPortal from '../../components/AdminPortal';

export default function AdminPage() {
  const router = useRouter();
  return <AdminPortal onBackToWebsite={() => router.push('/')} />;
}
