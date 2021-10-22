import express, { json } from 'express';
import * as user from '../src/controller/user';

const server = express();

server.use(json());

server.get('/', (req, res) => {
  return res.send('Hello Tindin =)');
});

server.post('/create', user.create);

export default server;
