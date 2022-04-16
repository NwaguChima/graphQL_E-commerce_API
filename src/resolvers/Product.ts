import {
  IProduct,
  TCategory,
  TCategoryContext,
  TProductArgs,
} from '../utils/typings';

export const Product = {
  category: (
    { categoryId }: IProduct,
    args: TProductArgs,
    { categories }: TCategoryContext
  ) => {
    return categories.find((category: TCategory) => category.id === categoryId);
  },
};
