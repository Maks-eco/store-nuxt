<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { Category } from "~/types";
const list = ref(null as Category[] | null);
const store = useCounterStore();

const { currentBrand } = storeToRefs(store);

const updateBrand = (id: number) => {
  currentBrand.value = id.toString();
};

onMounted(() => {
  store.getCategories().then((data: any) => {
    list.value = [...data] as Category[];
  });
});
</script>

<template>
  <div v-for="item in list" :key="item.id" v-on:click="updateBrand(item.id)">
    {{ item.title }}
  </div>
</template>
