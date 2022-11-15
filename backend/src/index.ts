import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import { router } from './router';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(router);
    app.use(
      cors({
        origin: true,
      }),
    );

    app.listen(3332, () => {
      console.log('🚀 Server is running in port 3332');
    });
  })
  .catch((error) => console.log('Error the connect in database: ' + error));
