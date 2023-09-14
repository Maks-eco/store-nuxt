<script setup lang="ts">
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";
import { ConfProducts, Category } from "~/types";
import { gitFetchDataF } from "~/types/stor_scr";
const list = ref(null as ConfProducts[] | null);
// const productData = ref(null as ConfProducts[] | null);
// const brandList = ref(null as Category[] | null);
const store = useCounterStore();

const { currentBrand } = storeToRefs(store);

const { data: productData } = await useAsyncData("products", async () =>
  gitFetchDataF<ConfProducts[]>(
    "fe-side",
    "vue-test",
    "assets/level3/products.json"
  )
);

const { data: listBrandGit } = await useAsyncData("brands", async () =>
  gitFetchDataF<Category[]>("fe-side", "vue-test", "assets/brands.json")
);

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
  <!-- <div class="container"> -->
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
          <ProductCard :item="item" :brand-list="listBrandGit" />
        </v-col>
      </TransitionGroup>
    </v-row>
  </v-container>
  <!-- </div> -->
  <h3 class="empty-list" v-if="list?.length === 0">Товары отсутствуют</h3>
</template>

<style lang="scss" scoped>
// .list-enter-active,
// .list-leave-active {
//   transition: all 0.5s ease;
// }
// .list-enter-from,
// .list-leave-to {
//   opacity: 0;
//   transform: translateY(100px);
// }
.list-move,
.list-enter-active,
.list-leave-active {
  // transition: all 0.3s cubic-bezier(0.75, 0, 1, 1);
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

.container {
  display: inline-grid;
  grid-template-columns: repeat(4, 1fr);
  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 720px) {
    grid-template-columns: repeat(1, 1fr);
  }
}
.empty-list {
  padding: 10vh 0 0 5vw;
  color: $secondary-inactive;
}
</style>
