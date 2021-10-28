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
    throw new Error('Nenhum(a) usuário(a) encontrado(a) com o id informado!');

  return user.rowns;
};

const update = async (user: IUsers) => {
  if (!user.id) {
    throw new Error('Informe o campo id!');
  }

  const userFound = await db.execute('SELECT * FROM users WHERE id=?', [
    user.id,
  ]);

  const resultArray = Object.values(
    JSON.parse(JSON.stringify(userFound.rowns))
  );

  if (!resultArray.length)
    throw new Error('Nenhum(a) usuário(a) encontrado(a) para o id informado!');

  if (!user.email) throw new Error('Informe o campo email!');

  if (!user.password) throw new Error('Informe o campo password!');

  await db.execute('UPDATE users SET email=?, password=? WHERE id=?', [
    user.email,
    user.password,
    user.id,
  ]);

  return true;
};

const remove = async (id: string) => {
  if (!id) throw new Error('Informe o campo id!');

  const user = await db.execute('SELECT * FROM users WHERE id=?', [id]);

  const resultArray = Object.values(JSON.parse(JSON.stringify(user.rowns)));

  if (!resultArray.length)
    throw new Error('Nenhum usuário(a) encontrado(a) para o id informado!');

  await db.execute('DELETE FROM users WHERE id=?', [id]);

  return true;
};

export { create, list, get, update, remove };
