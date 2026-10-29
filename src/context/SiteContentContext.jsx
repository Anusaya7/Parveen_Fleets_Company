'use client';

import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { api } from '../api/client';
import { buildDefaultContent } from '../lib/defaultContent';

const fallbackContent = buildDefaultContent();

function mergeContent(next = {}) {
  return {
    ...fallbackContent,
    ...next,
    hero: {
      ...fallbackContent.hero,
      ...(next.hero || {}),
      slides: Array.isArray(next.hero?.slides) ? next.hero.slides : fallbackContent.hero.slides,
      videos: Array.isArray(next.hero?.videos) ? next.hero.videos : fallbackContent.hero.videos
    },
    services: Array.isArray(next.services) ? next.services : fallbackContent.services,
    fleet: Array.isArray(next.fleet) ? next.fleet : fallbackContent.fleet,
    stats: Array.isArray(next.stats) ? next.stats : fallbackContent.stats,
    blogs: Array.isArray(next.blogs) ? next.blogs : fallbackContent.blogs,
    instagramVideos: Array.isArray(next.instagramVideos) ? next.instagramVideos : []
  };
}

const SiteContentContext = createContext({
  content: fallbackContent,
  storage: 'local',
  refreshContent: async () => {}
});

export function SiteContentProvider({ children }) {
  const [content, setContent] = useState(fallbackContent);
  const [storage, setStorage] = useState('local');

  const refreshContent = useCallback(async (preset) => {
    if (preset) {
      setContent(mergeContent(preset));
      return;
    }
    try {
      const payload = await api.getContent();
      setContent(mergeContent(payload.data || {}));
      setStorage(payload.storage || 'server');
    } catch {
      setContent(fallbackContent);
      setStorage('local');
    }
  }, []);

  useEffect(() => {
    refreshContent();
  }, [refreshContent]);

  useEffect(() => {
    if (!content?.seo) return undefined;
    if (content.seo.metaTitle) document.title = content.seo.metaTitle;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && content.seo.metaDesc) desc.setAttribute('content', content.seo.metaDesc);
    return undefined;
  }, [content]);

  const value = useMemo(() => ({ content, storage, refreshContent }), [content, storage, refreshContent]);
  return <SiteContentContext.Provider value={value}>{children}</SiteContentContext.Provider>;
}

export function useSiteContent() {
  return useContext(SiteContentContext);
}
