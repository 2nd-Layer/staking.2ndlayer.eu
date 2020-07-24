export default {
    target: 'static', // default: 'server'
    modules: [
        'nuxt-buefy',
        '@nuxtjs/sitemap',
        '@nuxt/components',
        ['@nuxtjs/google-analytics', {
          id: 'UA-113467444-4'
        }]
      ],
    sitemap: {
        hostname: 'https://staking.2ndlayer.eu',
        gzip: true,
      },
}