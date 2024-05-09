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
  findCheckListByIdMiddleware,
  validateCheckListFields,
  sanitizeCheckListFields,
} = require("../controllers/middlewares/checkListMiddleware");

const { validateTokenMiddleware } = require('../controllers/middlewares/tokenMiddleware');

const checkListValidations = [validateCheckListFields, sanitizeCheckListFields];

router.use(validateTokenMiddleware);

router.get("/", getAllCheckLists);

router.get("/complete", getAllCheckListsComplete);

router.post("/", checkListValidations, createCheckList);

router.use("/:id", findCheckListByIdMiddleware);

router.get("/:id", getCheckListById);

router.put("/:id", checkListValidations, updateCheckList);

router.delete("/:id", deleteCheckList);

module.exports = router;
