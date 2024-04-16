const router = require("express").Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const {
  getItemByIdMiddleware,
} = require("../controllers/middlewares/itemMiddleware");

router.get("/", getAllItems);

router.get("/:id", getItemByIdMiddleware, getItemById);

router.post("/", createItem);

router.put("/:id", getItemByIdMiddleware, updateItem);

router.delete("/:id", getItemByIdMiddleware, deleteItem);

module.exports = router;
