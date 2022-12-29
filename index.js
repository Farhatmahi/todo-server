const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 1000;

//mongoose
mongoose.set('strictQuery', true);
mongoose.connect(
  "mongodb+srv://farhatmahi:Farhat007@cluster0.6ulnnbw.mongodb.net/todo",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).then((result) => {
    console.log("DB connected")
}).catch((err) => {
    console.log("error : ", err)
});

//middleware
app.use(cors());
app.use(express.json())

//routers
const taskRoutes = require('./routes/taskRoutes');

app.use("/task", taskRoutes)

app.get("/", async(req, res) => {
    res.send("Todo server running")
})

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
})