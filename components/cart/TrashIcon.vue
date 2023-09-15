<script setup lang="ts">
const emit = defineEmits(["clickBtn"]);
</script>

<template>
  <!-- <button class="cart-button" @click="emit('clickBtn')">
    <img class="trash-img" src="/images/trash.svg" alt="product preview" />
  </button> -->
  <v-btn icon="mdi-trash-can-outline" @click="emit('clickBtn')" />
</template>

<style lang="scss" scoped>
.cart-button {
  background-color: #fff;
  border: none;
  color: white;
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
  height: 30px;
}
</style>
