import { Pool, ResultSetHeader } from 'mysql2/promise';
import IUser from '../interfaces/usersIntarface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: IUser) {
    const { username, vocation, level, password } = user;

    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ? ,?)',
      [username, vocation, level, password],
    );
    const newUser = {
      id: insertId,
      ...user,
    };
    return newUser;
  }
}
