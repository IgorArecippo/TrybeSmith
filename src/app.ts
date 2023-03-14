import express from 'express';
import ProductsController from './controllers/productsController';

const app = express();

const productsController = new ProductsController();

app.use(express.json());
app.post('/products', productsController.create);
app.get('/products', productsController.getAll);

export default app;
