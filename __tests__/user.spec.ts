import fakeServer from '../src/repository/fakeServer';
import request from 'supertest';
import { IUsers } from '../src/types/IUsers';
// import { database } from '../src/repository/databasetest';
import fs from 'fs';

const validUser = () => {
  const user: IUsers = {
    email: 'user@email',
    password: 'p4ssword',
  };

  return user;
};

afterAll(() => {
  const filePath = 'db.sqlite';
  fs.unlinkSync(filePath);
});

describe('User', () => {
  const postValid = async () => {
    return await request(fakeServer).post('/create').send(validUser());
  };

  it('should be return 200 when a valid user is create.', async () => {
    const response = await postValid();
    expect(response.status).toBe(200);
  });
});

it('should be return status 400(bad request) when email field is empty.', async () => {
  const response = await request(fakeServer).post('/create').send({
    email: '',
    password: 'p4ssword',
  });
  expect(response.status).toBe(400);
});

it('should be return status 400(bad request) when password field is empty.', async () => {
  const response = await request(fakeServer).post('/create').send({
    email: 'user@email',
    password: '',
  });
  expect(response.status).toBe(400);
});
