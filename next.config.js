/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // required for static build
  images: { unoptimized: true },
  reactStrictMode: true
};

module.exports = nextConfig;
