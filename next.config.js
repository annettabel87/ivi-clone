/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'avatars.mds.yandex.net',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
