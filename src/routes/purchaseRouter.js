import express from "express";
import purchaseController from "../controllers/purchaseController.js";
const router = express.Router();

router.route('/')
.get(purchaseController.getAll)
.post(purchaseController.insert)

router.route('/:id')
.get(purchaseController.getOne)


export default router;