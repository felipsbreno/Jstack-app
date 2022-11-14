import express from 'express';
import mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost:27017')
  .then(() => {
    const app = express();

    app.listen(3333, () => {
      console.log('🚀 Server is running in port 3333');
    });
  })
  .catch((error) => console.log('Error the connect in database: ' + error));
