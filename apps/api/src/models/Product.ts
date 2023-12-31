import { Schema, model } from 'mongoose';
import { CATEGORY_MODEL_NAME } from './Category';

export const PRODUCT_MODEL_NAME = 'Product';

export const Product = model(
  PRODUCT_MODEL_NAME,
  new Schema({
    name: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
    },
    imageUrl: {
      type: Schema.Types.String,
      required: true,
    },
    price: {
      type: Schema.Types.Number,
      required: true,
    },
    ingredients: {
      required: true,
      type: [
        {
          name: {
            type: Schema.Types.String,
            required: true,
          },
          icon: {
            type: Schema.Types.String,
            required: true,
          },
        },
      ],
    },
    category: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: CATEGORY_MODEL_NAME,
    },
  })
);
