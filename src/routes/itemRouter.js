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

router.post("/", createItem);

router.get("/", getAllItems);

router.use("/:id", getItemByIdMiddleware);

router.get("/:id", getItemById);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
