/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'st.kp.yandex.net',
        port: '',
        pathname: '/images/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.mds.yandex.net',
        port: '',
        pathname: '/get-kinopoisk-image/**',
      },
      {
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
