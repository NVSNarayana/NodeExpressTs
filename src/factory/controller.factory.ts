import { EmployeeController, StudentController } from "../controllers";
import { AllControllers } from "../controllers/all.controllers";

export class ControllerFactory {
    private static empCtrl: EmployeeController;
    private static stuCtrl: StudentController;

    static get<T extends AllControllers>(TCtor: new (...args: any[]) => T): T {
        console.log("nain ctrl fac: ",  TCtor);
        // return new TCtor(); //or
        switch (TCtor) {
            case EmployeeController:
                if (!this.empCtrl) {
                    this.empCtrl = new EmployeeController();
                }
                return <T>this.empCtrl;
            case StudentController:
                if (!this.stuCtrl) {
                    this.stuCtrl = new StudentController();
                }
                return <T>ControllerFactory.stuCtrl;
            default:
                return new TCtor();
        }
    }
}