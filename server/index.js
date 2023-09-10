const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("New course app server! V2"));
app.use("/admin", adminRouter);
app.use("/user", userRouter);

// Connect to MongoDB
// DONT MISUSE THIS THANKYOU!!
mongoose.connect(
  "mongodb+srv://shashwa7dev:srt123@cluster0.piqkefh.mongodb.net",
  { useNewUrlParser: true, useUnifiedTopology: true, dbName: "courses" }
);

app.listen(3000, () => console.log("Server running on port 3000"));
