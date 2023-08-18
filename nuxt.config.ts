// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from "@nuxt/bridge";

export default defineNuxtConfig({
  devtools: { enabled: false },
  app: {
    head: {
      title: "Store App",
      htmlAttrs: {
        lang: "ru",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
  },
  modules: [
    // "@nuxthq/ui",
    [
      "@pinia/nuxt",
      {
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  imports: {
    dirs: ["store"],
  },
  css: ["@/assets/css/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/global.scss" as *;',
        },
      },
    },
  },
});
