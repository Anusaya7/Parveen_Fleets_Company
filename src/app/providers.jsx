'use client';

import { SiteContentProvider } from '../context/SiteContentContext';

export default function Providers({ children }) {
  return <SiteContentProvider>{children}</SiteContentProvider>;
}
