const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    email : {type : String, trim : true, required : true},
    task: { type: String, trim: true , required : true },
    time: { type: String, trim: true, required : true },
    completed : {type : Boolean, default : false}
  },
  {
    timeStamps: true,
  }
);

const TaskSchema = new mongoose.model("Task", taskSchema);
module.exports = TaskSchema ;
