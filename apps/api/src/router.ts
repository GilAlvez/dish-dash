import { Router } from 'express';
import multer from 'multer';
import path from 'node:path';
import asyncHandler from './presentation/utils/async-handler';
import { createCategory } from './domain/use-cases/categories/create-category';
import { listCategories } from './domain/use-cases/categories/list-categories';
import { listProductsByCategoryId } from './domain/use-cases/categories/list-products-by-category-id';
import { cancelOrder } from './domain/use-cases/orders/cancel-order';
import { changeOrderStatus } from './domain/use-cases/orders/change-order-status';
import { createOrder } from './domain/use-cases/orders/create-order';
import { listOrders } from './domain/use-cases/orders/list-orders';
import { createProduct } from './domain/use-cases/products/create-product';
import { listProducts } from './domain/use-cases/products/list-products';

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
