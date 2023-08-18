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

<style lang="scss" scoped>
.container-item {
  display: flex;
  width: 200px;
  /* height: fit-content; */
  margin: 40px 20px 0 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.description {
  margin-left: 20px;
}
.image {
  /* width: 200px; */
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
  transition: 0.3s all ease-in-out;
}
.container-item:hover .image {
  transform: scale(1.05);
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
  width: 100%;

  padding-top: 7px;
  padding-bottom: 7px;
  border: 1px solid #aaa;
  border-top: 0;
  background-color: #fff;
  color: #aaa;
  font-size: 0.8rem;
  cursor: pointer;
}

.container-item:hover .button {
  color: $active-color;
  border: 1px solid $active-color;
  border-top: 0;
  font-weight: 700;

  transition: border-color 0.3s;
}
</style>
