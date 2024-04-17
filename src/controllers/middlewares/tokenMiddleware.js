const verifyToken = (req, res, next) => {
  const token = req.header.authorization;
  if (!token) {
    return res.status(401).json({ message: "Token is required" });
  }
  next();
};
verifyToken;

const validateToken = (req, res, next) => {
  const token = req.header.authorization;
  const bearerToken = token.split(" ");

  if (bearerToken[0] !== "Bearer") {
    return res.status(401).json({ message: "Token is invalid" });
  }

  next();
};

module.exports = {
  verifyToken,
  validateToken,
};
