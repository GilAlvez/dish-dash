import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import { createCategory } from './use-cases/categories/create-category';
import { listCategories } from './use-cases/categories/list-categories';
import { listProductsByCategoryId } from './use-cases/categories/list-products-by-category-id';
import { cancelOrder } from './use-cases/orders/cancel-order';
import { changeOrderStatus } from './use-cases/orders/change-order-status';
import { createOrder } from './use-cases/orders/create-order';
import { listOrders } from './use-cases/orders/list-orders';
import { createProduct } from './use-cases/products/create-product';
import { listProducts } from './use-cases/products/list-products';
import asyncHandler from './utils/asyncHandler';

const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'public'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

// Categories
router.get('/categories', asyncHandler(listCategories));
router.post('/categories', asyncHandler(createCategory));
router.get('/categories/:id/products', asyncHandler(listProductsByCategoryId));

// Products
router.get('/products', asyncHandler(listProducts));
router.post('/products', upload.single('image'), asyncHandler(createProduct));

// Orders
router.get('/orders', asyncHandler(listOrders));
router.post('/orders', asyncHandler(createOrder));
router.patch('/orders/:id', asyncHandler(changeOrderStatus));
router.delete('/orders/:id', asyncHandler(cancelOrder));

export default router;
