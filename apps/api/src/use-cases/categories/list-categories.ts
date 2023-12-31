import { type Request, type Response } from 'express';
import { Category } from '../../models/Category';

export async function listCategories(req: Request, res: Response): Promise<void> {
  try {
    const categories = await Category.find();

    res.json(categories);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
