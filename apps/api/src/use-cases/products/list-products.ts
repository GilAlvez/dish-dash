import { type Request, type Response } from 'express';
import { Product } from '../../models/Product';

export async function listProducts(req: Request, res: Response): Promise<void> {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
