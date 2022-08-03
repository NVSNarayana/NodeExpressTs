import { EmployeeModel, AppConstants } from "../models";
import fs from 'fs';
import { BaseService } from "./base.service";

export class EmployeeService extends BaseService {
    readFileAndGetEmps(): Array<EmployeeModel> | undefined {
        const strData = fs.readFileSync(AppConstants.jsonFileEmps, { encoding: 'utf8' });
        if (strData) {
            const jObj = JSON.parse(strData);
            const arr: Array<EmployeeModel> = jObj.employees;
            return arr;
        }
        return undefined;
    }
}