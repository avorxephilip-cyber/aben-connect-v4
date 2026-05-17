import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: { domains: ['atvyppynnjrxvejusrox.supabase.co'] },
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
}

export default nextConfig
