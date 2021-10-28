import express, { json } from 'express';
import * as user from '../src/controller/user';
import cors from 'cors';

const server = express();

server.use(json());
server.use(cors());

server.get('/', (req, res) => {
  return res.send('Hello Tindin =)');
});

server.post('/create', user.create);
server.get('/users', user.list);
server.get('/users/:id', user.get);
server.put('/users', user.update);
server.delete('/users', user.remove);

export default server;
