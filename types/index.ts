export interface Product {
  count: number;
  type: string;
  id: number;
  sku: string;
  title: string;
  regular_price: {
    currency: string;
    value: number;
  };
  image: string;
  brand: number;
}

export interface Category {
  id: number;
  title: string;
  sort: string;
  code: string;
}

const baseUrl = "/store-nuxt/";

export { baseUrl };
