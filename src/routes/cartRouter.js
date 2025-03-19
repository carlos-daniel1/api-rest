import express from "express";
import cartController from "../controllers/cartController.js";
const router = express.Router();

router.route('/')
.get(cartController.findAll)

router.route('/:id')
.get(cartController.findOne)
.put(cartController.update)


export default router;