<script setup lang="ts">
import { storeToRefs } from "pinia";
const numberOfPurchases = useCounterStore();
const { countCartProducts } = storeToRefs(numberOfPurchases);
const productAppear = ref(false);

const addedNewProduct = () => {
  productAppear.value = true;
  setTimeout(() => {
    productAppear.value = false;
  }, 1000);
};

watchEffect(() => {
  if (countCartProducts.value) {
    addedNewProduct();
  }
});
</script>

<template>
  <div class="cart__container">
    <img class="cart__img" alt="cart" src="/images/basket.svg" />
    <div
      :class="[{ shake: productAppear }, 'cart-counter__contnr']"
      v-if="+countCartProducts > 0"
    >
      <p class="cart-counter__text">
        {{
          parseInt(countCartProducts.toString(), 10) < 100
            ? countCartProducts
            : "99+"
        }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  outline: 0px solid $active-color;
  outline-offset: -1px;
}

@keyframes shake {
  10%,
  90% {
    outline: 2px solid $active-color;
  }

  20%,
  80% {
    outline: 4px solid $active-color;
  }

  30%,
  50%,
  70% {
    outline: 0px solid $active-color;
  }

  40%,
  60% {
    outline: 5px solid $active-color;
  }
}

.cart__container {
  width: 70px;
  height: 60px;
  text-align: center;
}
.cart__img {
  margin-top: 10%;
  width: 80%;
  object-fit: cover;
  opacity: 0.5;
}
.cart-counter__contnr {
  left: 45px;
  bottom: 20px;
  position: relative;
  background-color: $active-color;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.cart-counter__text {
  font-weight: bold;
  font-size: 1rem;
  color: #fff;
}
</style>
