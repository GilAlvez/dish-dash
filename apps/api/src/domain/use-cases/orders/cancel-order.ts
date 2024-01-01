import { type Request, type Response } from 'express';
import { OrderModel } from '../../../infrastructure/models/order-model';

export async function cancelOrder(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;

    await OrderModel.findByIdAndDelete(id);

    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
