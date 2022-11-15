import path from 'path';
import { Router } from 'express';
import multer from 'multer';

import { createCategory } from './app/useCases/categories/createCategories';
import { listCategories } from './app/useCases/categories/listCategories';
import { listOrders } from './app/useCases/orders/listOrders';
import { createProduct } from './app/useCases/products/createProducts';
import { listProducts } from './app/useCases/products/listProducts';

export const router = Router();

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback) {
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/products', listProducts);

router.post('/products', upload.single('image'), createProduct);

router.get('/categories/:categoryId/products', (request, response) => {
  response.send('OK');
});

router.get('/oders', listOrders);

router.post('/orders', (request, response) => {
  response.send('OK');
});

router.patch('/orders/status/:orderId', (request, response) => {
  response.send('OK');
});

router.delete('/orders/:orderId', (request, response) => {
  response.send('OK');
});
