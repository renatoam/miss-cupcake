/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    PROJECT_ROOT: __dirname
  },
  images: {
    domains: ['anima-uploads.s3.amazonaws.com']
  }
}

module.exports = nextConfig
