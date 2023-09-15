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

export interface CategoryState extends Category {
  active: boolean;
}

export enum variantState {
  Checked = "Checked",
  Unchecked = "Unchecked",
  Inactive = "Inactive",
  Hidden = "Hidden",
}

export interface ProductFeature {
  id: number;
  sku: string;
  image: string;
  attrIndexes: number[];
}

export interface ConfProducts extends Product {
  current_attributes?: {
    code: string;
    value_index: number;
  }[];

  productFeature?: ProductFeature;
  configurable_options?: {
    attribute_id: number;
    attribute_code: string;
    label: string;
    position: number;
    values: {
      label: string;
      value_index: number;
      value: string;
      state: variantState;
    }[];
  }[];
  variants?: {
    attributes: {
      code: string;
      value_index: number;
    }[];
    product: {
      id: number;
      sku: string;
      image: string;
    };
  }[];
}

const baseUrl = "/store-nuxt/";

export { baseUrl };
