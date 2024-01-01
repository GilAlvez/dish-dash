export type SchemaValidationErrorProp = Array<{
  field: string;
  message: string;
}>;

export default class SchemaValidationError extends Error {
  error?: SchemaValidationErrorProp;

  constructor(error?: SchemaValidationErrorProp) {
    super('Invalid Schema');
    this.error = error;
    this.name = this.constructor.name;
  }
}
