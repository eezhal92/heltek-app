import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { errorHandler } from './middlewares/error';
import router from './routes';

const app = express();

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(router);
app.use(errorHandler);

export default app;
