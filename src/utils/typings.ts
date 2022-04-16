export type TProductContext = {};
export type TProductParent = {};
export type TProductArgs = {
  id: String;
};

export type TCategoryContext = {};
export type TCategoryParent = {};
export type TCategoryArgs = {
  id: String;
};

export type IProduct = {
  id: string;
  name: string;
  description: string;
  quantity: number;
  price: number;
  image: string;
  onSale: false;
  categoryId: string;
};
