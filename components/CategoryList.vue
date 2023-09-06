<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { Category } from "~/types";
import { gitFetchDataF } from "~/types/stor_scr";

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
const {
  pending,
  data: prelist,
  error,
} = await useAsyncData("brands", async () =>
  gitFetchDataF<CategoryState[]>("fe-side", "vue-test", "assets/brands.json")
);

watchEffect(() => {
  if (pending) {
    if (prelist.value) list.value = [allCategories, ...prelist.value];
    // console.log("pending");
  }
});
onMounted(() => {
  if (list.value) {
    // if (prelist.value) list.value = [allCategories, ...prelist.value];
    list.value = list.value.map((item: CategoryState) => {
      item.active = currentBrand.value === item.id ? true : false;
      return item;
    });
  }
});
</script>

<template>
  <div :class="[{ backgrd: activeContainer }]" @click="activeContainer = false">
    <div
      :class="[{ 'container-inactive': !activeContainer }, 'container']"
      @click.stop
    >
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
      <button
        class="hide-categories"
        @click="activeContainer = !activeContainer"
      >
        Категории
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
$paddint-height: 6px;
$title-transition: 0.3s;
.backgrd {
  @media (max-width: 480px) {
    width: 100vw;
    height: 100vh;
    background-color: #99999955;
    backdrop-filter: blur(5px);
  }
}
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
.hide-categories {
  @media (max-width: 480px) {
    transform: rotate(270deg);
    height: 30px;
    width: 100px;
    position: relative;
    top: 10vh /* calc(20vh - 10px) */;
    left: -30px;
    /* padding-top: 0px; */
    padding-bottom: 5px;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 0 0 5px 5px;
    border-top: 0;
    font-weight: bold;
    font-size: 0.9rem;
    color: $main-inactive;
    // writing-mode: vertical-rl;
    cursor: pointer;
  }

  @media (min-width: 480px) {
    height: 20px;
    opacity: 0;
  }
}
.container-inactive {
  @media (max-width: 480px) {
    left: -170px;
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
