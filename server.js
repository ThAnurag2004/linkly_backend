import app from './app.js';
import mongoose from 'mongoose';
import 'dotenv/config';

const PORT = process.env.PORT;
const MONGO_URI = process.env.MONGO_URI;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('MongoDB connected successfully');
    app.listen(PORT, () => {
      console.log(`Server is up and listening on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Mongo connection error : ', err);
  });
