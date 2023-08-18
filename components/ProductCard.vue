<script setup lang="ts">
import { Product } from "~/types";

const props = defineProps<{
  item: Product;
}>();
</script>

<template>
  <div class="container-item">
    <!-- {{ props.item }} -->
    <img class="image" :src="props.item.image" alt="" />
    <div class="description">
      <div class="title">{{ props.item.title }}</div>
      <div class="price">{{ props.item.regular_price.value }}</div>
    </div>
    <div class="btn-con">
      <button class="button">Добавить в корзину</button>
    </div>
  </div>
</template>

<style scoped>
.container-item {
  display: flex;
  width: 200px;
  margin: 40px 20px 0 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.description {
  margin-left: 20px;
}
.image {
  width: 200px;
}
.title {
  font-weight: 700;
}
.btn-con {
  display: flex;
  justify-content: center;
  width: 100%;
}
.button {
  border: 0;
}
</style>
