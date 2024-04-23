const jwt = require("jsonwebtoken");

const options = {
  algorithm: "HS256",
  expiresIn: "1d",
};

const secret = process.env.SECRET;

const createToken = (payload) => jwt.sign(payload, secret, options);

const verifyToken = (token) => {
  try {
    const decode = jwt.verify(token, secret);
    return decode;
  } catch (error) {
    console.error(error.message);
    return false;
  }
};

module.exports = {
  createToken,
  verifyToken,
};
