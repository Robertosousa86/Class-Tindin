import { IUsers } from '../types/IUsers';

const users: Array<IUsers> = [];

const create = (user: IUsers) => {
  users.push(user);

  return user;
};

export { create };
