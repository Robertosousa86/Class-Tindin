import { createUser } from '../src/service/userService';
import { IUsers } from '../src/types/IUsers';

const validUser = () => {
  const user: IUsers = {
    email: 'user@email',
    password: 'p4ssword',
  };

  return user;
};

describe('userService', () => {
  it('should be return 200 when a valid user is create', () => {
    
  });
});
