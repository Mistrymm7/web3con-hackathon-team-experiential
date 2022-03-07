/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
    register: true,
    skipWaiting: true,
  },
  env: {
    INFURA_API_KEY: '5c004c9a076341fca194b4eea03ee74e',
  },
  images: {
    domains: ['lh3.googleusercontent.com'],
  }
});
