import { Schema, model } from 'mongoose';
import { PRODUCT_MODEL_NAME } from './product-model';

export const ORDER_MODEL_NAME = 'Order';
export const ORDER_STATUS_ENUM = ['WAITING', 'IN_PRODUCTION', 'DONE'];

export const OrderModel = model(
  ORDER_MODEL_NAME,
  new Schema({
    table: {
      type: Schema.Types.String,
      required: true,
    },
    status: {
      type: Schema.Types.String,
      enum: ORDER_STATUS_ENUM,
      default: 'WAITING',
    },
    createdAt: {
      type: Schema.Types.Date,
      default: Date.now,
    },
    products: {
      required: true,
      type: [
        {
          product: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: PRODUCT_MODEL_NAME,
          },
          quantity: {
            type: Schema.Types.Number,
            default: 1,
          },
        },
      ],
    },
  })
);
