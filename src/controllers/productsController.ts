import { Request, Response } from 'express';
import ProductsServices from '../services/productsServices';

export default class ProductsController {
  constructor(private productsService = new ProductsServices()) {}

  public getAll = async (_req: Request, res: Response): Promise<void> => {
    const products = await this.productsService.getAll();
    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response): Promise<void> => {
    const product = req.body;
    const result = await this.productsService.create(product);
    res.status(201).json(result);
  };
}