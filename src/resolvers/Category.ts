import {
  IProduct,
  TCategoryParent,
  TProductArgs,
  TProductContext,
} from '../utils/typings';

export const Category = {
  products: (
    { id: categoryId }: TCategoryParent,
    args: TProductArgs,
    { products }: TProductContext
  ) => {
    return products.filter(
      (product: IProduct) => product.categoryId === categoryId
    );
  },
};
