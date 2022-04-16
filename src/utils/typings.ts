export type TProductContext = {
  products: [IProduct];
};
export type TProductParent = {
  id: string;
};
export type TProductArgs = {
  id: string;
};

export type TCategoryContext = {
  categories: [TCategory];
};
export type TCategoryParent = {
  id: string;
};
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

export type TCategory = {
  id: string;
  name: string;
};
