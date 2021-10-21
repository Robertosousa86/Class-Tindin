import server from '../src/server';
import request from 'supertest';
import { IUsers } from '../src/types/IUsers';

const validUser = () => {
  const user: IUsers = {
    email: 'user@email',
    password: 'p4ssword',
  };

  return user;
};

console.log(validUser);
describe('userService', () => {
  it('should be return 200 when a valid user is create', (done) => {
    const user = validUser();

    request(server)
      .post('/create')
      .send(user)
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });
});
