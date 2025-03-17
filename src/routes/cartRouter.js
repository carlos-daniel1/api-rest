import express from "express";
import cartController from "../controllers/cartController";
const router = express.Router();

router.route('/')
.get(cartController.findAll)
.post(cartController.insert)

router.route('/:id')
.get(cartController.findOne)
.put(cartController.update)
.delete(cartController.delete)

export default router;