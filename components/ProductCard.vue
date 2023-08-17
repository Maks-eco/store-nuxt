<script setup lang="ts">
import { Product } from "~/types";

const props = defineProps<{
  item: Product;
}>();
</script>

<template>
  <div>
    <!-- {{ props.item }} -->
    <img class="image" :src="props.item.image" alt="" />
    <p class="title">{{ props.item.title }}</p>
    <p class="price">{{ props.item.regular_price.value }}</p>
  </div>
</template>

<style scoped>
.image {
  width: 200px;
}
</style>
