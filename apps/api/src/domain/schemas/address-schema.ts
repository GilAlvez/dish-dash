import z from 'zod';
import SchemaValidationError from '../errors/schema-validation-error';
import { validateSchema } from '../utils/validate-schema';

export const addressSchema = z.object({
  street: z.string(),
  number: z.string(),
  complement: z.string().nullable(),
  city: z.string(),
  state: z.string(),
  country: z.string(),
  zipCode: z.string(),
});

export type AddressSchema = z.infer<typeof addressSchema>;

export function validateAddressSchema(schema: AddressSchema): void {
  const error = validateSchema(addressSchema, schema);

  if (error) {
    throw new SchemaValidationError(error);
  }
}
