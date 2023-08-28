<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { ConfProducts, Category } from "~/types";
const list = ref(null as ConfProducts[] | null);
const listData = ref(null as ConfProducts[] | null);
const brandList = ref(null as Category[] | null);
const store = useCounterStore();

const { currentBrand } = storeToRefs(store);

watchEffect(() => {
  if (currentBrand.value) {
    if (listData.value && currentBrand.value === -1) {
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
    listData.value = [...data] as ConfProducts[];
  });
  store.getCategories().then((data: any) => {
    brandList.value = [...data] as Category[];
  });
});
</script>

<template>
  <div class="container">
    <div v-for="item in list" :key="item.id">
      <div>
        <ProductCard :item="item" :brand-list="brandList" />
      </div>
    </div>
  </div>
  <h3 class="empty-list" v-if="list?.length === 0">Товары отсутствуют</h3>
</template>

<style lang="scss" scoped>
// .container {
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: center;
// }
.container {
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.empty-list {
  padding: 10vh 0 0 5vw;
  color: $secondary-inactive;
}
</style>
