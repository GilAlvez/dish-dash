import express from 'express';
import mongoose from 'mongoose';

const PORT = 3001;

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(3001, () => {
      console.log(`Running on http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e);
  });
