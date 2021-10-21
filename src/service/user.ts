import { response } from 'express';
import { IUsers } from '../types/IUsers';

const users: Array<IUsers> = [];

const create = (user: IUsers) => {
  if (!user.email) throw new Error('Por favor, informe o campo email.');
  if (!user.password) throw new Error('Por favor, informe o campo senha.');

  users.push(user);

  return user;
};

export { create };
