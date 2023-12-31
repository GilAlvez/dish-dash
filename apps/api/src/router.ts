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

export const router = Router();

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

router.get('/categories', listCategories);
router.post('/categories', createCategory);
router.get('/categories/:id/products', listProductsByCategoryId);

router.get('/products', listProducts);
router.post('/products', upload.single('image'), createProduct);

router.get('/orders', listOrders);
router.post('/orders', createOrder);
router.patch('/orders/:id', changeOrderStatus);
router.delete('/orders/:id', cancelOrder);
