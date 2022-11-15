import { Router } from 'express';

export const router = Router();

router.get('/categories', (request, response) => {
  response.send('OK');
});

router.post('/categories', (request, response) => {
  response.send('OK');
});

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
