import { Request, Response } from 'express';
import OrdersServices from '../services/ordersServices';

export default class OrdersController {
  constructor(private ordersService = new OrdersServices()) {}

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const orders = await this.ordersService.getAll();
    res.status(200).json(orders);
  };
}