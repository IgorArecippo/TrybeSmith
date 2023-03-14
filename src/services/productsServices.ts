import connection from '../models/connection';
import ProductsModel from '../models/productsModels';
import IProduct from '../interfaces/productsInterface';

export default class ProductsServices {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public async getAll(): Promise<IProduct[]> {
    const products = await this.model.getAll();
    return products;
  }

  public async create(product: IProduct): Promise<IProduct> {
    return this.model.create(product);
  }
}