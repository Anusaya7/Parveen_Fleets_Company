'use client';

import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowLeft, BarChart3, BookOpen, Building2, Car, Image as ImageIcon,
  LayoutDashboard, LogOut, Mail, Pencil, Phone, Plus, Save, Search, Shield,
  Sparkles, Trash2, Upload, Users, Video, X
} from 'lucide-react';
import { AUTH_EXPIRED_EVENT, api, getAdminToken, setAdminToken } from '../api/client';
import { useSiteContent } from '../context/SiteContentContext';

const NAV = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard, group: 'Overview' },
  { id: 'enquiries', label: 'Enquiries', icon: Users, group: 'Overview' },
  { id: 'hero', label: 'Hero & Media', icon: ImageIcon, group: 'Website content' },
  { id: 'company', label: 'Company', icon: Building2, group: 'Website content' },
  { id: 'stats', label: 'Stats', icon: BarChart3, group: 'Website content' },
  { id: 'services', label: 'Services', icon: Sparkles, group: 'Website content' },
  { id: 'fleet', label: 'Fleet', icon: Car, group: 'Website content' },
  { id: 'blogs', label: 'Blogs', icon: BookOpen, group: 'Website content' },
  { id: 'instagram', label: 'Instagram', icon: Video, group: 'Website content' },
  { id: 'seo', label: 'SEO', icon: Search, group: 'Website content' }
];

function Field({ label, value, onChange, type = 'text', rows }) {
  const Tag = rows ? 'textarea' : 'input';
  return (
    <label className="admin-field">
      <span>{label}</span>
      <Tag
        className="pf-input"
        type={rows ? undefined : type}
        rows={rows}
        value={value || ''}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}

function MediaField({ label, accept, value, onUploaded, kind = 'image', aspect }) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    setBusy(true);
    setError('');
    try {
      const saved = await api.upload(file);
      onUploaded(saved.url);
    } catch (err) {
      setError(err.message);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="admin-media-field">
      {label ? <span>{label}</span> : null}
      {value ? (
        kind === 'video' ? (
          <video src={value} className={`admin-media-preview ${aspect === '9x16' ? 'is-reel' : ''}`} muted controls />
        ) : (
          <img src={value} alt="" className={`admin-media-preview ${aspect === '9x16' ? 'is-reel' : ''}`} />
        )
      ) : null}
      <label className="admin-upload-btn">
        <Upload size={14} />
        {busy ? 'Uploading...' : `Upload ${kind}`}
        <input type="file" accept={accept} onChange={handleFile} hidden disabled={busy} />
      </label>
      {error ? <em className="admin-error">{error}</em> : null}
    </div>
  );
}

function PageHead({ kicker, title, text, action }) {
  return (
    <div className="admin-content-head">
      <div>
        {kicker ? <p className="admin-kicker">{kicker}</p> : null}
        <h2>{title}</h2>
        <p>{text}</p>
      </div>
      {action}
    </div>
  );
}

function DataTable({ columns, children }) {
  return (
    <div className="admin-card">
      <div className="admin-table-wrap">
        <table className="admin-table">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
            </tr>
          </thead>
          <tbody>{children}</tbody>
        </table>
      </div>
    </div>
  );
}

function RowActions({ onEdit, onDelete }) {
  return (
    <td className="admin-row-actions">
      <button type="button" className="btn-outline" onClick={onEdit}>
        <Pencil size={14} /> Edit
      </button>
      {onDelete ? (
        <button type="button" className="admin-icon-btn" onClick={onDelete}>
          <Trash2 size={15} />
        </button>
      ) : null}
    </td>
  );
}

function NameCell({ image, title, video }) {
  return (
    <div className="admin-name-cell">
      {image ? <img src={image} alt="" /> : video ? <video src={video} muted /> : <span className="admin-thumb-empty" />}
      <strong>{title}</strong>
    </div>
  );
}

export default function AdminPortal({ onBackToWebsite }) {
  const { content, refreshContent, storage } = useSiteContent();
  const [token, setToken] = useState('');
  const [authChecked, setAuthChecked] = useState(false);
  const [email, setEmail] = useState('admin@parveenfleets.in');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [loggingIn, setLoggingIn] = useState(false);
  const [section, setSection] = useState('dashboard');
  const [enquiries, setEnquiries] = useState([]);
  const [draft, setDraft] = useState(content);
  const [saving, setSaving] = useState(false);
  const [notice, setNotice] = useState('');
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    let cancelled = false;
    const stored = getAdminToken();
    if (!stored) {
      setAuthChecked(true);
      return undefined;
    }
    api.listEnquiries()
      .then((payload) => {
        if (cancelled) return;
        setToken(stored);
        setEnquiries(payload.data || []);
      })
      .catch(() => {
        if (cancelled) return;
        setAdminToken('');
        setToken('');
        setEnquiries([]);
      })
      .finally(() => {
        if (!cancelled) setAuthChecked(true);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  useEffect(() => {
    const onExpired = () => {
      setToken('');
      setEnquiries([]);
    };
    window.addEventListener(AUTH_EXPIRED_EVENT, onExpired);
    return () => window.removeEventListener(AUTH_EXPIRED_EVENT, onExpired);
  }, []);

  useEffect(() => {
    const next = { ...content };
    if (next.hero?.sliderMode !== 'video') {
      next.hero = { ...(next.hero || {}), sliderMode: 'image' };
    }
    if (!Array.isArray(next.hero?.videos)) {
      next.hero = {
        ...(next.hero || {}),
        videos: next.hero?.videoUrl ? [{ video: next.hero.videoUrl }] : []
      };
    }
    if (!Array.isArray(next.instagramVideos)) next.instagramVideos = [];
    setDraft(next);
  }, [content]);

  const handleLogout = () => {
    setAdminToken('');
    setToken('');
    setEnquiries([]);
  };

  const loadEnquiries = async () => {
    const payload = await api.listEnquiries();
    setEnquiries(payload.data || []);
  };

  useEffect(() => {
    if (!editor) return undefined;
    const html = document.documentElement;
    html.classList.add('admin-popup-open');
    document.body.classList.add('admin-popup-open');
    return () => {
      html.classList.remove('admin-popup-open');
      document.body.classList.remove('admin-popup-open');
    };
  }, [editor]);

  useEffect(() => {
    if (!token) return undefined;
    let cancelled = false;

    const tick = async () => {
      if (cancelled || document.hidden) return;
      try {
        const payload = await api.listEnquiries();
        if (!cancelled) setEnquiries(payload.data || []);
      } catch (error) {
        if (cancelled) return;
        if (error.status === 401) {
          setAdminToken('');
          setToken('');
          setEnquiries([]);
          return;
        }
        setNotice(error.message);
      }
    };

    const timer = window.setInterval(tick, 15000);
    return () => {
      cancelled = true;
      window.clearInterval(timer);
    };
  }, [token]);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoggingIn(true);
    setLoginMessage('');
    try {
      const payload = await api.login(email, password);
      setAdminToken(payload.token);
      setToken(payload.token);
      await loadEnquiries();
    } catch (error) {
      setLoginMessage(error.message);
    } finally {
      setLoggingIn(false);
    }
  };

  const showNotice = (text) => {
    setNotice(text);
    window.setTimeout(() => setNotice(''), 2500);
  };

    const persistDraft = async (nextDraft, message = 'Saved to the website.') => {
    setSaving(true);
    try {
      const saved = await api.saveContent(nextDraft);
      const data = saved.data || nextDraft;
      setDraft(data);
      await refreshContent(data);
      showNotice(message);
      return true;
    } catch (error) {
      showNotice(error.message);
      return false;
    } finally {
      setSaving(false);
    }
  };

  const openEditor = (type, index, data) => {
    setEditor({ type, index, data: { ...data } });
  };

  const updateEditor = (field, value) => {
    setEditor((prev) => ({ ...prev, data: { ...prev.data, [field]: value } }));
  };

  const closeEditor = () => setEditor(null);

  const saveEditor = async () => {
    if (!editor) return;
    const { type, index, data } = editor;

    if (type === 'enquiry') {
      setSaving(true);
      try {
        const payload = {
          name: data.name,
          company: data.company,
          phone: data.phone,
          email: data.email,
          service: data.service,
          city: data.city,
          message: data.message,
          status: data.status
        };
        const saved = await api.updateEnquiry(data.id, payload);
        setEnquiries((prev) => prev.map((row) => (row.id === data.id ? { ...row, ...(saved.data || payload) } : row)));
        showNotice('Enquiry updated.');
        closeEditor();
      } catch (error) {
        showNotice(error.message);
      } finally {
        setSaving(false);
      }
      return;
    }

    let nextDraft = { ...draft };
    if (type === 'headline') {
      nextDraft = { ...draft, hero: { ...draft.hero, title: data.title, highlight: data.highlight, tagline: data.tagline } };
    } else if (type === 'company') {
      nextDraft = {
        ...draft,
        company: {
          ...draft.company,
          phones: [data.phone, draft.company?.phones?.[1] || ''],
          emails: [data.email, draft.company?.emails?.[1] || ''],
          headOffice: { ...draft.company?.headOffice, address: data.address }
        }
      };
    } else if (type === 'seo') {
      nextDraft = { ...draft, seo: { ...draft.seo, metaTitle: data.metaTitle, metaDesc: data.metaDesc, keywords: data.keywords } };
    } else if (type === 'slide') {
      const slides = [...(draft.hero?.slides || [])];
      const saved = { type: 'image', image: data.image || '' };
      if (index < 0) slides.push(saved);
      else slides[index] = { ...slides[index], ...saved };
      nextDraft = { ...draft, hero: { ...draft.hero, slides } };
    } else if (type === 'video') {
      const videos = [...(draft.hero?.videos || [])];
      const saved = { video: data.video || '' };
      if (index < 0) videos.push(saved);
      else videos[index] = saved;
      nextDraft = { ...draft, hero: { ...draft.hero, videos } };
    } else if (type === 'stat') {
      const stats = [...(draft.stats || [])];
      const saved = { value: data.value, label: data.label, sub: data.sub };
      if (index < 0) stats.push(saved);
      else stats[index] = saved;
      nextDraft = { ...draft, stats };
    } else if (type === 'service') {
      const services = [...(draft.services || [])];
      const saved = {
        ...data,
        title: data.title || 'New Service',
        features: String(data.featuresText || '').split('\n').map((line) => line.trim()).filter(Boolean)
      };
      delete saved.featuresText;
      if (index < 0) services.push(saved);
      else services[index] = { ...services[index], ...saved };
      nextDraft = { ...draft, services };
    } else if (type === 'fleet') {
      const fleet = [...(draft.fleet || [])];
      const saved = {
        ...data,
        name: data.name || 'New Vehicle',
        features: String(data.featuresText || '').split('\n').map((line) => line.trim()).filter(Boolean)
      };
      delete saved.featuresText;
      if (index < 0) fleet.push(saved);
      else fleet[index] = { ...fleet[index], ...saved };
      nextDraft = { ...draft, fleet };
    } else if (type === 'blog') {
      const blogs = [...(draft.blogs || [])];
      const saved = { ...data, title: data.title || 'New article' };
      if (index < 0) blogs.push(saved);
      else blogs[index] = { ...blogs[index], ...saved };
      nextDraft = { ...draft, blogs };
    } else if (type === 'instagram') {
      const videos = [...(draft.instagramVideos || [])];
      const saved = {
        id: data.id || `ig-${Date.now()}`,
        video: data.video || '',
        title: data.title || 'Instagram reel',
        caption: data.caption || '',
        instagramUrl: data.instagramUrl || ''
      };
      if (index < 0) videos.push(saved);
      else videos[index] = { ...videos[index], ...saved };
      nextDraft = { ...draft, instagramVideos: videos };
    }

    const ok = await persistDraft(nextDraft, 'Saved to the website.');
    if (ok) closeEditor();
  };

  const deleteItem = async (label, updater) => {
    if (!window.confirm(`Delete this ${label}?`)) return;
    await persistDraft(updater(draft), `${label} deleted.`);
  };

  const setSliderMode = async (mode) => {
    await persistDraft({ ...draft, hero: { ...draft.hero, sliderMode: mode } }, 'Slider type updated.');
  };

  const navGroups = NAV.reduce((groups, item) => {
    if (!groups[item.group]) groups[item.group] = [];
    groups[item.group].push(item);
    return groups;
  }, {});

  if (!authChecked) {
    return <div className="admin-login" />;
  }

  if (!token) {
    return (
      <div className="admin-login">
        <div className="admin-login-orb admin-login-orb-gold" aria-hidden="true" />
        <div className="admin-login-orb admin-login-orb-blue" aria-hidden="true" />
        <form className="admin-login-card" onSubmit={handleLogin}>
          <div className="admin-login-brand">
            <img src="/PARVEEN_FLEETS_NEW_LOGO-removebg-preview.png" alt="Parveen Fleets Pvt Ltd" className="brand-logo brand-logo-admin" />
            <span>
              <Shield size={12} />
              Enterprise Command Suite
            </span>
          </div>
          <div className="admin-login-copy">
            <h1>Admin Sign In</h1>
            <p>Secure access to website content, fleet data, and incoming enquiries.</p>
          </div>
          <Field label="Admin email" type="email" value={email} onChange={setEmail} />
          <Field label="Security passcode" type="password" value={password} onChange={setPassword} />
          {loginMessage ? <p className="admin-error">{loginMessage}</p> : null}
          <button type="submit" className="btn-gold admin-login-submit" disabled={loggingIn}>
            {loggingIn ? 'Authenticating...' : 'Enter Control Hub'}
          </button>
          <p className="admin-hint">admin@parveenfleets.in · ParveenAdmin@2026</p>
          <button type="button" className="admin-link" onClick={onBackToWebsite}>
            <ArrowLeft size={14} /> Return to public website
          </button>
        </form>
      </div>
    );
  }

  const newCount = enquiries.filter((item) => item.status === 'New').length;
  const currentNav = NAV.find((item) => item.id === section);
  const editorTitles = {
    headline: 'Edit headline',
    slide: editor?.index < 0 ? 'Add slider image' : 'Edit slider image',
    video: editor?.index < 0 ? 'Add slider video' : 'Edit slider video',
    company: 'Edit company',
    stat: editor?.index < 0 ? 'Add stat' : 'Edit stat',
    service: editor?.index < 0 ? 'Add service' : 'Edit service',
    fleet: editor?.index < 0 ? 'Add vehicle' : 'Edit vehicle',
    blog: editor?.index < 0 ? 'Add article' : 'Edit article',
    instagram: editor?.index < 0 ? 'Add Instagram video' : 'Edit Instagram video',
    seo: 'Edit SEO',
    enquiry: 'Enquiry details'
  };

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <button type="button" className="btn-outline" onClick={onBackToWebsite}>
          <ArrowLeft size={14} /> Website
        </button>
        <div className="admin-topbar-copy">
          <strong>Control Hub</strong>
          <span>{currentNav?.label || 'Dashboard'}</span>
        </div>
        <div className="admin-topbar-actions">
          {notice ? <em className="admin-notice">{notice}</em> : null}
          <span className={`admin-status-pill ${storage === 'mongodb' ? 'is-live' : ''}`}>
            {storage === 'mongodb' ? 'MongoDB connected' : 'Temporary storage'}
          </span>
          <span className="admin-user-chip"><Shield size={14} /> Admin</span>
          <button type="button" className="admin-logout" onClick={handleLogout}>
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      <div className="admin-layout">
        <aside>
          <div className="admin-sidebar-brand">
            <img src="/PARVEEN_FLEETS_NEW_LOGO-removebg-preview.png" alt="Parveen Fleets" />
            <div>
              <strong>Parveen Fleets</strong>
              <span>Website CMS</span>
            </div>
          </div>
          {Object.entries(navGroups).map(([group, items]) => (
            <div key={group} className="admin-nav-group">
              <div className="admin-nav-label">{group}</div>
              {items.map((item) => {
                const Icon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={section === item.id ? 'is-active' : ''}
                    onClick={() => setSection(item.id)}
                  >
                    <Icon size={18} />
                    {item.label}
                    {item.id === 'enquiries' ? <b>{enquiries.length}</b> : null}
                  </button>
                );
              })}
            </div>
          ))}
        </aside>

        <main>
          {section === 'dashboard' && (
            <section>
              <PageHead kicker="Overview" title="Dashboard" text="Live snapshot of enquiries, services, and fleet content." />
              <div className="admin-stats">
                <article><span>Total enquiries</span><strong>{enquiries.length}</strong></article>
                <article><span>New enquiries</span><strong>{newCount}</strong></article>
                <article><span>Services live</span><strong>{draft.services?.length || 0}</strong></article>
                <article><span>Fleet vehicles</span><strong>{draft.fleet?.length || 0}</strong></article>
              </div>
              <DataTable columns={['Name', 'Company', 'Service', 'Status', '']}>
                {(enquiries.slice(0, 6)).map((item) => (
                  <tr key={item.id}>
                    <td><strong>{item.name}</strong></td>
                    <td>{item.company}</td>
                    <td>{item.service}</td>
                    <td>{item.status}</td>
                    <RowActions onEdit={() => openEditor('enquiry', 0, item)} />
                  </tr>
                ))}
              </DataTable>
            </section>
          )}

          {section === 'enquiries' && (
            <section>
              <PageHead kicker="Leads" title="Website Enquiries" text="Click Edit to open the full enquiry and update it." />
              <DataTable columns={['Name', 'Company', 'Service', 'City', 'Status', '']}>
                {enquiries.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <strong>{item.name}</strong>
                      <div className="admin-muted">{item.email}</div>
                    </td>
                    <td>{item.company}</td>
                    <td>{item.service}</td>
                    <td>{item.city}</td>
                    <td>{item.status}</td>
                    <RowActions
                      onEdit={() => openEditor('enquiry', 0, item)}
                      onDelete={async () => {
                        if (!window.confirm('Delete this enquiry?')) return;
                        try {
                          await api.deleteEnquiry(item.id);
                          setEnquiries((prev) => prev.filter((row) => row.id !== item.id));
                          showNotice('Enquiry deleted.');
                        } catch (error) {
                          showNotice(error.message);
                        }
                      }}
                    />
                  </tr>
                ))}
              </DataTable>
            </section>
          )}

          {section === 'hero' && (
            <section>
              <PageHead kicker="Website content" title="Hero & Media" text="Headline stays the same. Edit slider images or videos from the table." />
              <DataTable columns={['Item', 'Details', '']}>
                <tr>
                  <td><strong>Homepage headline</strong></td>
                  <td className="admin-muted">{draft.hero?.title} {draft.hero?.highlight}</td>
                  <RowActions onEdit={() => openEditor('headline', 0, {
                    title: draft.hero?.title,
                    highlight: draft.hero?.highlight,
                    tagline: draft.hero?.tagline
                  })} />
                </tr>
              </DataTable>

              <div className="admin-card">
                <h3>Slider type</h3>
                <p className="admin-muted">Pick one. The homepage will show either an image slider or a video slider.</p>
                <div className="admin-mode-toggle">
                  <button type="button" className={draft.hero?.sliderMode !== 'video' ? 'is-active' : ''} onClick={() => setSliderMode('image')}>
                    <ImageIcon size={18} /> Image slider
                  </button>
                  <button type="button" className={draft.hero?.sliderMode === 'video' ? 'is-active' : ''} onClick={() => setSliderMode('video')}>
                    <Video size={18} /> Video slider
                  </button>
                </div>
              </div>

              {draft.hero?.sliderMode === 'video' ? (
                <>
                  <PageHead
                    title="Video slides"
                    text="Each video opens in a popup to upload or replace."
                    action={(
                      <button type="button" className="btn-gold" onClick={() => openEditor('video', -1, { video: '' })}>
                        <Plus size={16} /> Add video
                      </button>
                    )}
                  />
                  <DataTable columns={['Video', 'File', '']}>
                    {(draft.hero?.videos || []).map((item, index) => (
                      <tr key={`video-${index}`}>
                        <td><NameCell video={item.video} title={`Video ${index + 1}`} /></td>
                        <td className="admin-muted">{item.video || 'No file yet'}</td>
                        <RowActions
                          onEdit={() => openEditor('video', index, item)}
                          onDelete={() => deleteItem('video', (prev) => ({
                            ...prev,
                            hero: { ...prev.hero, videos: prev.hero.videos.filter((_, videoIndex) => videoIndex !== index) }
                          }))}
                        />
                      </tr>
                    ))}
                  </DataTable>
                </>
              ) : (
                <>
                  <PageHead
                    title="Image slides"
                    text="Each photo opens in a popup to upload or replace."
                    action={(
                      <button type="button" className="btn-gold" onClick={() => openEditor('slide', -1, { image: '' })}>
                        <Plus size={16} /> Add image
                      </button>
                    )}
                  />
                  <DataTable columns={['Slide', 'Image', '']}>
                    {(draft.hero?.slides || []).map((slide, index) => (
                      <tr key={`slide-${index}`}>
                        <td><NameCell image={slide.image} title={`Slide ${index + 1}`} /></td>
                        <td className="admin-muted">{slide.image || 'No image yet'}</td>
                        <RowActions
                          onEdit={() => openEditor('slide', index, slide)}
                          onDelete={() => deleteItem('slide', (prev) => ({
                            ...prev,
                            hero: { ...prev.hero, slides: prev.hero.slides.filter((_, slideIndex) => slideIndex !== index) }
                          }))}
                        />
                      </tr>
                    ))}
                  </DataTable>
                </>
              )}
            </section>
          )}

          {section === 'company' && (
            <section>
              <PageHead kicker="Website content" title="Company" text="Click Edit to change contact details used across the site." />
              <DataTable columns={['Phone', 'Email', 'Head office', '']}>
                <tr>
                  <td><strong>{draft.company?.phones?.[0]}</strong></td>
                  <td>{draft.company?.emails?.[0]}</td>
                  <td className="admin-muted">{draft.company?.headOffice?.address}</td>
                  <RowActions onEdit={() => openEditor('company', 0, {
                    phone: draft.company?.phones?.[0],
                    email: draft.company?.emails?.[0],
                    address: draft.company?.headOffice?.address
                  })} />
                </tr>
              </DataTable>
            </section>
          )}

          {section === 'stats' && (
            <section>
              <PageHead
                kicker="Website content"
                title="Stats"
                text="Numbers shown under the hero. Click Edit to change a row."
                action={(
                  <button type="button" className="btn-gold" onClick={() => openEditor('stat', -1, { value: '', label: '', sub: '' })}>
                    <Plus size={16} /> Add stat
                  </button>
                )}
              />
              <DataTable columns={['Value', 'Label', 'Subtext', '']}>
                {(draft.stats || []).map((stat, index) => (
                  <tr key={stat.label + index}>
                    <td><strong>{stat.value}</strong></td>
                    <td>{stat.label}</td>
                    <td className="admin-muted">{stat.sub}</td>
                    <RowActions
                      onEdit={() => openEditor('stat', index, stat)}
                      onDelete={() => deleteItem('stat', (prev) => ({
                        ...prev,
                        stats: prev.stats.filter((_, itemIndex) => itemIndex !== index)
                      }))}
                    />
                  </tr>
                ))}
              </DataTable>
            </section>
          )}

          {section === 'services' && (
            <section>
              <PageHead
                kicker="Website content"
                title="Services"
                text="Click Edit to open the full service details in a popup."
                action={(
                  <button type="button" className="btn-gold" onClick={() => openEditor('service', -1, {
                    id: `service-${Date.now()}`, title: '', tagline: '', description: '', image: '', icon: 'Car', popular: false, featuresText: ''
                  })}>
                    <Plus size={16} /> Add service
                  </button>
                )}
              />
              <DataTable columns={['Service', 'Tagline', '']}>
                {(draft.services || []).map((service, index) => (
                  <tr key={service.id || index}>
                    <td><NameCell image={service.image} title={service.title || 'Untitled service'} /></td>
                    <td className="admin-muted">{service.tagline}</td>
                    <RowActions
                      onEdit={() => openEditor('service', index, { ...service, featuresText: (service.features || []).join('\n') })}
                      onDelete={() => deleteItem('service', (prev) => ({
                        ...prev,
                        services: prev.services.filter((_, itemIndex) => itemIndex !== index)
                      }))}
                    />
                  </tr>
                ))}
              </DataTable>
            </section>
          )}

          {section === 'fleet' && (
            <section>
              <PageHead
                kicker="Website content"
                title="Fleet"
                text="Click Edit to change vehicle details and photo."
                action={(
                  <button type="button" className="btn-gold" onClick={() => openEditor('fleet', -1, {
                    id: `fleet-${Date.now()}`, name: '', category: 'Executive Sedans', capacity: '4 Passengers', fuel: 'Petrol', rateEstimate: '', image: '', badge: 'Available', luggage: '2 Bags', featuresText: ''
                  })}>
                    <Plus size={16} /> Add vehicle
                  </button>
                )}
              />
              <DataTable columns={['Vehicle', 'Category', 'Rate', '']}>
                {(draft.fleet || []).map((vehicle, index) => (
                  <tr key={vehicle.id || index}>
                    <td><NameCell image={vehicle.image} title={vehicle.name} /></td>
                    <td>{vehicle.category}</td>
                    <td>{vehicle.rateEstimate}</td>
                    <RowActions
                      onEdit={() => openEditor('fleet', index, { ...vehicle, featuresText: (vehicle.features || []).join('\n') })}
                      onDelete={() => deleteItem('vehicle', (prev) => ({
                        ...prev,
                        fleet: prev.fleet.filter((_, itemIndex) => itemIndex !== index)
                      }))}
                    />
                  </tr>
                ))}
              </DataTable>
            </section>
          )}

          {section === 'blogs' && (
            <section>
              <PageHead
                kicker="Website content"
                title="Blogs"
                text="Click Edit to change an article. Saved copy appears on the website."
                action={(
                  <button type="button" className="btn-gold" onClick={() => openEditor('blog', -1, {
                    id: `blog-${Date.now()}`, title: '', category: 'Corporate Transport', readTime: '4 min read', date: new Date().toLocaleDateString('en-IN', { month: 'long', day: 'numeric', year: 'numeric' }), summary: '', author: 'Parveen Fleets', content: ''
                  })}>
                    <Plus size={16} /> Add article
                  </button>
                )}
              />
              <DataTable columns={['Title', 'Category', 'Date', '']}>
                {(draft.blogs || []).map((blog, index) => (
                  <tr key={blog.id || index}>
                    <td><strong>{blog.title}</strong></td>
                    <td>{blog.category}</td>
                    <td className="admin-muted">{blog.date}</td>
                    <RowActions
                      onEdit={() => openEditor('blog', index, blog)}
                      onDelete={() => deleteItem('article', (prev) => ({
                        ...prev,
                        blogs: prev.blogs.filter((_, itemIndex) => itemIndex !== index)
                      }))}
                    />
                  </tr>
                ))}
              </DataTable>
            </section>
          )}

          {section === 'instagram' && (
            <section>
              <PageHead
                kicker="Website content"
                title="Instagram videos"
                text="Upload 9:16 vertical videos. They appear on the homepage and the Instagram page."
                action={(
                  <button type="button" className="btn-gold" onClick={() => openEditor('instagram', -1, {
                    id: `ig-${Date.now()}`, video: '', title: '', caption: '', instagramUrl: ''
                  })}>
                    <Plus size={16} /> Add video
                  </button>
                )}
              />
              <DataTable columns={['Video', 'Title', 'Caption', '']}>
                {(draft.instagramVideos || []).map((item, index) => (
                  <tr key={item.id || index}>
                    <td>
                      <NameCell video={item.video} title={item.title || `Reel ${index + 1}`} />
                    </td>
                    <td><strong>{item.title || 'Untitled reel'}</strong></td>
                    <td className="admin-muted">{item.caption || '—'}</td>
                    <RowActions
                      onEdit={() => openEditor('instagram', index, item)}
                      onDelete={() => deleteItem('Instagram video', (prev) => ({
                        ...prev,
                        instagramVideos: (prev.instagramVideos || []).filter((_, itemIndex) => itemIndex !== index)
                      }))}
                    />
                  </tr>
                ))}
              </DataTable>
            </section>
          )}

          {section === 'seo' && (
            <section>
              <PageHead kicker="Website content" title="SEO" text="Click Edit to change search title and description." />
              <DataTable columns={['Meta title', 'Keywords', '']}>
                <tr>
                  <td><strong>{draft.seo?.metaTitle}</strong></td>
                  <td className="admin-muted">{draft.seo?.keywords}</td>
                  <RowActions onEdit={() => openEditor('seo', 0, draft.seo || {})} />
                </tr>
              </DataTable>
            </section>
          )}
        </main>
      </div>

      {editor && typeof document !== 'undefined'
        ? createPortal(
          <div className="modal-overlay admin-popup-overlay" onClick={() => !saving && closeEditor()}>
            <div className="admin-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
              <div className="admin-content-head">
                <div>
                  <h2>{editorTitles[editor.type] || 'Edit details'}</h2>
                  <p>Review the details, make changes, then save.</p>
                </div>
                <button type="button" className="admin-icon-btn" onClick={closeEditor} disabled={saving}>
                  <X size={18} />
                </button>
              </div>

              {editor.type === 'headline' && (
                <>
                  <Field label="Title" value={editor.data.title} onChange={(value) => updateEditor('title', value)} />
                  <Field label="Gold highlight" value={editor.data.highlight} onChange={(value) => updateEditor('highlight', value)} />
                  <Field label="Tagline" value={editor.data.tagline} onChange={(value) => updateEditor('tagline', value)} />
                </>
              )}

              {editor.type === 'slide' && (
                <MediaField label="Slider image" kind="image" accept="image/jpeg,image/png,image/webp,image/gif" value={editor.data.image} onUploaded={(url) => updateEditor('image', url)} />
              )}

              {editor.type === 'video' && (
                <MediaField label="Slider video" kind="video" accept="video/mp4,video/webm,video/ogg,video/quicktime" value={editor.data.video} onUploaded={(url) => updateEditor('video', url)} />
              )}

              {editor.type === 'company' && (
                <>
                  <Field label="Primary phone" value={editor.data.phone} onChange={(value) => updateEditor('phone', value)} />
                  <Field label="Sales email" value={editor.data.email} onChange={(value) => updateEditor('email', value)} />
                  <Field label="Head office" rows={3} value={editor.data.address} onChange={(value) => updateEditor('address', value)} />
                </>
              )}

              {editor.type === 'stat' && (
                <>
                  <Field label="Value" value={editor.data.value} onChange={(value) => updateEditor('value', value)} />
                  <Field label="Label" value={editor.data.label} onChange={(value) => updateEditor('label', value)} />
                  <Field label="Subtext" value={editor.data.sub} onChange={(value) => updateEditor('sub', value)} />
                </>
              )}

              {editor.type === 'service' && (
                <>
                  <MediaField label="Service image" kind="image" accept="image/jpeg,image/png,image/webp,image/gif" value={editor.data.image} onUploaded={(url) => updateEditor('image', url)} />
                  <div className="admin-grid admin-grid-2">
                    <Field label="Service name" value={editor.data.title} onChange={(value) => updateEditor('title', value)} />
                    <Field label="Tagline" value={editor.data.tagline} onChange={(value) => updateEditor('tagline', value)} />
                  </div>
                  <Field label="Description" rows={4} value={editor.data.description} onChange={(value) => updateEditor('description', value)} />
                  <Field label="Features (one per line)" rows={4} value={editor.data.featuresText} onChange={(value) => updateEditor('featuresText', value)} />
                  <label className="admin-check">
                    <input type="checkbox" checked={Boolean(editor.data.popular)} onChange={(event) => updateEditor('popular', event.target.checked)} />
                    Featured service
                  </label>
                </>
              )}

              {editor.type === 'fleet' && (
                <>
                  <MediaField label="Vehicle photo" kind="image" accept="image/jpeg,image/png,image/webp" value={editor.data.image} onUploaded={(url) => updateEditor('image', url)} />
                  <div className="admin-grid admin-grid-2">
                    <Field label="Name" value={editor.data.name} onChange={(value) => updateEditor('name', value)} />
                    <Field label="Category" value={editor.data.category} onChange={(value) => updateEditor('category', value)} />
                    <Field label="Rate" value={editor.data.rateEstimate} onChange={(value) => updateEditor('rateEstimate', value)} />
                    <Field label="Capacity" value={editor.data.capacity} onChange={(value) => updateEditor('capacity', value)} />
                  </div>
                  <Field label="Features (one per line)" rows={3} value={editor.data.featuresText} onChange={(value) => updateEditor('featuresText', value)} />
                </>
              )}

              {editor.type === 'instagram' && (
                <>
                  <MediaField
                    label="9:16 Instagram video"
                    kind="video"
                    aspect="9x16"
                    accept="video/mp4,video/webm,video/ogg,video/quicktime"
                    value={editor.data.video}
                    onUploaded={(url) => updateEditor('video', url)}
                  />
                  <Field label="Title" value={editor.data.title} onChange={(value) => updateEditor('title', value)} />
                  <Field label="Caption" rows={3} value={editor.data.caption} onChange={(value) => updateEditor('caption', value)} />
                  <Field label="Instagram URL (optional)" value={editor.data.instagramUrl} onChange={(value) => updateEditor('instagramUrl', value)} />
                </>
              )}

              {editor.type === 'blog' && (
                <>
                  <Field label="Title" value={editor.data.title} onChange={(value) => updateEditor('title', value)} />
                  <div className="admin-grid admin-grid-2">
                    <Field label="Category" value={editor.data.category} onChange={(value) => updateEditor('category', value)} />
                    <Field label="Date" value={editor.data.date} onChange={(value) => updateEditor('date', value)} />
                  </div>
                  <Field label="Summary" rows={3} value={editor.data.summary} onChange={(value) => updateEditor('summary', value)} />
                  <Field label="Article content" rows={6} value={editor.data.content} onChange={(value) => updateEditor('content', value)} />
                </>
              )}

              {editor.type === 'seo' && (
                <>
                  <Field label="Meta title" value={editor.data.metaTitle} onChange={(value) => updateEditor('metaTitle', value)} />
                  <Field label="Meta description" rows={3} value={editor.data.metaDesc} onChange={(value) => updateEditor('metaDesc', value)} />
                  <Field label="Keywords" value={editor.data.keywords} onChange={(value) => updateEditor('keywords', value)} />
                </>
              )}

              {editor.type === 'enquiry' && (
                <>
                  <div className="admin-grid admin-grid-2">
                    <Field label="Name" value={editor.data.name} onChange={(value) => updateEditor('name', value)} />
                    <Field label="Company" value={editor.data.company} onChange={(value) => updateEditor('company', value)} />
                    <Field label="Phone" value={editor.data.phone} onChange={(value) => updateEditor('phone', value)} />
                    <Field label="Email" value={editor.data.email} onChange={(value) => updateEditor('email', value)} />
                    <Field label="Service" value={editor.data.service} onChange={(value) => updateEditor('service', value)} />
                    <Field label="City" value={editor.data.city} onChange={(value) => updateEditor('city', value)} />
                  </div>
                  <label className="admin-field">
                    <span>Status</span>
                    <select className="pf-input" value={editor.data.status || 'New'} onChange={(event) => updateEditor('status', event.target.value)}>
                      <option>New</option>
                      <option>In Discussion</option>
                      <option>Quoted</option>
                      <option>Won</option>
                      <option>Closed</option>
                    </select>
                  </label>
                  <Field label="Message" rows={4} value={editor.data.message} onChange={(value) => updateEditor('message', value)} />
                </>
              )}

              <div className="admin-modal-actions">
                <button type="button" className="btn-outline" onClick={closeEditor} disabled={saving}>Cancel</button>
                <button type="button" className="btn-gold" onClick={saveEditor} disabled={saving}>
                  <Save size={16} /> {saving ? 'Saving...' : 'Save'}
                </button>
              </div>
            </div>
          </div>,
          document.body
        )
        : null}
    </div>
  );
}
