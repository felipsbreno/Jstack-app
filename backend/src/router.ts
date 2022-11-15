import { Router } from 'express';
import { createCategory } from './app/useCases/categories/createCategories';
import { listCategories } from './app/useCases/categories/listCategories';

export const router = Router();

router.get('/categories', listCategories);

router.post('/categories', createCategory);

router.get('/products', (request, response) => {
  response.send('OK');
});

router.post('/products', (request, response) => {
  response.send('OK');
});

router.get('/categories/:categoryId/products', (request, response) => {
  response.send('OK');
});

router.get('/oders', (request, response) => {
  response.send('OK');
});

router.post('/orders', (request, response) => {
  response.send('OK');
});

router.patch('/orders/status/:orderId', (request, response) => {
  response.send('OK');
});

router.delete('/orders/:orderId', (request, response) => {
  response.send('OK');
});
