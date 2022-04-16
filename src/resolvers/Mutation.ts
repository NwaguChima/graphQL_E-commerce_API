import { v4 as uuid } from 'uuid';
import { TCategory, TCategoryContext, TCategoryParent } from '../utils/typings';

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
};
