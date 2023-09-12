<script setup lang="ts">
import { useDisplay } from "vuetify";
const store = useCounterStore();
const route = useRoute();
const hideCart = ref(true);

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
    hideCart.value = smAndUp.value && hideCart.value;
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
      v-model="hideCart"
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
