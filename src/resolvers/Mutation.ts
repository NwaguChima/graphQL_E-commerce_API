import { v4 as uuid } from 'uuid';
import {
  IProduct,
  TCategory,
  TCategoryContext,
  TCategoryParent,
  TProductContext,
  TProductParent,
  TReview,
} from '../utils/typings';

export const Mutation = {
  addCategory: (
    parent: TCategoryParent,
    args: { input: TCategory },
    { categories }: TCategoryContext
  ) => {
    const { name } = args.input;

    const newCategory: TCategory = {
      id: uuid(),
      name,
    };

    categories.push(newCategory);

    return newCategory;
  },

  addProduct: (
    parent: TProductParent,
    args: { input: IProduct },
    { products, categories }: TProductContext
  ) => {
    const { name, description, quantity, onSale, price, image, categoryId } =
      args.input;

    const category = categories.filter((cat) => cat.id === categoryId);
    if (category.length <= 0) return;

    const newProduct = {
      id: uuid(),
      name,
      description,
      quantity,
      onSale,
      price,
      image,
      categoryId,
    };

    products.push(newProduct);

    return newProduct;
  },

  addReview: (
    parent: TProductParent,
    args: { input: TReview },
    { reviews }: TProductContext
  ) => {
    const { date, title, comment, rating, productId } = args.input;

    const newReview = {
      id: uuid(),
      date,
      title,
      comment,
      rating,
      productId,
    };

    reviews.push(newReview);

    return newReview;
  },
};
