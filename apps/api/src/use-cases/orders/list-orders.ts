import { type Request, type Response } from 'express';
import { Order } from '../../models/Order';

export async function listOrders(req: Request, res: Response): Promise<void> {
  try {
    const orders = await Order.find().sort({ createdAt: 1 }).populate('products.product');

    res.json(orders);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
