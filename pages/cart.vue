<script setup>
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
    <CartProductList />
  </v-main>
</template>
