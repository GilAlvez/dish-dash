import { type Request, type Response } from 'express';
import { CategoryModel } from '../../../infrastructure/models/category-model';

export async function createCategory(req: Request, res: Response): Promise<void> {
  try {
    const { icon, name } = req.body;

    const category = await CategoryModel.create({ icon, name });

    res.status(201).json(category);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
