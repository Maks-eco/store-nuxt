<template>
  <div class="header">
    <NuxtLink to="/">
      <div class="logo">
        <img src="images/logo.png" alt="logo" />
      </div>
    </NuxtLink>
    <NuxtLink to="/basket">
      <div class="basket">
        <img class="img__basket" src="images/basket-logo.png" alt="logo" />
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
  justify-content: space-between;
  box-shadow: 0px 3px 6px 0px#ccc;
  position: fixed;
  width: 100%;
  background-color: #fff;
}
.logo {
  display: flex;
  align-items: center;
  /* width: 100px; */
  height: $header-height;
  margin-left: 30px;
  /* background-color: #ddd; */
}
.basket {
  display: flex;
  align-items: center;
  width: 100px;
  /* height: 40px; */
  /* background-color: #ddd; */
}
.img__basket {
  opacity: 0.8;
  height: 50px;
}
.page {
  padding-top: $header-height;
}
</style>
