import { defineStore } from "pinia";
import { Product, Category } from "~/types";

export const useCounterStore = defineStore("store_items", {
  state: () => ({
    count: 11 as Number,
    name: "Test value" as String,
    currentBrand: "" as String,
  }),
  actions: {
    async getProducts() {
      return await fetch("products.json")
        .then((res) => res.json())
        .then((data) => {
          return data as Product;
        });
    },
    async getCategories() {
      return await fetch("brands.json")
        .then((res) => res.json())
        .then((data) => {
          return data as Category;
        });
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCounterStore, import.meta.hot));
}
