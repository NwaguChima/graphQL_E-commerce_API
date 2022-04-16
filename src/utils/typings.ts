export type TProductContext = {};
export type TProductParent = {
  id: string;
};
export type TProductArgs = {
  id: string;
};

export type TCategoryContext = {};
export type TCategoryParent = {};
export type TCategoryArgs = {
  id: string;
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
