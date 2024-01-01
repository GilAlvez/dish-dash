import { type Request, type Response } from 'express';
import { OrderModel } from '../../../infrastructure/models/order-model';

export async function createOrder(req: Request, res: Response): Promise<void> {
  try {
    const { table, products } = req.body;

    const order = await OrderModel.create({ table, products });

    res.status(201).json(order);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
