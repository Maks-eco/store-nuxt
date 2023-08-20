<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { ConfProducts } from "~/types";
const list = ref(null as ConfProducts[] | null);
const listData = ref(null as ConfProducts[] | null);
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
});
</script>

<template>
  <div class="container">
    <div v-for="item in list" :key="item.id">
      <div>
        <ProductCard :item="item" />
      </div>
    </div>
  </div>
  <h3 class="empty-list" v-if="list?.length === 0">Товары отсутствуют</h3>
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
