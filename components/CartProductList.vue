<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { Product, baseUrl, Category } from "~/types";
const store = useCounterStore();
const { storageProduct: list } = storeToRefs(store);
const listData = ref(null as Product[] | null);
const brands = ref(null as Category[] | null);
// const store = useCounterStore();
// console.log(store.storageProduct);
const { currentBrand } = storeToRefs(store);
// import nuxtStorage from "nuxt-storage";
// console.log(nuxtStorage);

// const finalCost = () => {
//   list.value.reduce(item => )
// }

const brandName = (id: number): string => {
  const brand: Category | undefined = brands.value?.find(
    (item) => item.id === id
  );
  if (brand) {
    return brand.title;
  }
  return "";
};

watchEffect(() => {});

onMounted(() => {
  store.getCategories().then((data: any) => {
    brands.value = [...data] as Category[];
  });
  // brands.value = store.storageProduct;
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
          <img
            class="product__one-img"
            :src="envUrl(item.image)"
            alt="product preview"
          />
          <div :style="{ width: '100%' }">
            <p class="product__descr-name">
              {{ brandName(item.brand) }} / {{ item.title }}
            </p>
            <p class="active-min">${{ item.regular_price.value }}</p>
            <div :style="{ 'text-align': 'right' }" class="active-min">
              <button
                class="cart-button cart-button--delete-product"
                @click="store.deleteCartProduct(item)"
              >
                <img
                  class="trash-img"
                  src="/images/trash.png"
                  alt="product preview"
                />
              </button>
            </div>
          </div>
        </div>

        <div class="product__descr">
          <p class="active-max">${{ item.regular_price.value }}</p>
          <div>
            <label for="qty" class="active-min">Кол-во: </label>
            <input
              type="number"
              class="quantity"
              name="qty"
              min="1"
              max="999"
              v-model="item.count"
              @change="store.updateProductCount(item)"
            />
          </div>
          <!-- <p class="product__descr-name">Количество: {{ item.count }}</p> -->

          <p>
            <span class="active-min">Всего:</span> ${{
              (item.regular_price.value * item.count).toFixed(2)
            }}
          </p>

          <button
            class="cart-button cart-button--delete-product active-max"
            @click="store.deleteCartProduct(item)"
          >
            <img
              class="trash-img"
              src="/images/trash.png"
              alt="product preview"
            />
          </button>
        </div>
      </div>
      <hr class="under-product" />
    </div>
    <h2 class="total-cost" v-if="store.finalCost > 0">
      Итог: {{ store.finalCost.toFixed(2) }}
    </h2>
    <h2 class="empty-cart-msg" v-if="store.finalCost === 0">Корзина пуста</h2>
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
  margin-bottom: 13px;
  @media (min-width: 750px) {
    width: 80vw;
    margin-left: 10vw;
  }
  @media (max-width: 750px) {
    margin-left: 10px;
  }
}

.product__descr {
  /*  text-align: right; */
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  @media (min-width: 750px) {
    width: 400px;
  }
  @media (max-width: 750px) {
    width: 320px;
  }
}

.one-product {
  justify-content: space-between;
  width: 100%;
  display: flex;
  @media (max-width: 480px) {
    flex-wrap: wrap;
  }
}
.cart-button {
  background-color: #fff;
  border: none;
  color: white;
  /*  padding: 8px 20px; */
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  transition: opacity 0.2s;
  opacity: 0.4;
}
.trash-img {
  height: 35px;
}
.cart-button:hover {
  opacity: 0.8;
}
/*.cart-button--order-compl:hover {
  background-color: #af66d4;
} */
.product__img-contnr {
  display: flex;
  align-items: center;
  // width: 100px;
  // height: 100px;
  margin-top: auto;
  @media (max-width: 480px) {
    align-items: flex-start;
    width: 300px;
  }
}
.product__one-img {
  aspect-ratio: 1 / 1;
  width: 100px;
  height: 100px;
  object-fit: cover;
}
.under-product {
  @media (min-width: 750px) {
    margin-left: 3vw;
    width: 74vw;
  }
  @media (max-width: 750px) {
    margin-left: 3vw;
    width: 90vw;
  }
  @media (max-width: 480px) {
    margin-top: 5px;
    margin-bottom: 25px;
    margin-left: 10px;
    width: 280px;
  }
}
.product__descr-name {
  margin: 7px 0px;
  font-weight: bold;
}
.quantity {
  width: 48px;
  font-size: 1.2rem;
}

.total-cost {
  text-align: right;
  @media (min-width: 750px) {
    padding-right: 13vw;
  }
  @media (max-width: 750px) {
    padding-right: calc(7vw - 10px);
  }
}
.empty-cart-msg {
  /*  padding-left: 10vw;
  padding-top: 5vw; */
  padding: 10vh 0 0 5vw;
  color: $secondary-inactive;
}
.active-min {
  @media (min-width: 480px) {
    display: none;
  }
  @media (max-width: 480px) {
  }
}
.active-max {
  @media (min-width: 480px) {
  }
  @media (max-width: 480px) {
    display: none;
  }
}
</style>
