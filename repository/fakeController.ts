import { Request, Response } from 'express';
import createFake from '../repository/fakeService';
import { badRequest } from '../src/libs/bindError';

const create = (req: Request<any>, res: Response<any>) => {
  try {
    const { email, password } = req.body;

    createFake({ email, password });

    return res.status(201).json({ message: 'Usuário criado com sucesso!' });
  } catch (error) {
    return badRequest(res, error);
  }
};

export { create };
