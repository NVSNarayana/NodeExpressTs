import { Response } from "express"

export class BaseService {
    idParamMissed(res: Response) {
        res.send({ data: `Invalid id parameter passed` });
    }

    noEmpResponse(id: number, res: Response) {
        res.send({ data: `No employee found for id: ${id}` });
    }
}