export default {
    target: 'static', // default: 'server'
    /*
    ** Headers of the page
    ** See https://nuxtjs.org/api/configuration-head
    */
    head: {
      title: process.env.npm_package_name || '',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },
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