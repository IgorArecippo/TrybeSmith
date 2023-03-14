import { Pool, ResultSetHeader } from 'mysql2/promise';
import IProduct from '../interfaces/productsInterface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<IProduct[]> {
    const [result] = await this.connection.execute('SELECT * FROM Trybesmith.products');
    return result as IProduct[]; 
  }

  public async create(product: IProduct) {
    const { name, amount } = product;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    const newProduct = {
      id: insertId,
      ...product,
    };
    return newProduct;
  }
}