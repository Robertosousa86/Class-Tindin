import { Request, Response } from 'express';
import * as user from '../service/user';
import { badRequest, notFound } from '../libs/bindError';

const list = async (req: Request<any>, res: Response<any>) => {
  try {
    const users = await user.list();
    
    return res.json(users);
  } catch (err) {
    return badRequest(res, err);
  }
};

const get = async (req: Request<any>, res: Response<any>) => {
  try {
    const { id } = req.params;

    const foundUser = await user.get(id);

    return res.json(foundUser);
  } catch (err: any) {
    return notFound(res, err);
  }
};

const create = async (req: Request<any>, res: Response<any>) => {
  try {
    const { email, password } = req.body;

    await user.create({ email, password });

    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    return badRequest(res, error);
  }
};

export { create, list, get };
