import express, { Router } from 'express';
import { EmployeeController } from '../controllers';
import { ControllerFactory } from '../factory';

const router: Router = express.Router();
const empCtrl = ControllerFactory.get(EmployeeController);

router.get('/', empCtrl.getAll.bind(empCtrl));
router.get('/:id', empCtrl.getOne.bind(empCtrl));
router.post('/', empCtrl.save.bind(empCtrl));

export default router;