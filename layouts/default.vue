<script setup lang="ts">
import { useDisplay } from "vuetify";
const store = useCounterStore();
const route = useRoute();
const hideCart = ref(true);
const hideCategory = ref(true);
const menuButton = ref(false);

const { smAndUp } = useDisplay();

const toggle = () => {
  console.log("menuButton = !menuButton", menuButton.value);
  menuButton.value = !menuButton.value;
};

const timerClose = () => {
  setTimeout(() => {
    menuButton.value = false;
  }, 500);
};

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
        <v-btn
          icon="mdi-menu"
          @click="toggle"
          :class="hideCart ? 'd-flex d-sm-none' : 'd-none'"
        />
      </template>
      <NuxtLink to="/">
        <div class="logo">
          <img
            class="logo_img overflow-hidden"
            src="/images/logo.svg"
            alt="logo"
          />
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
    </v-navigation-drawer>

    <v-overlay
      v-model="menuButton"
      class="align-center justify-center"
      @click="timerClose"
      scroll-strategy="close"
      location-strategy="static"
    >
      <div>
        <v-card>
          <CategoryList />
        </v-card>
      </div>
    </v-overlay>

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
  @media (max-width: 480px) {
    width: 50vw;
  }
}
.cart {
  display: flex;
  align-items: center;
  width: 100px;
}
</style>
