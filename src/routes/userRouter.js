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
  validateToken,
} = require("../controllers/middlewares/tokenMiddleware.js");

router.post("/", createUser);

router.use(validateToken);

router.get("/", getAllUsers);

// router.use(getUserByIdMiddleware)

router.get("/:id",  getUserByIdMiddleware, getUserById);

router.put("/:id", getUserByIdMiddleware, updateUser);

router.delete("/:id", getUserByIdMiddleware, deleteUser);

module.exports = router;
