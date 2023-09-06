// https://nuxt.com/docs/api/configuration/nuxt-config
// import { defineNuxtConfig } from "@nuxt/bridge";
const baseUrl = "/store-nuxt/";

export default defineNuxtConfig({
  devtools: { enabled: false },
  // extends: ["github:fe-side/vue-test/assets"],
  nitro: {
    prerender: {
      routes: ["/store-nuxt", "/"],
    },
  },
  runtimeConfig: {
    public: {
      baseUrl: baseUrl,
    },
  },
  app: {
    // pageTransition: {
    //   name: "fade",
    //   mode: "out-in", // default
    // },
    // layoutTransition: {
    //   name: "slide",
    //   mode: "out-in", // default
    // },
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      title: "Store App",
      htmlAttrs: {
        lang: "ru",
      },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
    },
    baseURL: process.env.NODE_ENV === "development" ? "" : baseUrl,
    buildAssetsDir: process.env.NODE_ENV === "development" ? "" : "assets",
  },
  modules: [
    // "@nuxthq/ui",
    // "nuxt-storage",
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
