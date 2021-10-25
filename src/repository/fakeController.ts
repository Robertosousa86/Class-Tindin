import { Request, Response } from 'express';
import createFake from '../repository/fakeService';
import { badRequest } from '../libs/bindError';

const create = async (req: Request<any>, res: Response<any>) => {
  try {
    const { email, password } = req.body;

    const userCreated = await createFake({ email, password });

    return res.status(200).json(userCreated);
  } catch (error) {
    return badRequest(res, error);
  }
};

export { create };
