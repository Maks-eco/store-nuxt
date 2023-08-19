<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref, onBeforeMount } from "vue";
import { Category } from "~/types";

interface CategoryState extends Category {
  active: boolean;
}

const allCategories: CategoryState = {
  id: -1,
  title: "Все бренды",
  code: "brand_all",
  sort: "0",
  active: false,
};

const list = ref(null as CategoryState[] | null);
const store = useCounterStore();
const { currentBrand } = storeToRefs(store);
const isOpen = ref(false);
const activeContainer = ref(false);

const updateBrand = (id: number) => {
  activeContainer.value = !activeContainer.value;
  // console.log(id);
  currentBrand.value = id;
  const index = list.value?.findIndex((item) => item.id === id);
  // console.log(index);
  list.value?.forEach((item: CategoryState) => {
    item.active = false;
    return item;
  });
  if (typeof index !== "undefined" && list.value) {
    list.value[index].active = true;
  }
};

onBeforeMount(() => {
  // updateBrand(+currentBrand.value);
});

onMounted(() => {
  store.getCategories().then((data: any) => {
    list.value = [allCategories, ...data] as CategoryState[];
    list.value = list.value.map((item: CategoryState) => {
      item.active = currentBrand.value === item.id ? true : false;
      return item;
    });
  });
  // updateBrand(currentBrand.value);
  // updateBrand(+currentBrand.value);
  // console.log(currentBrand.value);
});
</script>

<template>
  <!-- <UButton label="Open" @click="isOpen = true" /> -->
  <!-- <USlideover v-model="isOpen"> -->
  <div :class="[{ 'container-inactive': !activeContainer }, 'container']">
    <div class="list">
      <h2 class="header">Категории:</h2>
      <div
        :class="[{ 'brand-active': item.active }, 'brand']"
        v-for="item in list"
        :key="item.id"
        @click="updateBrand(item.id)"
      >
        <p class="title">{{ item.title }}</p>
      </div>
    </div>
    <hr class="hr" />
    <button class="hide-categories" @click="activeContainer = !activeContainer">
      Категории
    </button>
  </div>

  <!-- </USlideover> -->
</template>

<style lang="scss" scoped>
$paddint-height: 6px;
$title-transition: 0.3s;
.container {
  position: fixed;
  display: flex;
  left: 0;
  transition: all 0.3s linear;
  background-color: #fff;
  width: 180px;
  height: 100%;
}
.hr {
  border: none;
  border-left: 1px solid #aaa;
  height: 70vh;
  margin-top: 10vh;
  width: 1px;
}
@media (max-width: 480px) {
  .container-inactive {
    left: -170px;
    // transition: all 0.3s linear;
  }
  .hide-categories {
    // display: flex;
    height: fit-content;
    position: relative;
    top: calc(20vh - 10px);
    left: -1px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 0 5px 5px 0;
    border-left: 0;
    font-weight: bold;
    color: $main-inactive;
    writing-mode: vertical-rl;
    cursor: pointer;
  }
  .hr {
    // margin-top: 5vh;
  }
}
@media (min-width: 480px) {
  .hide-categories {
    height: 20px;
    /* position: relative;
  left: 170px; */
    // display: none;
    opacity: 0;
    // transition: all 0.3s linear;
  }
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

.brand-active .title {
  color: $active-color;
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
