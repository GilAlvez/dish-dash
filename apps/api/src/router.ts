import { Router } from 'express';
import { listCategories } from './use-cases/categories/list-categories';

export const router = Router();

router.get('/categories', listCategories);
router.post('/categories');
router.get('/categories/:id/products');

router.get('/products');
router.post('/products');

router.get('/orders');
router.post('/orders');
router.patch('/orders/:id');
router.delete('/orders/:id');
