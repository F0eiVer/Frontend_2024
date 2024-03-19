// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [ 'radix-vue/nuxt',
    ['@nuxtjs/google-fonts', {
      families: {
       'Open Sans': [400, 700],
        Montserrat: true,
      }
    }],
  ],
  components: [
    {
      path: '~/layouts',
      pathPrefix: false,
    },
  ],
})
