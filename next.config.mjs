/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true, // Serves your high-res local images directly via Vercel's global CDN for $0
  },
};

export default nextConfig;