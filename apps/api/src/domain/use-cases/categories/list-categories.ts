import { type Request, type Response } from 'express';
import { CategoryModel } from '../../../infrastructure/models/category-model';

export async function listCategories(req: Request, res: Response): Promise<void> {
  try {
    const categories = await CategoryModel.find();

    res.json(categories);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
