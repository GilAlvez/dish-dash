import { type Request, type Response } from 'express';
import { Product } from '../../models/Product';

export async function createProduct(req: Request, res: Response): Promise<void> {
  try {
    const imageUrl = req.file?.filename;

    const { name, description, price, category, ingredients } = req.body;

    const product = await Product.create({
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
