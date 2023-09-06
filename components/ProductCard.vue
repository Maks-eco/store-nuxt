<script setup lang="ts">
import { baseUrl, Category, ConfProducts, ProductFeature } from "~/types";
const store = useCounterStore();

const props = defineProps<{
  item: ConfProducts;
  brandList: Category[] | null;
}>();
const cardInfo = ref(props.item as ConfProducts);
const productVariantSelected = ref(props.item.type === "simple");

const envUrl = (url: string) => {
  if (process.env.NODE_ENV !== "development") return baseUrl.slice(0, -1) + url;
  return url;
};

const productBrand = (id: number) => {
  if (props.brandList) {
    const brand = props.brandList.find((item: Category) => item.id === id);
    return brand?.title;
  }
  return "";
};

const productVariantState = (state: boolean) => {
  productVariantSelected.value = state;
};

const updateImageEvent = (product: ProductFeature) => {
  cardInfo.value.image =
    product.image.slice(0, 6) + "s" + product.image.slice(6);
  cardInfo.value.productFeature = { ...product };
};

onMounted(() => {
  // store.getCategories().then((data: any) => {
  //   brandList.value = [...data] as Category[];
  // });
});
</script>

<template>
  <div class="container-item">
    <img class="image" :src="envUrl(cardInfo.image)" alt="" />
    <div class="description">
      <div class="title">{{ cardInfo.title }}</div>
      <div class="brand-title">{{ productBrand(cardInfo.brand) }}</div>
      <div class="price">${{ cardInfo.regular_price.value.toFixed(2) }}</div>
    </div>
    <div class="btn-con">
      <button
        :class="['button', { 'button-inactive': !productVariantSelected }]"
        v-on:click="
          if (productVariantSelected) {
            store.saveProduct(cardInfo);
          }
        "
      >
        {{ !productVariantSelected ? "Выберите опции" : "Добавить в корзину" }}
      </button>
    </div>
    <VariantsIcon
      :item="cardInfo"
      @update-image="updateImageEvent"
      @variant-selected="productVariantState"
    />
  </div>
</template>

<style lang="scss" scoped>
.container-item {
  display: flex;
  width: 200px;
  margin: 20px 20px 20px 20px;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.description {
  margin-left: 20px;
  width: 160px;
}
.image {
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
  height: 15px;
  font-size: 0.8rem;
  margin-bottom: 5px;
}
.btn-con {
  display: flex;
  justify-content: center;
  width: 100%;
}
.button {
  height: 35px;
  width: 100%;
  padding-top: 7px;
  padding-bottom: 7px;
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

  /*   text-shadow: $ow $ow 0 $outl-color, $ow -$ow 0 $outl-color,
    -$ow $ow 0 $outl-color, -$ow -$ow 0 $outl-color, $ow 0px 0 $outl-color,
    0px $ow 0 $outl-color, -$ow 0px 0 $outl-color, 0px -$ow 0 $outl-color; */

  transition: all 0.3s;
}

.container-item:hover .button-inactive {
  border: 1px solid $secondary-inactive;
  border-top: 0;
  color: $active-color;
  cursor: default;
}
</style>
