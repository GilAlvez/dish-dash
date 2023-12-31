import { type Request, type Response } from 'express';
import { ORDER_STATUS_ENUM, Order } from '../../models/Order';

export async function changeOrderStatus(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const { status } = req.body;

    if (!ORDER_STATUS_ENUM.includes(status as string)) {
      res.status(400).json({
        error: `Status should be one of these: ${ORDER_STATUS_ENUM.join(', ')}`,
      });
    }

    await Order.findByIdAndUpdate(id, { status });

    res.sendStatus(204);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
