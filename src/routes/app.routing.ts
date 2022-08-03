import { Application, Request, Response } from "express";
import path from "path";
import empRoute from './emp.routing';
import stuRoute from './stu.routing';

// import {rou, emp} from './index';

function routes(app: Application) {
    app.get('/', (req: Request, res: Response) => {
        res.send('Hello!, This is express API');
    });

    app.get('/healthcheck', (req: Request, res: Response) => {
        res.sendStatus(200);
    });

    app.use('/api/employees', empRoute);
    app.use('/api/students', stuRoute);
}
export default routes;

