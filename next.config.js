/** @type {import('next').NextConfig, import('dotenv').config()} */
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
  images: {
    domains: ['firebasestorage.googleapis.com'],
  },
  reactStrictMode: false,
  swcMinify: true,
  env: {
    API: 'http://localhost:3001',
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY,
    MESSENGER_MAIL: process.env.MESSENGER_MAIL,
    MESSAGE_RECEIVING_MAIL: process.env.MESSAGE_RECEIVING_MAIL,
    MONGOOSE_PASSWORD: process.env.MONGOOSE_PASSWORD,
    API_KEY: process.env.API_KEY,
    AUTH_DOMAIN: process.env.AUTH_DOMAIN,
    DATABASE_URL: process.env.DATABASE_URL,
    PROJECT_ID: process.env.PROJECT_ID,
    STORAGE_BUCKET: process.env.STORAGE_BUCKET,
    MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
    APP_ID: process.env.APP_ID,
    TELEGRAM_BOT_TOKEN: process.env.TELEGRAM_BOT_TOKEN,
    TELEGRAM_TIMUR_ID: process.env.TELEGRAM_TIMUR_ID,
  },
};

module.exports = nextConfig;
