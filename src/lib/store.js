import mongoose from 'mongoose';
import { DEFAULT_HERO_SLIDES, buildDefaultContent, buildSeedEnquiries } from './defaultContent';

const enquirySchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    company: { type: String, default: '' },
    phone: { type: String, required: true },
    email: { type: String, default: '' },
    service: { type: String, default: '' },
    city: { type: String, default: '' },
    fleetSize: { type: String, default: '' },
    message: { type: String, default: '' },
    status: { type: String, default: 'New' },
    source: { type: String, default: 'website' }
  },
  { timestamps: true }
);

const contentSchema = new mongoose.Schema(
  {
    key: { type: String, unique: true, default: 'website' },
    data: { type: mongoose.Schema.Types.Mixed, required: true }
  },
  { timestamps: true }
);

const Enquiry = mongoose.models.Enquiry || mongoose.model('Enquiry', enquirySchema);
const SiteContent = mongoose.models.SiteContent || mongoose.model('SiteContent', contentSchema);

function getMemory() {
  if (!globalThis.__parveenMemory) {
    globalThis.__parveenMemory = {
      usingMongo: false,
      seeded: false,
      content: buildDefaultContent(),
      enquiries: buildSeedEnquiries().map(toEnquiry)
    };
  }
  return globalThis.__parveenMemory;
}

function toEnquiry(doc) {
  const item = doc.toObject ? doc.toObject() : doc;
  const created = item.createdAt || item.date || new Date();
  return {
    id: String(item.id || item._id || `PF-LEAD-${Date.now()}`),
    name: item.name || '',
    company: item.company || '',
    phone: item.phone || '',
    email: item.email || '',
    service: item.service || '',
    city: item.city || '',
    fleetSize: item.fleetSize || '',
    message: item.message || '',
    status: item.status || 'New',
    source: item.source || 'website',
    date: new Date(created).toISOString().slice(0, 10)
  };
}

async function connectMongo(uri) {
  if (mongoose.connection.readyState >= 1) return;
  try {
    if (!globalThis.__parveenMongo) {
      globalThis.__parveenMongo = mongoose.connect(uri, {
        bufferCommands: false,
        maxPoolSize: 5,
        serverSelectionTimeoutMS: 8000
      });
    }
    await globalThis.__parveenMongo;
  } catch (error) {
    globalThis.__parveenMongo = undefined;
    throw error;
  }
}

export async function connectStore() {
  const memory = getMemory();
  const uri = process.env.MONGODB_URI?.trim();
  if (!uri) return false;

  try {
    await connectMongo(uri);
    memory.usingMongo = true;

    if (!memory.seeded) {
      await SiteContent.findOneAndUpdate(
        { key: 'website' },
        { $setOnInsert: { data: buildDefaultContent() } },
        { upsert: true, new: true }
      );
      const enquiryCount = await Enquiry.countDocuments();
      if (enquiryCount === 0) {
        await Enquiry.insertMany(buildSeedEnquiries());
      }
      memory.seeded = true;
    }

    return true;
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    memory.usingMongo = false;
    return false;
  }
}

export async function listEnquiries() {
  const memory = getMemory();
  if (memory.usingMongo) {
    const rows = await Enquiry.find().sort({ createdAt: -1 });
    return rows.map(toEnquiry);
  }
  return [...memory.enquiries];
}

export async function createEnquiry(payload) {
  const memory = getMemory();
  const record = {
    name: payload.name,
    company: payload.company || '',
    phone: payload.phone,
    email: payload.email || '',
    service: payload.service || '',
    city: payload.city || '',
    fleetSize: payload.fleetSize || payload.fleet_size || '',
    message: payload.message || '',
    status: 'New',
    source: payload.source || 'website'
  };

  if (memory.usingMongo) {
    const saved = await Enquiry.create(record);
    return toEnquiry(saved);
  }

  const saved = {
    ...record,
    id: `PF-LEAD-${Date.now()}`,
    date: new Date().toISOString().slice(0, 10)
  };
  memory.enquiries.unshift(saved);
  return saved;
}

export async function updateEnquiry(id, updates) {
  const memory = getMemory();
  if (memory.usingMongo) {
    const saved = await Enquiry.findByIdAndUpdate(id, updates, { new: true });
    return saved ? toEnquiry(saved) : null;
  }
  const index = memory.enquiries.findIndex((item) => item.id === id);
  if (index === -1) return null;
  memory.enquiries[index] = { ...memory.enquiries[index], ...updates };
  return memory.enquiries[index];
}

export async function deleteEnquiry(id) {
  const memory = getMemory();
  if (memory.usingMongo) {
    const removed = await Enquiry.findByIdAndDelete(id);
    return Boolean(removed);
  }
  const before = memory.enquiries.length;
  memory.enquiries = memory.enquiries.filter((item) => item.id !== id);
  return memory.enquiries.length < before;
}

function normalizeContent(data = {}) {
  const defaults = buildDefaultContent();
  const next = { ...defaults, ...data };
  next.hero = { ...defaults.hero, ...(data.hero || {}) };
  if (!next.hero.slides?.length) next.hero.slides = DEFAULT_HERO_SLIDES;
  if (next.hero.sliderMode !== 'video') next.hero.sliderMode = 'image';
  if (!Array.isArray(next.hero.videos)) next.hero.videos = [];
  if (next.hero.videoUrl && !next.hero.videos.length) {
    next.hero.videos = [{ video: next.hero.videoUrl }];
  }
  if (Array.isArray(data.services) && data.services.length) {
    const byId = Object.fromEntries(defaults.services.map((service) => [service.id, service]));
    next.services = data.services.map((service) => ({
      ...(byId[service.id] || {}),
      ...service,
      image: service.image || byId[service.id]?.image || ''
    }));
  }
  const reels = Array.isArray(data.instagramVideos) ? data.instagramVideos : defaults.instagramVideos;
  next.instagramVideos = reels.filter(Boolean).map((item, index) => ({
    id: item.id || `ig-${index + 1}`,
    video: item.video || '',
    title: item.title || '',
    caption: item.caption || '',
    instagramUrl: item.instagramUrl || ''
  }));
  return next;
}

export async function getContent() {
  const memory = getMemory();
  if (memory.usingMongo) {
    const doc = await SiteContent.findOne({ key: 'website' });
    return normalizeContent(doc?.data);
  }
  return normalizeContent(memory.content);
}

export async function saveContent(data) {
  const memory = getMemory();
  const normalized = normalizeContent(data);
  if (memory.usingMongo) {
    const doc = await SiteContent.findOneAndUpdate(
      { key: 'website' },
      { data: normalized },
      { new: true, upsert: true }
    );
    return normalizeContent(doc.data);
  }
  memory.content = normalized;
  return memory.content;
}

export function getStorageMode() {
  return getMemory().usingMongo ? 'mongodb' : 'memory';
}
