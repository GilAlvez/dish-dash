import { type Request, type Response } from 'express';
import { OrderModel } from '../../../infrastructure/models/order-model';

export async function listOrders(req: Request, res: Response): Promise<void> {
  try {
    const orders = await OrderModel.find().sort({ createdAt: 1 }).populate('products.product');

    res.json(orders);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
