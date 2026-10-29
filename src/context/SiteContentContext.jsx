'use client';

import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../api/client';
import { buildDefaultContent } from '../lib/defaultContent';

const fallbackContent = buildDefaultContent();

const SiteContentContext = createContext({
  content: fallbackContent,
  storage: 'local',
  refreshContent: async () => {}
});

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(fallbackContent);
  const [storage, setStorage] = useState('local');

  const refreshContent = async () => {
    try {
      const payload = await api.getContent();
      const next = payload.data || {};
      setContent({
        ...fallbackContent,
        ...next,
        hero: { ...fallbackContent.hero, ...(next.hero || {}) },
        instagramVideos: Array.isArray(next.instagramVideos) ? next.instagramVideos : fallbackContent.instagramVideos
      });
      setStorage(payload.storage || 'server');
    } catch {
      setContent(fallbackContent);
      setStorage('local');
    }
  };

  useEffect(() => {
    refreshContent();
  }, []);

  useEffect(() => {
    if (!content?.seo) return undefined;
    if (content.seo.metaTitle) document.title = content.seo.metaTitle;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && content.seo.metaDesc) desc.setAttribute('content', content.seo.metaDesc);
    return undefined;
  }, [content]);

  const value = useMemo(() => ({ content, storage, refreshContent }), [content, storage]);
  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
