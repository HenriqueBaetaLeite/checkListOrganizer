const bcrypt = require("bcryptjs");

const {
  getUserByIdService,
  getUserByEmailService,
} = require("../../services/userService");

const { getEmailforLogin } = require("../../services/loginService");

const findUserByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid id parameter." });
  }

  const user = await getUserByIdService(id);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  req.user = user.dataValues;

  next();
};

const sanitizeLogin = async (req, _res, next) => {
  const email = req.body.email.trim();
  const password = req.body.password.trim();

  req.login = { email, password };

  next();
};

const verifyEmailForLogin = async (req, res, next) => {
  const { email } = req.login;

  const user = await getEmailforLogin(email);

  if (!user) {
    return res.status(401).json({ message: "Incorrect email or password." });
  }

  req.user = user.dataValues;

  next();
};

const verifyPasswordForLogin = async (req, res, next) => {
  const { password } = req.login;
  const { password: userPassword } = req.user;

  const isValidPassword = await bcrypt.compare(password, userPassword);

  if (!isValidPassword) {
    return res.status(400).json({ message: "Incorrect password!" });
  }

  next();
};

const verifyEmailForPost = async (req, res, next) => {
  const { email } = req.body;

  const userExists = await getUserByEmailService(email);

  if (userExists) {
    return res.status(400).json({ message: "User already exists!" });
  }

  next();
};

module.exports = {
  findUserByIdMiddleware,
  sanitizeLogin,
  verifyEmailForLogin,
  verifyPasswordForLogin,
  verifyEmailForPost,
};
