import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/photos/**',
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    serverActions: true,
  }
}

export default nextConfig
