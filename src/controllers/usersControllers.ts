import { Request, Response } from 'express';
import createTokenJWT from '../interfaces/jwtInterface';
import UsersServices from '../services/usersServices';

export default class UsersController {
  constructor(private userService = new UsersServices()) {}

  public create = async (req: Request, res: Response): Promise<void> => {
    const newUser = req.body;
    const token = createTokenJWT(newUser);
    await this.userService.create(newUser);
    res.status(201).json({ token });
  };
}