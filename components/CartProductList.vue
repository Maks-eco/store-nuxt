<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { Product, baseUrl } from "~/types";
const store = useCounterStore();
const { storageProduct: list } = storeToRefs(store);
const listData = ref(null as Product[] | null);
// const store = useCounterStore();
// console.log(store.storageProduct);
const { currentBrand } = storeToRefs(store);
// import nuxtStorage from "nuxt-storage";
// console.log(nuxtStorage);

watchEffect(() => {});

onMounted(() => {
  // store.getProducts().then((data: any) => {
  //   listData.value = [...data] as Product[];
  // });
  // list.value = store.storageProduct;
});
const envUrl = (url: string) => {
  if (process.env.NODE_ENV !== "development") return baseUrl.slice(0, -1) + url;
  return url;
};
</script>

<template>
  <div v-if="list">
    <div class="product-contnr" v-for="item in list" :key="item.id">
      <div class="one-product">
        <div class="product__img-contnr">
          <img class="product__one-img" :src="envUrl(item.image)" alt="" />
          <!-- <img class="product__one-img" alt="product preview" /> -->
        </div>
        <div class="product__descr">
          <p class="product__descr-name">{{ item.title }}</p>
          <p class="product__descr-name">Количество: {{ item.count }}</p>
          <button class="cart-button cart-button--delete-product" @click="">
            Удалить
          </button>
        </div>
      </div>
      <hr class="under-product" />
    </div>
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
.product-contnr {
  width: 400px;
  margin-bottom: 13px;
}
@media (min-width: 750px) {
  .product-contnr {
    margin-left: 80px;
    margin-bottom: 30px;
  }
}
.product__descr {
  text-align: right;
  width: 280px;
}
@media (max-width: 750px) {
  .product-contnr {
    margin: 30px auto;
  }
  .product__descr {
    text-align: right;
    width: 280px;
  }
}
@media (max-width: 480px) {
  .product-contnr {
    width: 100%;
  }
  .one-product {
    flex-wrap: wrap;
  }
  .product__descr {
    text-align: left;
    width: 100%;
  }
}
.one-product {
  justify-content: space-between;
  width: 100%;
  display: flex;
}
.cart-button {
  background-color: #444;
  border: none;
  color: white;
  padding: 8px 20px;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition: background-color 0.2s;
}
.cart-button--delete-product:hover {
  background-color: #fd3f49;
}
.cart-button--order-compl:hover {
  background-color: #af66d4;
}
.product__img-contnr {
  width: 100px;
  height: 100px;
  margin-top: auto;
}
.product__one-img {
  aspect-ratio: 1 / 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.under-product {
  width: 95%;
}
.product__descr-name {
  margin: 7px 0px;
}
</style>
