import express from "express";
const router = express.Router();
import productController from '../controller/productController.js'


router.route('/')
.get(productController.findAll)
.post(productController.insertOne)



router.route('/:id')
.get(productController.findOne)
.put(productController.update)
.delete(productController.delete)

export default router;