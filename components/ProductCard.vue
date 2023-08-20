<script setup lang="ts">
import { Product, baseUrl, Category } from "~/types";
const store = useCounterStore();
const brandList = ref(null as Category[] | null);

const props = defineProps<{
  item: Product;
}>();

const envUrl = (url: string) => {
  if (process.env.NODE_ENV !== "development") return baseUrl.slice(0, -1) + url;
  return url;
};

const productBrand = (id: number) => {
  if (brandList.value) {
    const brand = brandList.value.find((item: Category) => item.id === id);
    return brand?.title;
  }
  return "";
};

onMounted(() => {
  store.getCategories().then((data: any) => {
    brandList.value = [...data] as Category[];
  });
});

// console.log(process.env, baseUrl.slice(0, -1));
</script>

<template>
  <div class="container-item">
    <img class="image" :src="envUrl(props.item.image)" alt="" />
    <div class="description">
      <div class="title">{{ props.item.title }}</div>
      <div class="brand-title">{{ productBrand(props.item.brand) }}</div>
      <div class="price">${{ props.item.regular_price.value.toFixed(2) }}</div>
    </div>
    <div class="btn-con">
      <button class="button" v-on:click="store.saveProduct(props.item)">
        Добавить в корзину
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-item {
  display: flex;
  width: 200px;
  /* height: fit-content; */
  margin: 20px 20px 20px 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.description {
  margin-left: 20px;
}
.image {
  /* width: 200px; */
  aspect-ratio: 1 / 1;
  width: 100%;
  object-fit: cover;
  transition: 0.3s all ease-in-out;
}
.container-item:hover .image {
  transform: scale(1.05);
}
.title {
  font-weight: 700;
}
.brand-title {
  font-size: 0.8rem;
  margin-bottom: 5px;
}
.btn-con {
  display: flex;
  justify-content: center;
  width: 100%;
}
.button {
  width: 100%;
  // border: 1px solid $secondary-inactive;
  padding-top: 7px;
  padding-bottom: 7px;
  // border-top: 0;
  background-color: #fff;
  border-radius: 0 0 10px 10px;
  font-size: 0.8rem;
  cursor: pointer;

  @media (min-width: 480px) {
    color: $secondary-inactive;
    border: 1px solid $secondary-inactive;
    border-top: 0;
  }
  @media (max-width: 480px) {
    color: $active-color;
    border: 1px solid $active-color;
    border-top: 0;
  }
}

$outl-color: $active-color;
$ow: 0.1px;

.container-item:hover .button {
  color: $active-color;
  border: 1px solid $active-color;
  border-top: 0;
  // background-color: $secondary-active;
  // font-weight: bold;
  // font-size: 0.85rem;

  text-shadow: $ow $ow 0 $outl-color, $ow -$ow 0 $outl-color,
    -$ow $ow 0 $outl-color, -$ow -$ow 0 $outl-color, $ow 0px 0 $outl-color,
    0px $ow 0 $outl-color, -$ow 0px 0 $outl-color, 0px -$ow 0 $outl-color;

  transition: all 0.3s;
}
</style>
