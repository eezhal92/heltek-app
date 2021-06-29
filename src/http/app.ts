import path from 'path';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import swaggerUi from 'swagger-ui-express';
import YAML from 'yamljs';
import { errorHandler } from './middlewares/error';
import router from './routes';

const app = express();
const swaggerDocs = YAML.load(path.resolve(__dirname, '../../docs/swagger/swagger.yaml'));

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(router);
app.use(errorHandler);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs, {
  explorer: true,
}))

export default app;
