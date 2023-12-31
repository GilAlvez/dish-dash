import { type Request, type Response } from 'express';
import { Category } from '../../models/Category';

export async function createCategory(req: Request, res: Response): Promise<void> {
  try {
    const { icon, name } = req.body;

    const category = await Category.create({ icon, name });

    res.status(201).json(category);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
}
