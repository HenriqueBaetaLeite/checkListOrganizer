const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController.js");

const {
  getUserByIdMiddleware,
  verifyEmailForPost,
} = require("../controllers/middlewares/userMiddleware.js");

const {
  validateUserFields,
  validateEmail,
  validatePassword,
} = require("../controllers/middlewares/userFieldsMiddleware.js");

const {
  validateTokenMiddleware,
} = require("../controllers/middlewares/tokenMiddleware.js");

const fieldValidations = [validateUserFields, validateEmail, validatePassword];

router.post("/", fieldValidations, verifyEmailForPost, createUser);

router.use(validateTokenMiddleware);

router.get("/", getAllUsers);

router.use("/:id", getUserByIdMiddleware);

router.get("/:id", getUserById);

router.put("/:id", validateUserFields, updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
