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
} = require("../controllers/middlewares/userMiddleware.js");

const {
  validateTokenMiddleware,
} = require("../controllers/middlewares/tokenMiddleware.js");

router.post("/", createUser);

router.use(validateTokenMiddleware);

router.get("/", getAllUsers);

router.use("/:id", getUserByIdMiddleware);

router.get("/:id", getUserById);

router.put("/:id", updateUser);

router.delete("/:id", deleteUser);

module.exports = router;
