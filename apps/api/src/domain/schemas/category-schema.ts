import z from 'zod';
import SchemaValidationError from '../errors/schema-validation-error';
import { validateSchema } from '../utils/validate-schema';

const categorySchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(3).max(50),
  imageUrl: z.string().url(),
});

export type CategorySchema = z.infer<typeof categorySchema>;

export function validateCategorySchema(schema: CategorySchema): void {
  const error = validateSchema(categorySchema, schema);

  if (error) {
    throw new SchemaValidationError(error);
  }
}
