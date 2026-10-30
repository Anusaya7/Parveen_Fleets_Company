/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['mongoose'],
  images: {
    unoptimized: true
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '64mb'
    }
  }
};

export default nextConfig;
