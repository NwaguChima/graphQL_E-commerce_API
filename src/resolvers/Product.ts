import {
  IProduct,
  TCategory,
  TCategoryContext,
  TProductArgs,
  TProductParent,
  TReview,
  TReviewContext,
} from '../utils/typings';

export const Product = {
  category: (
    { categoryId }: IProduct,
    args: TProductArgs,
    { categories }: TCategoryContext
  ) => {
    return categories.find((category: TCategory) => category.id === categoryId);
  },
  reviews: (
    { id }: TReview,
    args: TProductArgs,
    { reviews }: TReviewContext
  ) => {
    return reviews.filter((review) => review.productId === id);
  },
};
