import FakeServer from '../repository/fakeServer';
import request from 'supertest';
import { IUsers } from '../src/types/IUsers';
import fs from 'fs';

const validUser = () => {
  const user: IUsers = {
    email: 'user@email',
    password: 'p4ssword',
  };

  return user;
};

beforeEach(() => {
  fs.chmod('./repository/db.sqlite', 777, (err) => {
    if (err) throw err;
    console.log(
      'The permissions for file "./repository/db.sqlite" have been changed!'
    );
  });
});

afterAll(() => {
  fs.unlinkSync('./repository/db.sqlite');
});

describe('User', () => {
  const postValid = async () => {
    return await request(FakeServer).post('/create').send(validUser());
  };

  it('should be return 200 when a valid user is create.', async () => {
    const response = await postValid();
    expect(response.status).toBe(201);
  });
});

it('should be return status 400(bad request) when email field is empty.', async () => {
  const response = await request(FakeServer).post('/create').send({
    email: '',
    password: 'p4ssword',
  });
  expect(response.status).toBe(400);
});

it('should be return status 400(bad request) when password field is empty.', async () => {
  const response = await request(FakeServer).post('/create').send({
    email: 'user@email',
    password: '',
  });
  expect(response.status).toBe(400);
});
