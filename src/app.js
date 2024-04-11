const express = require("express");
const swaggerui = require('swagger-ui-express');
const swaggerDocument = require('../openapi.json');

const userRouter = require("./routes/userRouter");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.status(200).json({ message: "API is working" });
});

app.use("/api/users", userRouter);

app.use("/api/docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

module.exports = app;
