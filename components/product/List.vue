<script setup lang="ts">
import stProducts from "~/src/products.json";
import stBrands from "~/src/brands.json";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { ConfProducts, Category } from "~/types";
import { gitFetchDataF } from "~/types/stor_scr";
const list = ref(null as ConfProducts[] | null);
const productData = ref(stProducts as ConfProducts[]);
const listBrandGit = ref(stBrands as Category[]);
const store = useCounterStore();

const { currentBrand } = storeToRefs(store);

// const { data: productData } = await useAsyncData("products", async () =>
//   // gitFetchDataF<ConfProducts[]>(
//   //   "fe-side",
//   //   "vue-test",
//   //   "assets/level3/products.json"
//   // )
// );

// const { data: listBrandGit, error } = await useAsyncData("brands", async () =>
//   // gitFetchDataF<Category[]>("fe-side", "vue-test", "assets/brands.json")
//   store.getCategories<Category>().catch((e) => console.log(e))
// );

watchEffect(() => {
  if (currentBrand.value) {
    if (productData.value && currentBrand.value === -1) {
      list.value = [...productData.value];
      return;
    }
    if (productData.value) {
      list.value = productData.value.filter(
        (item: any) => item.brand == currentBrand.value
      );
    }
  } else {
    if (productData.value) {
      list.value = [...productData.value];
    }
  }
});
</script>

<template>
  <v-container>
    <v-row>
      <TransitionGroup name="list">
        <v-col
          class="d-flex justify-start align-center flex-column"
          v-for="item in list"
          :key="item.id"
          cols="12"
          sm="12"
          md="6"
          lg="3"
          xl="2"
        >
          <ProductCard
            :item="item"
            :brand-list="listBrandGit ? listBrandGit : null"
          />
        </v-col>
      </TransitionGroup>
    </v-row>
  </v-container>
  <h3 class="empty-list" v-if="list?.length === 0">Товары отсутствуют</h3>
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
  transform: translateY(100px);
}

.list-leave-active {
  position: absolute;
}

.empty-list {
  padding: 10vh 0 0 5vw;
  color: $secondary-inactive;
}
</style>
