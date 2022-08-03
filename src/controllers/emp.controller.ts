import { Request, Response } from "express";
import { AppConstants } from "../models";
import { EmployeeService } from '../services';
import { ServiceFactory } from '../factory';
import { BaseController } from "./base.controller";

export class EmployeeController extends BaseController {
    empSvc: EmployeeService;
    constructor() {
        super();
        this.empSvc = ServiceFactory.get(EmployeeService);
    }

    getAll(req: Request, res: Response): void {
        return this.getJsonFile(AppConstants.jsonFileEmps, res);
    }

    getOne(req: Request, res: Response): void {
        if (isNaN(+req.params.id)) { return this.empSvc.idParamMissed(res); }
        const emps = this.empSvc.readFileAndGetEmps();
        const id = +req.params.id;
        if (!emps) { return this.empSvc.noEmpResponse(id, res); }

        const findById = emps.find(v => v.eno === id);
        if (!findById) { return this.empSvc.noEmpResponse(id, res); }
        res.send({ data: findById })
    }
};