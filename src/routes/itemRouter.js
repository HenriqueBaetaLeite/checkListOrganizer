const router = require("express").Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");

const {
  findItemByIdMiddleware,
} = require("../controllers/middlewares/itemMiddleware");

router.post("/", createItem);

router.get("/", getAllItems);

router.use("/:id", findItemByIdMiddleware);

router.get("/:id", getItemById);

router.put("/:id", updateItem);

router.delete("/:id", deleteItem);

module.exports = router;
