import { Request, Response } from "express";
import { AppConstants } from "../models";
import { StudentService } from '../services';
import { ServiceFactory } from '../factory';
import { BaseController } from "./base.controller";

export class StudentController extends BaseController {
    stuSvc: StudentService;
    constructor() {
        super();
        this.stuSvc = ServiceFactory.get(StudentService);
    }

    getAll(req: Request, res: Response):void{
        return this.getJsonFile(AppConstants.jsonFileStus, res);
    }

    getOne(req: Request, res: Response) {
        if (isNaN(+req.params.id)) { return this.stuSvc.idParamMissed(res); }
        const emps = this.stuSvc.readFileAndGetEmps();
        const id = +req.params.id;
        if (!emps) { return this.stuSvc.noEmpResponse(id, res); }

        const findById = emps.find(v => v.sno === id);
        if (!findById) { return this.stuSvc.noEmpResponse(id, res); }
        res.send({ data: findById })
    }
};