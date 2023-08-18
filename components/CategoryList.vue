<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { Category } from "~/types";

const allCategories: Category = {
  id: -1,
  title: "All brands",
  code: "brand_all",
  sort: "0",
};

const list = ref(null as Category[] | null);
const store = useCounterStore();
const { currentBrand } = storeToRefs(store);
const isOpen = ref(false);

const updateBrand = (id: number) => {
  currentBrand.value = id;
};

onMounted(() => {
  store.getCategories().then((data: any) => {
    list.value = [allCategories, ...data] as Category[];
  });
});
</script>

<template>
  <!-- <UButton label="Open" @click="isOpen = true" /> -->
  <!-- <USlideover v-model="isOpen"> -->
  <div class="container">
    <div class="list">
      <h2 class="header">Категории:</h2>
      <div
        class="brand"
        v-for="item in list"
        :key="item.id"
        v-on:click="updateBrand(item.id)"
      >
        <p class="title">{{ item.title }}</p>
      </div>
    </div>
    <hr />
  </div>
  <!-- </USlideover> -->
</template>

<style lang="scss" scoped>
$paddint-height: 6px;
$title-transition: 0.3s;
.container {
  display: flex;
}

hr {
  border: none;
  border-left: 1px solid #aaa;
  height: 70vh;
  margin-top: 10vh;
  width: 1px;
}
.brand {
  height: 20px;
  width: 150px;
  padding-left: 30px;
  padding-top: $paddint-height;
  padding-bottom: $paddint-height;
  user-select: none;
  cursor: pointer;

  &:hover {
    .title {
      color: $active-color;
      transition: color $title-transition;
    }
  }
}
.title {
  // font-size: 1.2rem;
  font-weight: 700;
  color: $main-inactive;
  transition: color $title-transition;
}

.header {
  font-weight: 100;
  margin: 30px 0 20px 10px;
  color: #999;
}
</style>
