import { Request, Response } from 'express';
import * as user from '../service/user';

const create = (req: Request<any>, res: Response<any>) => {
  const { email, password } = req.body;

  return res.status(200).json(user.create({ email, password }));
};

export { create };
