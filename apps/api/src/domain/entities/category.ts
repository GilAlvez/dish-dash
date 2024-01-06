import { validateCategorySchema, type CategorySchema } from '../schemas/category-schema';

export class Category implements CategorySchema {
  id: string;
  name: string;
  imageUrl: string;

  constructor(schema: CategorySchema) {
    validateCategorySchema(schema);

    this.id = schema.id;
    this.name = schema.name;
    this.imageUrl = schema.imageUrl;
  }
}
