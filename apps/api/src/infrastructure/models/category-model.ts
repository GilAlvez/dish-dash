import { Schema, model } from 'mongoose';

export const CATEGORY_MODEL_NAME = 'Category';

export const CategoryModel = model(
  CATEGORY_MODEL_NAME,
  new Schema(
    {
      _id: {
        type: Schema.Types.String,
        default: crypto.randomUUID(),
      },
      name: {
        type: Schema.Types.String,
        required: true,
      },
      icon: {
        type: Schema.Types.String,
        required: true,
      },
    },
    { _id: false }
  )
);
