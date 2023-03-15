import { Pool } from 'mysql2/promise';
import IOrders from '../interfaces/ordersInterface';

export default class OrdersModels {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IOrders[]> {
    const query = `SELECT orders.id, orders.user_id AS userId, 
    JSON_ARRAYAGG(products.id) AS productsIds 
    FROM Trybesmith.orders AS orders 
    INNER JOIN Trybesmith.products AS products ON orders.id = products.order_id GROUP BY id`;
    const orders = await this.connection.execute(query);
    const [rows] = orders;
    return rows as IOrders[];
  }
}