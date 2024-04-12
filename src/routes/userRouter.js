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

router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:id", getUserByIdMiddleware, getUserById);

router.put("/:id", getUserByIdMiddleware, updateUser);

router.delete("/:id", getUserByIdMiddleware, deleteUser);

module.exports = router;
