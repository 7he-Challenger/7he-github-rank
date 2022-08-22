module.exports = {
    images: {
      domains: ['avatars.githubusercontent.com','www.github.com','api.github.com'],
    },
    async redirects() {
        return [
          {
            source: '/',
            destination: '/page/1',
            permanent: true,
          },
        ]
      },
  }