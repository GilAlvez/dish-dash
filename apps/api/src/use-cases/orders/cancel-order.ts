import { type Request, type Response } from 'express';
import { Order } from '../../models/Order';

export async function cancelOrder(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;

    await Order.findByIdAndDelete(id);

    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
