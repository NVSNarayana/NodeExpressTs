import { Request, Response } from "express";

export class BaseController {
    getJsonFile(filePath: string, res: Response) {
        res.header('Content-Type', 'application/json');
        res.sendFile(filePath);
    }

    save(req: Request, res: Response): void {
        res.send({ data: 'employee saved successfully' });
    }
}