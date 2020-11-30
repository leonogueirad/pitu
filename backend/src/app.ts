import express from 'express';
import linksRouter from './routes/links';
import cors from 'cors';

// cria aplicação express
const app = express();

// define utilização do json
app.use(express.json());

// vincula o cors na aplicação
app.use(cors());

// rotas de links
app.use(linksRouter);

export default app;