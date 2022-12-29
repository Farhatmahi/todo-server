const express = require("express");
const router = express.Router();
const TaskSchema = require("../models/taskModel");

router.post("/", async (req, res) => {
  try {
    const {email, task, time} = req.body
    const newTask = new TaskSchema({email, task, time});
    await newTask.save();
    res.send(newTask);
  } catch (err) {
    console.log(err);
  }
});

//all the uncompleted task
router.get("/", async (req, res) => {
  try {
    const result = await TaskSchema.find({completed : false});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

//all the completed task
router.get("/completed-tasks", async (req, res) => {
  try {
    const result = await TaskSchema.find({completed : true});
    res.send(result);
  } catch (err) {
    console.log(err);
  }
});

//update to complete
router.put('/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const body = req.body;
    console.log(body);
    const data = await TaskSchema.findByIdAndUpdate(id, body)
    res.send(data)
  }catch(err){}
})





router.delete('/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const result = await TaskSchema.deleteOne({id})
    res.send(result)
  }catch(err){}
})



module.exports = router;
