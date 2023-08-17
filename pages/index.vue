<script setup lang="ts"></script>

<template>
  <div class="container">
    <div class="sidebar"><CategoryList /></div>
    <div class="content"><ProductList /></div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
}
.sidebar {
  width: 100%;
}
</style>
