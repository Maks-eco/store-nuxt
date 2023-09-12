<script setup lang="ts">
import { onMounted, ref } from "vue";
import { baseUrl, Category, ConfProducts } from "~/types";
const store = useCounterStore();
// const brands = ref(null as Category[] | null);
const productVariantText1 = ref("");
const productVariantText2 = ref("");

const props = defineProps<{
  item: ConfProducts;
  brands: Category[] | null;
}>();

const brandName = (id: number): string => {
  const brand: Category | undefined = props.brands?.find(
    (item) => item.id === id
  );
  if (brand) {
    return brand.title;
  }
  return "";
};

const productVariantInfo = (product: ConfProducts) => {
  if (product?.productFeature) {
    let firstAttrLabel = "";
    let secondAttrLabel = "";
    product.configurable_options?.forEach((attr) => {
      const attrLabel = attr.label;
      attr.values.forEach((variant) => {
        if (variant.value_index === product.productFeature?.attrIndexes[0]) {
          firstAttrLabel = `${attrLabel}: ${variant.label}`;
        }
        if (variant.value_index === product.productFeature?.attrIndexes[1]) {
          secondAttrLabel = `${attrLabel}: ${variant.label}`;
        }
      });
    });
    productVariantText1.value = firstAttrLabel;
    productVariantText2.value = secondAttrLabel;
  }
};

watchEffect(() => {});

onMounted(() => {
  // store.getCategories().then((data: any) => {
  //   brands.value = [...data] as Category[];
  // });
  productVariantInfo(props.item);
});
const envUrl = (url: string) => {
  // if (process.env.NODE_ENV !== "development") return baseUrl.slice(0, -1) + url;
  url = `https://raw.githubusercontent.com/fe-side/vue-test/master/assets${url}`;
  return url;
};
</script>

<template>
  <div class="one-product">
    <div class="product__img-contnr">
      <img
        class="product__one-img"
        :src="envUrl(item.image)"
        alt="product preview"
      />
      <div :style="{ width: '100%' }">
        <div>
          <p class="product__descr-name">
            {{ brandName(item.brand) }} / {{ item.title }}
          </p>
          <p class="add-info">{{ productVariantText1 }}</p>
          <p class="add-info">{{ productVariantText2 }}</p>
        </div>
        <p class="active-min">${{ item.regular_price.value.toFixed(2) }}</p>
        <div :style="{ 'text-align': 'right' }" class="active-min">
          <TrashIcon @click-btn="store.deleteCartProduct(item)" />
        </div>
      </div>
    </div>

    <div class="product__descr">
      <p class="active-max">${{ item.regular_price.value.toFixed(2) }}</p>
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

      <p>
        <span class="active-min">Всего:</span> ${{
          (item.regular_price.value * item.count).toFixed(2)
        }}
      </p>
      <div class="active-max">
        <TrashIcon @click-btn="store.deleteCartProduct(item)" />
      </div>
    </div>
  </div>
  <div class="under-product"></div>
</template>

<style lang="scss" scoped>
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

.product__img-contnr {
  display: flex;
  align-items: center;
  margin-top: auto;
  @media (min-width: 480px) {
    width: 300px;
  }
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
  border-bottom: 1px solid $secondary-inactive;
  width: 90%;
  margin-left: 5%;

  @media (max-width: 480px) {
    margin-top: 5px;
    margin-bottom: 25px;
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
.add-info {
  font-size: 0.8rem;
}
</style>
