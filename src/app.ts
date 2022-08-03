import express, { Application, Request, Response } from 'express';
import cors from 'cors';

import routes from './routes/app.routing';

const app: Application = express();
app.use(express.json());
app.use(cors());
const port: number = 3000;

app.listen(port, () => {
    console.log(`conncted successfully on port ${port}`);
    routes(app);
});