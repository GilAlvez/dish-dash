import { type Request, type Response } from 'express';
import { ProductModel } from '../../../infrastructure/models/product-model';

export async function listProductsByCategoryId(req: Request, res: Response): Promise<void> {
  try {
    const { id } = req.params;
    const products = await ProductModel.find().where('category').equals(id);

    res.json(products);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
