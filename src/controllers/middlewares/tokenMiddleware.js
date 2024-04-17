const { verifyToken } = require("../../services/tokenService");

const validateToken = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }
  const bearerToken = token.split(" ");

  // const isValidToken = verifyToken(bearerToken[1]);

  // if (bearerToken[0] !== "Bearer" || !isValidToken) {
  //   return res.status(401).json({ message: "Token is invalid" });
  // }

  // req.user = isValidToken;

  next();
};

module.exports = {
  validateToken,
};
