<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { Category, CategoryState } from "~/types";
import { gitFetchDataF } from "~/types/stor_scr";
import stBrands from "~/src/brands.json";

const allCategories: CategoryState = {
  id: -1,
  title: "Все бренды",
  code: "brand_all",
  sort: "0",
  active: false,
};

const list = ref([allCategories, ...stBrands] as CategoryState[]);
// const list = ref(null as CategoryState[] | null);
const store = useCounterStore();
const { currentBrand } = storeToRefs(store);
const isOpen = ref(false);
const activeContainer = ref(false);

const updateBrand = (id: number) => {
  activeContainer.value = false;

  currentBrand.value = id;
  const index = list.value?.findIndex((item) => item.id === id);

  list.value?.forEach((item: CategoryState) => {
    item.active = false;
    return item;
  });
  if (typeof index !== "undefined" && list.value) {
    list.value[index].active = true;
  }
};
// const {
//   pending,
//   data: prelist,
//   error,
// } = await useAsyncData("brands", async () =>
//   // gitFetchDataF<CategoryState[]>("fe-side", "vue-test", "assets/brands.json")
//   store.getCategories<CategoryState>().catch((e) => console.log(e))
// );

// watchEffect(() => {
//   if (pending) {
//     if (prelist.value) list.value = [allCategories, ...prelist.value];
//     // console.log("pending");
//   }
// });
// onMounted(() => {
//   if (list.value) {
//     // if (prelist.value) list.value = [allCategories, ...prelist.value];
//     list.value = list.value.map((item: CategoryState) => {
//       item.active = currentBrand.value === item.id ? true : false;
//       return item;
//     });
//   }
// });
</script>

<template>
  <!-- <div class="list"> -->
  <h3 class="header">Категории:</h3>
  <v-list class="pa-0 mx-2" mandatory>
    <v-list-item
      density="compact"
      v-for="(item, i) in list"
      class="rounded-lg"
      :key="i"
      :value="item"
      color="orange"
      @click="updateBrand(item.id)"
    >
      <v-list-item-title class="text-subtitle-2 global-font-classic">{{
        item.title
      }}</v-list-item-title>
    </v-list-item>
  </v-list>
  <!-- </div> -->
</template>

<style lang="scss" scoped>
.header {
  font-weight: 100;
  margin: 20px 0 10px 10px;
  color: $main-inactive;
}
</style>
