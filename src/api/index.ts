import express from 'express';
import expressWs from 'express-ws';
import cors from 'cors';
import { logMiddleware } from '../middlewares/logMiddleWare';
import bodyParser from 'body-parser';

const app = expressWs(express()).app;

//Enable CORS
app.use(cors({ origin: true }));

//------------------Middlewares-------------------

app.use(logMiddleware);

//------------------------------------------------

app.use(bodyParser.json());



//-------------------HTTP api---------------------

const routes = express.Router();
require('./http/file').default(routes);


app.use('/api', routes);

//------------------------------------------------

export default app;
