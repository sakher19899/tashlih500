/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['hebbkx1anhila5yf.public.blob.vercel-storage.com'],
    unoptimized: process.env.NODE_ENV !== 'production',
  },
};

export default nextConfig;
