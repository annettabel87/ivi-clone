/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'thumbs.dfs.ivi.ru',
        port: '',
        pathname: '/storage**/**',
      },
      {
        protocol: 'https',
        hostname: 'gambit-parent.dfs.ivi.ru',
        port: '',
        pathname: '/static/**',
      },
    ],
  },
};

module.exports = nextConfig;
