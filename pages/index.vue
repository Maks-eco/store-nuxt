<script setup lang="ts">
import { useDisplay } from "vuetify";
definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "slide-in",
  },
});
</script>

<template>
  <v-main
    class="d-flex justify-center align-center pl-sm-none"
    style="min-height: 300px"
  >
    <ProductList />
  </v-main>
</template>

<style lang="scss" scoped></style>
