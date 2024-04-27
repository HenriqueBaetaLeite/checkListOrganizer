const express = require("express");
const swaggerui = require("swagger-ui-express");
const swaggerDocument = require("../openapi.json");

const Sentry = require("@sentry/node");
const { nodeProfilingIntegration } = require("@sentry/profiling-node");

const loginRouter = require("./routes/loginRouter");
const userRouter = require("./routes/userRouter");
const checkListRouter = require("./routes/checkListRouter");
const itemRouter = require("./routes/itemRouter");

const errorMiddleware = require("./controllers/middlewares/errorMiddleware");

const app = express();
app.use(express.json());

Sentry.init({
  dsn: "https://1c571fdade872e9f01fc8066ee286116@o4507154534563840.ingest.us.sentry.io/4507154575982592",
  integrations: [
    // enable HTTP calls tracing
    new Sentry.Integrations.Http({ tracing: true }),
    // enable Express.js middleware tracing
    new Sentry.Integrations.Express({ app }),
    nodeProfilingIntegration(),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // Set sampling rate for profiling - this is relative to tracesSampleRate
  profilesSampleRate: 1.0,
});

app.use(Sentry.Handlers.requestHandler());

app.use(Sentry.Handlers.tracingHandler());

app.get("/health", (_req, res) =>
  res.status(200).json({ message: "API is working" })
);

app.use("/api/login", loginRouter);

app.use("/api/users", userRouter);

app.use("/api/checkList", checkListRouter);

app.use("/api/items", itemRouter);

app.use("/api/docs", swaggerui.serve, swaggerui.setup(swaggerDocument));

app.get('/err', (req, res) => {
  throw new Error('Sentry error test');
});

app.use(Sentry.Handlers.errorHandler());

app.use(errorMiddleware);

module.exports = app;
