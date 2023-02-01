/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        permanent: false,
        destination: '/main',
      },
    ];
  },
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API: 'http://localhost:3001',
  },
};

module.exports = nextConfig;