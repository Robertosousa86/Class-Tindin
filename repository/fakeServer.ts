import express, { json } from 'express';
import * as user from './fakeController';

const Fakeserver = express();

Fakeserver.use(json());

Fakeserver.get('/', (req, res) => {
  return res.send('Hello Tindin =)');
});

Fakeserver.post('/create', user.create);

export default Fakeserver;
