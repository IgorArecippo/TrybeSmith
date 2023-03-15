import express from 'express';
import ProductsController from './controllers/productsController';
import UsersController from './controllers/usersControllers';
import OrdersController from './controllers/ordersController';

const app = express();

const productsController = new ProductsController();
const usersController = new UsersController();
const ordersController = new OrdersController();

app.use(express.json());
app.post('/products', productsController.create);
app.get('/products', productsController.getAll);
app.post('/users', usersController.create);
app.get('/orders', ordersController.getAll);

export default app;
