<script setup lang="ts">
import { storeToRefs } from "pinia";
const numberOfPurchases = useCounterStore();
const { countCartProducts } = storeToRefs(numberOfPurchases);
</script>

<template>
  <div class="cart__container">
    <img class="cart__img" alt="cart" src="/images/basket-logo.png" />
    <div class="cart-counter__contnr" v-if="+countCartProducts > 0">
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
.cart__container {
  width: 70px;
  height: 60px;
  text-align: center;
}
.cart__img {
  margin-top: 10%;
  width: 80%;
  object-fit: cover;
  opacity: 0.85;
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
