export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'OwlSpace',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { httpEquiv: 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'description', content: '2027 突破大氣層，首創太空旅行未來券' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'white' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-title', content: 'OwlSpace' },
      { name: 'mobile-web-app-capable', content: 'yes' },
      { hid: 'twitter:site', name: 'twitter:site', content: 'https://www.owlting.com/owlspace' },
      { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
      { hid: 'twitter:image', name: 'twitter:image', content: 'https://static.owlting.com/owlting_official/img/share/home.png' },
      { hid: 'og:title', property: 'og:title', content: '2027 突破大氣層，首創太空旅行未來券' },
      { hid: 'og:description', property: 'og:description', content: '2027 突破大氣層，首創太空旅行未來券' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'OwlSpace' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://www.owlting.com/owlspace' },
      { hid: 'og:image', property: 'og:image', content: 'https://static.owlting.com/owlting_official/img/share/home.png' },
      { hid: 'og:image:secure_url', property: 'og:image:secure_url', content: 'https://static.owlting.com/owlting_official/img/share/home.png' },
      { hid: 'og:image:type', property: 'og:image:type', content: 'image/png' },
      { hid: 'og:image:width', property: 'og:image:width', content: '480' },
      { hid: 'og:image:height', property: 'og:image:height', content: '272' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;500;700' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/style/main.sass'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/directives' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  server: {
    port: 3333,
    host: '0.0.0.0'
  },

  styleResources: {
    sass: [
      '~/assets/style/_variables.sass',
      '~/assets/style/_mixins.sass'
    ]
  }
}
