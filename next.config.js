/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'picsum.photos',
      'cdn.imagin.studio',
      'img.youtube.com',
      'www.paypal.com',
    ],
  },
};

module.exports = nextConfig;
