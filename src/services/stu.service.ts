import { StudentModel, AppConstants } from "../models";
import fs from 'fs';
import { BaseService } from "./base.service";

export class StudentService extends BaseService {
    readFileAndGetEmps(): Array<StudentModel> | undefined {
        const strData = fs.readFileSync(AppConstants.jsonFileStus, { encoding: 'utf8' });
        if (strData) {
            const jObj = JSON.parse(strData);
            const arr: Array<StudentModel> = jObj.students;
            return arr;
        }
        return undefined;
    }
}