import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import morgan from 'morgan';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());

app.get('/', (req, res) => {
  res.send('URL shortner is running');
});

export default app;
