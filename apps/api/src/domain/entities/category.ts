import { validateCategorySchema, type CategorySchema } from '../schemas/category-schema';

export class Category {
  name: string;
  imageUrl: string;

  constructor(schema: CategorySchema) {
    validateCategorySchema(schema);

    this.name = schema.name;
    this.imageUrl = schema.imageUrl;
  }
}
