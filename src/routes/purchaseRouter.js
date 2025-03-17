import express from "express";
import purchaseController from "../controllers/purchaseController";
const router = express.Router();

router.route('/')
.get(purchaseController.getAll)
.post(purchaseController.insert)

router.route('/:id')
.get(purchaseController.getOne)
.put(purchaseController.update)
.delete(purchaseController.delete)

export default router;