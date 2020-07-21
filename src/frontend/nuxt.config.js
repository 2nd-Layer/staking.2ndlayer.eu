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
        hostname: 'https://thestorageguy.2ndlayer.eu',
        gzip: true,
      },
}