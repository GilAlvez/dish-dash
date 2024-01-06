import { Schema, model } from 'mongoose';
import { CATEGORY_MODEL_NAME } from './category-model';

export const PRODUCT_MODEL_NAME = 'Product';

export const ProductModel = model(
  PRODUCT_MODEL_NAME,
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
    },
    { _id: false }
  )
);
