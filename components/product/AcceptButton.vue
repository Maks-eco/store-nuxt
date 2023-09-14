<script setup lang="ts">
const emit = defineEmits(["onClickAct"]);
const props = defineProps<{
  productVariantSelected: Boolean;
}>();
// const productVariantSelected = ref(true);
</script>
<template>
  <v-card-actions class="py-1">
    <v-btn
      class="font-weight-bold"
      :color="!props.productVariantSelected ? 'grey-lighten-1' : 'orange'"
      variant="text"
      @click="
        if (props.productVariantSelected) {
          //   store.saveProduct(cardInfo);
          emit('onClickAct', true);
        }
      "
    >
      {{
        !props.productVariantSelected ? "Выберите опции" : "Добавить в корзину"
      }}
    </v-btn>
  </v-card-actions>
</template>
