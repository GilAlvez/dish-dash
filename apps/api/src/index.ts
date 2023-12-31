import express from 'express';
import mongoose from 'mongoose';
import path from 'node:path';
import Middleware from './middleware';
import router from './router';

const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const server = express();

    server.listen(3001, () => {
      console.log(`Running on http://localhost:${PORT}`);
    });

    server.use('/uploads', express.static(path.resolve(__dirname, '..', 'public')));
    server.use(Middleware.CORS);
    server.use(Middleware.json);
    server.use(router);
    server.use(Middleware.errorHandler);
  })
  .catch((e) => {
    console.error(e);
  });
