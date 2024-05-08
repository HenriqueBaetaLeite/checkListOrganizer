const { verifyToken } = require("../../services/tokenService");

const validateTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }
  const [bearerPattern, jwtToken] = token.split(" ");

  const userDecoded = verifyToken(jwtToken);

  if (bearerPattern !== "Bearer" || !userDecoded) {
    return res.status(401).json({ message: "Token is invalid" });
  }

  req.user = userDecoded;

  next();
};

module.exports = {
  validateTokenMiddleware,
};
