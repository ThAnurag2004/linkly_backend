import express from 'express';
import 'dotenv/config';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';
import linkRoutes from './src/routes/Link.route.js';

const app = express();

app.use(express.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use('/', linkRoutes);

export default app;
