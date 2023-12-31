import { type Request, type Response } from 'express';
import { Product } from '../../models/Product';

export async function listProductsByCategoryId(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const products = await Product.find().where('category').equals(id);

    res.json(products);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
