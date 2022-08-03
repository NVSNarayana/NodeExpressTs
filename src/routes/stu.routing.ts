import express, { Router } from 'express';
import { StudentController } from '../controllers';
import { ControllerFactory } from '../factory';

const router: Router = express.Router();
const stuCtrl = ControllerFactory.get(StudentController);

router.get('/', stuCtrl.getAll.bind(stuCtrl));
router.get('/:id', stuCtrl.getOne.bind(stuCtrl));
router.post('/', stuCtrl.save.bind(stuCtrl));

export default router;