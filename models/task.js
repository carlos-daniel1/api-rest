import mongoose from "mongoose";
import autoIncrement from "mongoose-sequence";

const { Schema } = mongoose;

const incrementID = autoIncrement(mongoose);

const taskSchema = new Schema({
  title: { type: String, required: true },
  finished: Boolean,
});

taskSchema.plugin(incrementID, { inc_field: "taskID" });

const Task = mongoose.model("Task", taskSchema)

export default Task;
