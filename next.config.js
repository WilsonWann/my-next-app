/** @type {import('next').NextConfig} */


const { PHASE_DEVELOPMENT_SERVER, compiler } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {

  const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'lh3.googleusercontent.com',
        },
        {
          protocol: 'http',
          hostname: '10.42.208.19',
          port: '3000'
        },
        {
          protocol: 'https',
          hostname: 'my-next-app-99.s3.ap-northeast-1.amazonaws.com',
        },
      ],
    },
    experimental: {
      serverActions: {
        bodySizeLimit: '2mb',
      },
    },
    async redirects() {
      return [
        // Basic redirect
        {
          source: '/about',
          destination: '/',
          permanent: true,
        },
        {
          source: '/video',
          destination: '/news',
          permanent: true,
        },
      ]
    },
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,

    }
  }

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      ...nextConfig,
    }
  }

  return {
    ...nextConfig,
  }
};

// module.exports = nextConfig
