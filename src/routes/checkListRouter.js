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
  sanitizeCheckListFields,
} = require("../controllers/middlewares/checkListMiddleware");

const checkListValidations = [validateCheckListFields, sanitizeCheckListFields];

router.get("/", getAllCheckLists);

router.get("/complete", getAllCheckListsComplete);

router.post("/", checkListValidations, createCheckList);

router.use("/:id", getCheckListByIdMiddleware);

router.get("/:id", getCheckListById);

router.put("/:id", checkListValidations, updateCheckList);

router.delete("/:id", deleteCheckList);

module.exports = router;
