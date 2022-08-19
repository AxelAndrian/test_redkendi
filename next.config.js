/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_BASE_API_URL: process.env.NEXT_BASE_API_URL
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
