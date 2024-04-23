const router = require("express").Router();
const {
  getAllCheckLists,
  getCheckListById,
  createCheckList,
  updateCheckList,
  deleteCheckList,
  getAllCheckListsComplete,
} = require("../controllers/checkListController");

const {
  getCheckListByIdMiddleware,
  validateCheckListFields,
} = require("../controllers/middlewares/checkListMiddleware");

router.get("/", getAllCheckLists);

router.get("/complete", getAllCheckListsComplete);

router.post("/", validateCheckListFields, createCheckList);

router.use("/:id", getCheckListByIdMiddleware);

router.get("/:id", getCheckListById);

router.put("/:id", validateCheckListFields, updateCheckList);

router.delete("/:id", deleteCheckList);

module.exports = router;
