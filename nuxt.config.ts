// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-primevue'
  ],
  typescript: {
    shim: false
  },
  components: [
    {
      path: '~/components',
      pathPrefix: false
    }
  ],
  css: ['primevue/resources/themes/aura-light-green/theme.css']
})
