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

describe('User', () => {
  it('should be return 200 when a valid user is create.', (done) => {
    const user = validUser();

    request(server)
      .post('/create')
      .send(user)
      .then((response) => {
        expect(response.status).toBe(200);
        done();
      });
  });

  it('should be return status 400(bad request) when email field is empty.', (done) => {
    request(server)
      .post('/create')
      .send({
        email: '',
        password: 'p4ssword',
      })
      .then((response) => {
        expect(response.status).toBe(400);
        done();
      });
  });

  it('should be return status 400(bad request) when password field is empty.', (done) => {
    request(server)
      .post('/create')
      .send({
        email: 'user@email',
        password: '',
      })
      .then((response) => {
        expect(response.status).toBe(400);
        done();
      });
  });
});
