import connection from '../models/connection';
import OrdersModels from '../models/ordersModels';
import IOrders from '../interfaces/ordersInterface';

export default class OrdersServices {
  public model: OrdersModels;

  constructor() {
    this.model = new OrdersModels(connection);
  }

  public async getAll(): Promise<IOrders[]> {
    const orders = await this.model.getAll();
    return orders;
  }
}