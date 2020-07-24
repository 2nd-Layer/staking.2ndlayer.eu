export default {
  target: 'static', // default: 'server'
  mode: 'spa',
  components: true,
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '2ⁿᵈ Layer Staking Services',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/images/favicon.ico' },
      { rel: 'apple-touch-icon-precomposed', sizes: '57x57', href: '/images/apple-touch-icon-57x57.png' },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css'
      }
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
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/core.scss'
  ],
  plugins: [
    '@/plugins/particles'
  ]
}