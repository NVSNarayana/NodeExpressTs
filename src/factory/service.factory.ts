import { EmployeeService, StudentService } from "../services";
import { AllServices } from "../services/all.services";

export class ServiceFactory {
    private static empSvc: EmployeeService = new EmployeeService();
    private static stuSvc: StudentService = new StudentService();

    static get<T extends AllServices>(TCtor: new (...args: any[]) => T): T {
       // return new TCtor();
       console.log("nain svc fac: ",  TCtor);

        switch (TCtor) {
            case EmployeeService:
                return <T>this.empSvc;
            case StudentService:
                return <T>this.stuSvc;
            default:
                return new TCtor();
        }
    }
}