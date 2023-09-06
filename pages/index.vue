<script setup lang="ts">
definePageMeta({
  layout: "default",
  layoutTransition: {
    name: "slide-in",
  },
});
</script>

<template>
  <div class="container">
    <div class="sidebar"><CategoryList /></div>
    <div class="content">
      <div class="border">
        <ProductList />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 200px;
  z-index: 5;
}
.border {
  display: flex;
  justify-content: center;
}
@media (min-width: 480px) {
  .content {
    margin-left: 200px;
    // padding-left: auto;
  }
}
</style>
