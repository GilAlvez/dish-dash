import z from 'zod';
import { UserGenderValues } from '../enums/user-gender';
import { UserRoleValues } from '../enums/user-role';
import SchemaValidationError from '../errors/schema-validation-error';
import { onlyLettersRegex } from '../utils/only-letters-regex';
import { validateSchema } from '../utils/validate-schema';
import { addressSchema } from './address-schema';

const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().trim().min(4).max(80).regex(onlyLettersRegex, {
    message:
      'Must contain only letter characters from any language (e.g: Latin, Kanji...) and no numbers or special symbols.',
  }),
  email: z.string().trim().email(),
  password: z.string().trim().min(8),
  imageUrl: z.string().url().nullable(),
  address: addressSchema.nullable(),
  phone: z.string().trim().nullable(),
  birthdate: z.date().nullable(),
  gender: z.enum(UserGenderValues),
  role: z.enum(UserRoleValues),
});

export type UserSchema = z.infer<typeof userSchema>;

export function validateUserSchema(schema: UserSchema): void {
  const error = validateSchema(userSchema, schema);

  if (error) {
    throw new SchemaValidationError(error);
  }
}
