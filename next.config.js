/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Comment out basePath for local development
  // basePath: '/shadowlabs-website',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig