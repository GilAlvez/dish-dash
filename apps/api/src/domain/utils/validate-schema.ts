import { type ZodSchema } from 'zod';
import { type SchemaValidationErrorProp } from '../errors/schema-validation-error';

export function validateSchema<T = unknown>(
  schema: ZodSchema,
  data: T
): SchemaValidationErrorProp | null {
  const validation = schema.safeParse(data);
  if (!validation.success) {
    return validation.error.issues.map((issue) => ({
      field: issue.path.join('.'),
      message: issue.message,
    }));
  }
  return null;
}
