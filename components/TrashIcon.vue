<script setup lang="ts">
const emit = defineEmits(["clickBtn"]);
</script>

<template>
  <button class="cart-button" @click="emit('clickBtn')">
    <img class="trash-img" src="/images/trash.png" alt="product preview" />
  </button>
</template>

<style lang="scss" scoped>
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
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
}
.trash-img {
  height: 35px;
}
</style>
