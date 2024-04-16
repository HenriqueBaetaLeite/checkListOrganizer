const express = require("express");
const swaggerui = require('swagger-ui-express');
const swaggerDocument = require('../openapi.json');

const userRouter = require("./routes/userRouter");
const checkListRouter = require('./routes/checkListRouter');

const errorMiddleware = require('./controllers/middlewares/errorMiddleware');

const app = express();
app.use(express.json());

app.get("/health", (_req, res) => res.status(200).json({ message: "API is working" }));

app.use("/api/users", userRouter);

app.use("/api/checkList", checkListRouter);;

app.use("/api/docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

app.use(errorMiddleware);

module.exports = app;
