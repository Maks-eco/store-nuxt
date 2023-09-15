import nuxtStorage from "nuxt-storage";
import { defineStore } from "pinia";
import { Product, Category, ConfProducts, CategoryState } from "~/types";

const locStorage = {
  saveData: (name: string, value: any) => {
    nuxtStorage.localStorage.setData(name, JSON.stringify(value), 60 * 24);
  },
  getData: <T>(name: string): T | undefined => {
    try {
      return JSON.parse(nuxtStorage.localStorage.getData(name));
    } catch (e) {
      return undefined;
    }
  },
  getDataList: <T>(name: string): T[] => {
    let data = [] as T[];
    try {
      data = JSON.parse(nuxtStorage.localStorage.getData(name));
    } catch (e) {
      console.log(e);
    }

    return data;
  },
};

export const useCounterStore = defineStore("store_items", {
  state: () => ({
    currentBrand: -1 as Number /* | null */,
    storageProduct: [] as ConfProducts[],
  }),
  getters: {
    countCartProducts: (state) =>
      state.storageProduct
        ? state.storageProduct.reduce(
            (acc: number, item: Product) => acc + item.count,
            0
          )
        : 0,
    finalCost: (state) =>
      state.storageProduct
        ? state.storageProduct.reduce(
            (acc: number, item: Product) =>
              acc + item.count * item.regular_price.value,
            0
          )
        : 0,
  },
  actions: {
    async getProducts() {
      return (
        $fetch("level3/products.json")
          // .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            return data as Product[];
          })
      );
    },
    async getCategories<T>(): Promise<T[] | null> {
      return (
        $fetch("brands.json")
          // .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            return data as T[];
          })
      );
    },
    getsaveProductList() {
      this.storageProduct = locStorage.getDataList<Product>("container-sn");
    },
    saveProduct(productSave: ConfProducts) {
      const product: ConfProducts = JSON.parse(JSON.stringify(productSave));
      if (product.productFeature) {
        product.id = product.productFeature.id;
      }
      if (!this.storageProduct || this.storageProduct.length === 0) {
        this.storageProduct = [];
        this.storageProduct.push({ ...product, count: 0 });
      }
      if (
        this.storageProduct.filter((item) => item.id === product.id).length ===
        0
      ) {
        this.storageProduct.push({ ...product, count: 0 });
      }

      this.storageProduct = this.storageProduct.map((item) => {
        if (item.id === product.id) {
          return { ...product, count: item.count + 1 };
        }
        return item;
      });

      locStorage.saveData("container-sn", this.storageProduct);
    },
    updateProductCount(product: Product) {
      this.storageProduct = this.storageProduct.map((item) => {
        if (item.id === product.id) {
          return { ...product, count: product.count };
        }
        return item;
      });

      locStorage.saveData("container-sn", this.storageProduct);
    },
    deleteCartProduct(product: Product) {
      this.storageProduct = this.storageProduct.filter(
        (item) => item.id !== product.id
      );

      locStorage.saveData("container-sn", this.storageProduct);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
