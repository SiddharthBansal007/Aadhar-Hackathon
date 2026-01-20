/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow reading CSV from parent directory
  experimental: {
    serverComponentsExternalPackages: ['papaparse']
  }
}

module.exports = nextConfig
