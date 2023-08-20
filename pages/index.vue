<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="sidebar"><CategoryList /></div>
    <div class="content"><ProductList /></div>
  </div>
</template>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  width: 200px;
  z-index: 5;
}
@media (min-width: 480px) {
  .content {
    margin-left: 200px;
  }
}
</style>
