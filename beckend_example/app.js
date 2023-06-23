const express = require("express");
const bodyParser = require("body-parser");
const SallonRouter = require("./routes/SallonRoutes");
const userRouter = require("./routes/userRoutes");

const app = express();

app.use(bodyParser.json());
app.use(express.json());

//Router
app.use("/api/Sallons", SallonRouter);

app.use("/api/users", userRouter);

module.exports = app;
