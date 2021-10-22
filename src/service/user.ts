import { IUsers } from '../types/IUsers';
import * as db from '../libs/mysql';

const create = async (user: IUsers) => {
  if (!user.email) throw new Error('Por favor, informe o campo email.');
  if (!user.password) throw new Error('Por favor, informe o campo senha.');

  await db.execute('insert into users (email, password) values (?, ?)', [
    user.email,
    user.password,
  ]);

  return true;
};

export { create };
