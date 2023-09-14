import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
// import * as cssd from "@mdi/font/css/materialdesignicons.css";
// import * as components from "vuetify/components";
// import * as directives from "vuetify/directives";

// export default createVuetify({
//   icons: {
//     defaultSet: "mdi",
//     aliases,
//     sets: {
//       mdi,
//     },
//   },
// });

// export default defineNuxtPlugin({
//   name: 'my-plugin',
//   enforce: 'pre', // or 'post'
//   async setup (nuxtApp) {
//     // this is the equivalent of a normal functional plugin
//   },
//   hooks: {
//     // You can directly register Nuxt app hooks here
//     'app:created'() {
//       const nuxtApp = useNuxtApp()
//       //
//     }
//   }
// })

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    // components,
    // directives,
    icons: {
      defaultSet: "mdi",
      aliases,
      sets: {
        mdi,
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
  // nuxtApp.vueApp.use(cssd);
});
