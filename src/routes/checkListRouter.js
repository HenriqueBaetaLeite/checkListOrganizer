const router = require("express").Router();
const {
  getAllCheckLists,
  getCheckListById,
  createCheckList,
  updateCheckList,
  deleteCheckList,
} = require("../controllers/checkListController");

const {
  getCheckListByIdMiddleware,
} = require("../controllers/middlewares/checkListMiddleware");

router.get("/", getAllCheckLists);

router.post("/", createCheckList);

router.get("/:id", getCheckListByIdMiddleware, getCheckListById);

router.put("/:id", getCheckListByIdMiddleware, updateCheckList);

router.delete("/:id", getCheckListByIdMiddleware, deleteCheckList);

module.exports = router;
