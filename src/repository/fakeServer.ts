import express, { json } from 'express';
import * as fake from './fakeController';

const fakeServer = express();

fakeServer.use(json());

fakeServer.post('/create', fake.create);

export default fakeServer;
