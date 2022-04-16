import {
  IProduct,
  TCategory,
  TCategoryArgs,
  TCategoryContext,
  TCategoryParent,
  TFilter,
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
    { products, reviews }: TProductContext
  ) => {
    let { onSale, avgRating } = args.filter as TFilter;
    let filteredProducts: any = products;

    if (onSale === true) {
      filteredProducts = filteredProducts.filter((product: IProduct) => {
        return product.onSale;
      });
    }

    if ([1, 2, 3, 4, 5].includes(avgRating)) {
      filteredProducts = filteredProducts.filter((product: IProduct) => {
        let sumRating = 0;
        let numberOfReviews = 0;

        reviews.forEach((review) => {
          if (review.productId === product.id) {
            sumRating += review.rating;
            numberOfReviews++;
          }
        });

        const avgProductRating = sumRating / numberOfReviews;

        return avgProductRating >= avgRating;
      });
    }

    return filteredProducts;
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
