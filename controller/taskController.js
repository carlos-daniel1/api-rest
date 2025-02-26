import mongoose from "mongoose";
import taskModel from "../models/task.js";

const productController = {
  getAllTasks: async (req, res) => {
    try {
      const tasks = await taskModel.find();
      res.status(200).json(tasks);
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },

  createTask: async (req, res) => {
    const task = {
        title: req.body.title,
        finished: false
    }
    try {
      const response = taskModel.create(task);
      res.status(201).json({ msg: "Task Created!" });
    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Erro no servidor." });
    }
  },
};

export default productController;
