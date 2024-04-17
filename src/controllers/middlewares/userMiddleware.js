const { getUserbyIdService } = require("../../services/userService");

const getUserByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid id parameter." });
  }

  const user = await getUserbyIdService(id);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  req.user = user.dataValues;

  next();
};

const validateUserFieldsForLogin = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Email and password are required." });
  }
  next();
};

const validateEmail = (req, res, next) => {
  const { email } = req.body;

  if (typeof email !== "string") {
    return res.status(400).json({ message: "Email must be a string." });
  }

  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;

  if (!regex.test(email)) {
    return res.status(400).json({ message: "Invalid email format." });
  }

  next();
};

const validatePassword = (req, res, next) => {
  const { password } = req.body;

  if (typeof password !== "string") {
    return res.status(400).json({ message: "Password must be a string." });
  }

  if (password.length < 6) {
    return res
      .status(400)
      .json({ message: "Password must be at least 6 characters." });
  }

  next();
};

module.exports = {
  getUserByIdMiddleware,
  validateUserFieldsForLogin,
  validateEmail,
  validatePassword,
};
