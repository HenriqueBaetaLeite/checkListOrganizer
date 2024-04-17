const router = require("express").Router();

const { login } = require("../controllers/loginController");

const {
  validateUserFieldsForLogin,
  validateEmail,
  validatePassword,
  sanitizeLogin,
  verifyEmailForLogin,
  verifyPasswordForLogin,
} = require("../controllers/middlewares/userMiddleware");

router.use(
  validateUserFieldsForLogin,
  sanitizeLogin,
  validateEmail,
  validatePassword,
  verifyEmailForLogin,
  verifyPasswordForLogin,
);

router.post("/", login);

module.exports = router;
