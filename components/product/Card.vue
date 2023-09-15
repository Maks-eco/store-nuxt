<script setup lang="ts">
import { baseUrl, Category, ConfProducts, ProductFeature } from "~/types";
const store = useCounterStore();

const expand = ref(false);

const globalProps = defineProps<{
  item: ConfProducts;
  brandList: Category[] | null;
}>();
const cardInfo = ref(globalProps.item as ConfProducts);
const productVariantSelected = ref(globalProps.item.type === "simple");

const envUrl = (url: string) => {
  // if (process.env.NODE_ENV !== "development") return baseUrl.slice(0, -1) + url;
  //https://raw.githubusercontent.com/fe-side/vue-test/master/assets/images/1.png
  // console.log(url);
  url = `https://raw.githubusercontent.com/fe-side/vue-test/master/assets${url}`;
  return url;
};

const productBrand = (id: number) => {
  if (globalProps.brandList) {
    const brand = globalProps.brandList.find(
      (item: Category) => item.id === id
    );
    return brand?.title;
  }
  return "";
};

const userAcceptProduct = () => {
  store.saveProduct(cardInfo.value);
};

const productVariantState = (state: boolean) => {
  productVariantSelected.value = state;
};

const updateImageEvent = (product: ProductFeature) => {
  cardInfo.value.image =
    product.image.slice(0, 6) + "s" + product.image.slice(6);
  cardInfo.value.productFeature = { ...product };
};
</script>

<template>
  <div>
    <v-hover v-slot="{ isHovering, props }" close-delay="150">
      <v-card
        width="230"
        class="mx-5 trans-it"
        :class="isHovering ? ' mt-5 mb-7' : ' mt-7 mb-5'"
        elevation="3"
        v-bind="props"
      >
        <v-img height="230" src="images/autumn-pumpkin-watercolor62.png" cover>
          <v-img :src="envUrl(cardInfo.image)" :style="{}"> </v-img>
        </v-img>

        <v-card-text class="pb-1">
          <div class="font-weight-bold ms-1 mb-2">
            {{ cardInfo.title }}
          </div>
          <div class="ms-1">{{ productBrand(cardInfo.brand) }}</div>
          <div class="ms-1">${{ cardInfo.regular_price.value.toFixed(2) }}</div>
        </v-card-text>
        <div v-if="globalProps.item.type !== 'simple'">
          <v-expand-transition>
            <div v-if="expand">
              <ProductAcceptButton
                @on-click-act="userAcceptProduct"
                :productVariantSelected="productVariantSelected"
              />

              <VariantsIcon
                :item="cardInfo"
                @update-image="updateImageEvent"
                @variant-selected="productVariantState"
              />
            </div>
          </v-expand-transition>

          <v-divider></v-divider>

          <v-card-actions class="py-1">
            <v-btn @click="expand = !expand">
              {{ !expand ? "Выберите опции" : "Свернуть" }}
            </v-btn>
          </v-card-actions>
        </div>
        <ProductAcceptButton
          @on-click-act="userAcceptProduct"
          :productVariantSelected="true"
          v-else
        />
      </v-card>
    </v-hover>
  </div>
</template>

<style lang="scss" scoped>
.trans-it {
  transition: all 0.3s ease;
}
</style>
