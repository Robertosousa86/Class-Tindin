import { Request, Response } from 'express';
import * as user from '../service/user';
import { badRequest } from '../libs/bindError';

const create = (req: Request<any>, res: Response<any>) => {
  try {
    const { email, password } = req.body;

    return res.status(200).json(user.create({ email, password }));
  } catch (error) {
    return badRequest(res, error);
  }
};

export { create };
