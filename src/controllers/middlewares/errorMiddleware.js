const errorMiddleware = (err, _req, res, _next) => {
  console.error("Stack:", err);
  console.error("Server running okay!");
  return res
    .status(500)
    .json({ message: `Internal server error. Error: ${err.message}` });
};

module.exports = errorMiddleware;
