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

const list = async () => {
  const result = await db.execute('SELECT * FROM users');
  return result.rowns;
};

const get = async (id: string) => {
  if (!id) {
    throw new Error('Informe o campo id!');
  }

  const user = await db.execute('SELECT * FROM users WHERE id=?', [id]);

  const resultArray = Object.values(JSON.parse(JSON.stringify(user.rowns)));

  if (!resultArray.length)
    throw new Error('Nenhum usuário encontrado com o id informado!');

  return user.rowns;
};

export { create, list, get };
