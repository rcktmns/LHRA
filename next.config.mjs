/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    domains: ['scontent.fmci2-1.fna.fbcdn.net'],
    unoptimized: true,
  },
  output: 'standalone',
}

export default nextConfig
