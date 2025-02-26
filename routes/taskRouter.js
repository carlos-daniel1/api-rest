import { Router } from 'express';
import taskController from '../controller/taskController.js'

const router = Router();

router.route('/')
.get(taskController.getAllTasks)
.post(taskController.createTask)


export default router;