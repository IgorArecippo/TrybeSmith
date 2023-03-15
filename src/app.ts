import express from 'express';
import ProductsController from './controllers/productsController';
import UsersController from './controllers/usersControllers';

const app = express();

const productsController = new ProductsController();
const usersController = new UsersController();

app.use(express.json());
app.post('/products', productsController.create);
app.get('/products', productsController.getAll);
app.post('/users', usersController.create);

export default app;
