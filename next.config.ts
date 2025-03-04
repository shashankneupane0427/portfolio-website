module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
    experimental: {
      turbo: {
        rules: {
          '*.svg': {
            loaders: ['@svgr/webpack'],
            as: '*.js',
          },
        },
      },
    },
  }