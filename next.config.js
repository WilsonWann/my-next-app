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
        }
      ],
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
    compiler: {
      removeConsole: true,
    }
  }
};

// module.exports = nextConfig
