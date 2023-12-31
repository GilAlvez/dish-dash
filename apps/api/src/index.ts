import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import { router } from './router';

const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const server = express();

    server.listen(3001, () => {
      console.log(`Running on http://localhost:${PORT}`);
    });

    server.use('/uploads', express.static(path.resolve(__dirname, '..', 'public')));
    server.use(express.json());
    server.use(router);
  })
  .catch((e) => {
    console.error(e);
  });
