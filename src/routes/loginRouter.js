const router = require("express").Router();

const { login } = require("../controllers/loginController");

const {
  sanitizeLogin,
  verifyEmailForLogin,
  verifyPasswordForLogin,
} = require("../controllers/middlewares/userMiddleware");

const {
  validateUserFields,
  validateEmail,
  validatePassword,
} = require("../controllers/middlewares/userFieldsMiddleware");

router.use(
  validateUserFields,
  sanitizeLogin,
  validateEmail,
  validatePassword,
  verifyEmailForLogin,
  verifyPasswordForLogin
);

router.post("/", login);

module.exports = router;
