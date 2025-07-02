/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client'],
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Note: rewrites and headers are not supported with output: 'export'
  // Headers are handled by _headers file for Cloudflare Pages
};

module.exports = nextConfig;