import { Request, Response } from 'express';
import * as user from '../service/user';
import { badRequest, notFound } from '../libs/bindError';

const create = async (req: Request<any>, res: Response<any>) => {
  try {
    const { email, password } = req.body;

    await user.create({ email, password });

    return res
      .status(201)
      .json({ message: 'Usuário(a) criado(a) com sucesso!' });
  } catch (error) {
    return badRequest(res, error);
  }
};

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

const update = async (req: Request<any>, res: Response<any>) => {
  try {
    const { id, email, password } = req.body;

    if (!id) return res.status(400).json({ message: 'Informe o campo id!' });

    await user.update({ id, email, password });

    return res
      .status(200)
      .json({ message: 'Dado(s) alterado(s) com sucesso!' });
  } catch (err: any) {
    return notFound(res, err);
  }
};

const remove = async (req: Request<any>, res: Response<any>) => {
  try {
    const id = req.body.id;

    if (!id) return res.status(400).json({ message: 'Informe o campo id!' });

    await user.remove(id);

    res.status(200).json({ success: 'Usuário(a) deletado(a) com sucesso!' });
  } catch (err: any) {
    return notFound(res, err);
  }
};

export { create, list, get, update, remove };
