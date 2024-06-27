// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/main.css"],
  modules: ["@nuxtjs/tailwindcss", [
    "@nuxtjs/google-fonts",
    {
      families: {
        Roboto: true,
      },
    },
  ], "@nuxt/content", "@nuxt/eslint", "@nuxt/image", "nuxt-viewport", "nuxt-swiper", "@nuxtjs/i18n"],
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith("swiper-"),
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  i18n: {
    vueI18n: './i18n.config.ts'
  }
});