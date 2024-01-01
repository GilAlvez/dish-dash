import { type Request, type Response } from 'express';
import { ProductModel } from '../../../infrastructure/models/product-model';

export async function createProduct(req: Request, res: Response): Promise<void> {
  try {
    const imageUrl = req.file?.filename;

    const { name, description, price, category, ingredients } = req.body;

    const product = await ProductModel.create({
      name,
      description,
      imageUrl,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients as string) : [],
    });

    res.status(201).json(product);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
