<template>
  <div class="header">
    <NuxtLink to="/">
      <div class="logo">home</div>
    </NuxtLink>
    <NuxtLink to="/basket">
      <div class="basket">basket</div>
    </NuxtLink>
  </div>
  <div>
    <slot />
  </div>
</template>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  background-color: #eee;
}
.logo {
  width: 100px;
  height: 40px;
  background-color: #ddd;
}
.basket {
  width: 100px;
  height: 40px;
  background-color: #ddd;
}
</style>
