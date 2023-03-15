import connection from '../models/connection';
import UsersModel from '../models/usersModels';
import IUser from '../interfaces/usersIntarface';

export default class UsersServices {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async create(user: IUser): Promise<IUser> {
    return this.model.create(user);
  }
}