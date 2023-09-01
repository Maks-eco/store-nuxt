<script setup lang="ts">
const store = useCounterStore();
const route = useRoute();
const hideCart = ref(true);

onMounted(() => {
  store.getsaveProductList();
});

watchEffect(() => {
  if (route?.name) {
    hideCart.value = route.name !== "cart" ? true : false;
  } else {
  }
});
</script>

<template>
  <div
    :class="[
      'header',
      { 'header-justify-sb': hideCart, 'header-justify-c': !hideCart },
    ]"
  >
    <NuxtLink to="/">
      <div class="logo">
        <img class="logo_img" src="/images/logo.svg" alt="logo" />
      </div>
    </NuxtLink>

    <NuxtLink to="/cart" v-show="hideCart">
      <div class="cart">
        <CartIcon />
      </div>
    </NuxtLink>
  </div>
  <div class="page">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  box-shadow: 0px 3px 6px 0px#ccc;
  position: fixed;
  width: 100vw;
  background-color: #fff;
  z-index: 10;
}
.header-justify-sb {
  justify-content: space-between;
}
.header-justify-c {
  justify-content: center;
}
.logo {
  display: flex;
  // align-items: center;
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

.page {
  padding-top: $header-height;
}
</style>
