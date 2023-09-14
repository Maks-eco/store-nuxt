<script setup lang="ts">
import { useDisplay } from "vuetify";
// import { mdiDotsVertical } from "@mdi/js";
// import "@mdi/font/css/materialdesignicons.css";
const store = useCounterStore();
const route = useRoute();
const hideCart = ref(true);
const hideCategory = ref(true);

const { smAndUp } = useDisplay();

onMounted(() => {
  store.getsaveProductList();
});

watchEffect(() => {
  if (route?.name) {
    hideCart.value = route.name !== "cart" ? true : false;
  } else {
  }
  if (smAndUp) {
    hideCategory.value = smAndUp.value && hideCart.value;
  }
});
</script>

<template>
  <v-layout>
    <v-app-bar
      elevation="2"
      blur="1px"
      color="#ffffffdd"
      :style="{
        backdropFilter: 'blur(5px) grayscale(1)',
      }"
    >
      <template v-slot:prepend>
        <!-- <v-btn :icon="mdiDotsVertical" color="black"></v-btn> -->
        <!-- <v-icon :icon="mdiDotsVertical" /> -->
        <v-btn icon="mdi-menu" class="d-flex d-sm-none" />
      </template>
      <NuxtLink to="/">
        <div class="logo">
          <img class="logo_img" src="/images/logo.svg" alt="logo" />
        </div>
      </NuxtLink>
      <v-spacer></v-spacer>
      <NuxtLink to="/cart" v-show="hideCart">
        <div class="cart">
          <CartIcon />
        </div>
      </NuxtLink>
    </v-app-bar>

    <v-navigation-drawer
      v-model="hideCategory"
      location="left"
      permanent
      class="d-none d-sm-flex"
    >
      <CategoryList />
      <!-- <CategoryList /> -->
    </v-navigation-drawer>
    <slot />
  </v-layout>
</template>

<style lang="scss" scoped>
.logo {
  display: flex;
  /*  align-items: center; */
  height: $header-height;

  &_img {
    height: 70px;
  }
  @media (min-width: 480px) {
    margin-left: 30px;
  }
}
.cart {
  display: flex;
  align-items: center;
  width: 100px;
}
</style>
