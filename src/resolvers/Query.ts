import {
  TCategory,
  TCategoryArgs,
  TCategoryContext,
  TCategoryParent,
  TProductArgs,
  TProductContext,
  TProductParent,
} from '../utils/typings';

export const Query = {
  hello: () => {
    return 'World!';
  },
  products: (
    parent: TProductParent,
    args: TProductArgs,
    { products }: TProductContext
  ) => {
    return products;
  },
  product: (
    parent: TProductParent,
    { id: productId }: TProductArgs,
    { products }: TProductContext
  ) => {
    return products.find((product) => product.id === productId);
  },

  categories: (
    parent: TProductParent,
    args: TProductArgs,
    { categories }: TCategoryContext
  ) => {
    return categories;
  },
  category: (
    parent: TCategoryParent,
    { id }: TCategoryArgs,
    { categories }: TCategoryContext
  ) => {
    return categories.find((category: TCategory) => category.id === id);
  },
};
