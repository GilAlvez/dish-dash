import { validateAddressSchema, type AddressSchema } from '../schemas/address-schema';

export class Address implements AddressSchema {
  street: string;
  number: string;
  complement: string | null;
  city: string;
  state: string;
  country: string;
  zipCode: string;

  constructor(schema: AddressSchema) {
    validateAddressSchema(schema);

    this.street = schema.street;
    this.number = schema.number;
    this.complement = schema.complement;
    this.city = schema.city;
    this.state = schema.state;
    this.country = schema.country;
    this.zipCode = schema.zipCode;
  }
}
