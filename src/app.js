const express = require("express");
const swaggerui = require("swagger-ui-express");
const swaggerDocument = require("../openapi.json");
const rateLimit = require("express-rate-limit");

const loginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");
const checkListRouter = require("./routes/checkListRouter");
const itemRouter = require("./routes/itemRouter");

const errorMiddleware = require("./controllers/middlewares/errorMiddleware");

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

const app = express();
app.use(express.json());

app.use(limiter);

app.get("/health", (_req, res) => res.status(200).send("API is working"));

app.use("/api/login", loginRouter);

app.use("/api/users", userRouter);

app.use("/api/checkList", checkListRouter);

app.use("/api/items", itemRouter);

app.use("/api/docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

app.use(errorMiddleware);

module.exports = app;
