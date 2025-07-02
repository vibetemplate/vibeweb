/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  images: {
    unoptimized: true, // Required for static export
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Enable static export for Cloudflare Pages
  output: 'export',
  distDir: 'out',
  // Disable server-side features that don't work with static export
  generateEtags: false,
};

module.exports = nextConfig;