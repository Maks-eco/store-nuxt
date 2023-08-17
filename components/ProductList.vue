<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { Product } from "~/types";
const list = ref(null as Product[] | null);
const listData = ref(null as Product[] | null);
const store = useCounterStore();

const { currentBrand } = storeToRefs(store);

watchEffect(() => {
  if (currentBrand.value) {
    if (listData.value) {
      list.value = listData.value.filter(
        (item: any) => item.brand == currentBrand.value
      );
    }
  } else {
    if (listData.value) {
      list.value = [...listData.value];
    }
  }
});

onMounted(() => {
  store.getProducts().then((data: any) => {
    listData.value = [...data] as Product[];
  });
});
</script>

<template>
  <div class="container">
    <div v-for="item in list" :key="item.id">
      <!-- {{ item }} -->
      <ProductCard :item="item" />
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
}
</style>
