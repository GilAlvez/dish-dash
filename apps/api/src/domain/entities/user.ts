import { type UserGender } from '../enums/user-gender';
import { type UserRole } from '../enums/user-role';
import { validateUserSchema, type UserSchema } from '../schemas/user-schema';
import { Address } from './address';

export class User implements UserSchema {
  id: string;
  name: string;
  email: string;
  password: string;
  imageUrl: string | null;
  address: Address | null;
  phone: string | null;
  birthdate: Date | null;
  gender: UserGender;
  role: UserRole;

  constructor(schema: UserSchema) {
    validateUserSchema(schema);

    this.id = schema.id;
    this.name = schema.name;
    this.email = schema.email;
    this.password = schema.password;
    this.imageUrl = schema.imageUrl;
    this.address = schema.address && new Address(schema.address);
    this.phone = schema.phone;
    this.birthdate = schema.birthdate;
    this.gender = schema.gender;
    this.role = schema.role;
  }
}
