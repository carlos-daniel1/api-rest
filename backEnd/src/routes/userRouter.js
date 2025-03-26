import express from "express";
const router = express.Router();
import userController from '../controllers/userController.js'

router.route('/login')
.post(userController.login)

router.route('/')
.get(userController.findAll)
.post(userController.insertOne)


router.route('/:id')
.get(userController.findOne)
.put(userController.update)
.delete(userController.delete)

export default router;