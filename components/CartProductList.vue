<script setup lang="ts">
import { Category } from "~/types";
import { storeToRefs } from "pinia";

const store = useCounterStore();
const { storageProduct: list } = storeToRefs(store);
const brands = ref(null as Category[] | null);

watchEffect(() => {});
onMounted(() => {
  store.getCategories().then((data: any) => {
    brands.value = [...data] as Category[];
  });
  // productVariantInfo(props.item);
});
</script>

<template>
  <div>
    <div class="product-contnr active-max" v-if="store.finalCost > 0">
      <div class="one-product" :style="{ height: '60px', fontWeight: 'bold' }">
        <div></div>
        <div class="product__descr">
          <p>Цена</p>
          <p>Кол-во</p>
          <p>Всего</p>
        </div>
      </div>
      <hr class="under-product" />
    </div>
    <!--  -->
    <TransitionGroup name="list">
      <div class="product-contnr" v-for="item in list" :key="item.id">
        <CartProductCard :item="item" :brands="brands" />
      </div>
    </TransitionGroup>
    <h2 class="total-cost" v-if="store.finalCost > 0">
      Итог: ${{ store.finalCost.toFixed(2) }}
    </h2>
    <h2 class="empty-cart-msg" v-if="store.finalCost === 0">Корзина пуста</h2>
  </div>
</template>

<style lang="scss" scoped>
.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

.list-leave-active {
  position: absolute;
}
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.product-contnr {
  margin-bottom: 13px;
  @media (min-width: 900px) {
    width: 80vw;
    margin-left: 10vw;
  }
  @media (max-width: 900px) {
    margin-left: 10px;
  }
}

.product__descr {
  @media (min-width: 480px) {
    width: 400px;
    display: inline-grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-items: center;
  }
  @media (max-width: 480px) {
    width: 320px;
    /*  */
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
  }
}

.one-product {
  justify-content: space-between;
  width: 100%;
  display: flex;
  @media (max-width: 710px) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
}

.under-product {
  width: 90%;
  margin-left: 5%;

  @media (max-width: 480px) {
    margin-top: 5px;
    margin-bottom: 25px;
  }
}

.total-cost {
  text-align: right;
  margin-bottom: 10vh;
  @media (min-width: 900px) {
    padding-right: 13vw;
  }
  @media (max-width: 900px) {
    padding-right: calc(7vw - 10px);
  }
}
.empty-cart-msg {
  padding: 10vh 0 0 5vw;
  color: $secondary-inactive;
}
.active-min {
  @media (min-width: 480px) {
    display: none;
  }
}
.active-max {
  @media (max-width: 480px) {
    display: none;
  }
}
</style>
