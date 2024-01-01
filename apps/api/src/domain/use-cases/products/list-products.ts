import { type Request, type Response } from 'express';
import { ProductModel } from '../../../infrastructure/models/product-model';

export async function listProducts(req: Request, res: Response): Promise<void> {
  try {
    const products = await ProductModel.find();

    res.json(products);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
