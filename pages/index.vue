<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="sidebar"><CategoryList /></div>
    <div class="content"><ProductList /></div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
}
.sidebar {
  position: fixed;
  width: 200px;
}
.content {
  margin-left: 200px;
}
</style>
