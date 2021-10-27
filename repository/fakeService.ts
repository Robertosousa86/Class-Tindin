import { IUsers } from '../src/types/IUsers';
import { database } from './databasetest';

const createFake = (user: IUsers) => {
  if (!user.email) throw new Error('Por favor, informe o campo email.');
  if (!user.password) throw new Error('Por favor, informe o campo senha.');

  database.run('insert into users (email, password) values (?, ?)', [
    user.email,
    user.password,
  ]);

  return true;
};

export default createFake;
