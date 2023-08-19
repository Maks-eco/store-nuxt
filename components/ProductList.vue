<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { Product } from "~/types";
const list = ref(null as Product[] | null);
const listData = ref(null as Product[] | null);
const store = useCounterStore();
// console.log(store.storageProduct);
const { currentBrand } = storeToRefs(store);
// import nuxtStorage from "nuxt-storage";
// console.log(nuxtStorage);

watchEffect(() => {
  if (currentBrand.value) {
    if (listData.value && currentBrand.value === -1) {
      // console.log("brand_all");
      list.value = [...listData.value];
      return;
    }
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
      <div>
        <ProductCard :item="item" />
      </div>
    </div>
    <h3 class="empty-list" v-if="list?.length === 0">Товары отсутствуют</h3>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.empty-list {
  padding: 10vh 0 0 5vw;
  color: $secondary-inactive;
}
</style>
