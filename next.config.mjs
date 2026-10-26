/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverExternalPackages: ['mongoose'],
  images: {
    unoptimized: true
  },
  experimental: {
    proxyClientMaxBodySize: '64mb',
    serverActions: {
      bodySizeLimit: '64mb'
    }
  }
};

export default nextConfig;
