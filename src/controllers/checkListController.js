const {
  getAllCheckListsService,
  createCheckListService,
  updateCheckListService,
  deleteCheckListService,
  getAllCheckListsCompleteService,
} = require("../services/checkListService");

const getAllCheckLists = async (_req, res) => {
  const checkLists = await getAllCheckListsService();
  return res.status(200).json(checkLists);
};

const getAllCheckListsComplete = async (req, res) => {
  const completeCheckLists = await getAllCheckListsCompleteService();
  return res.status(200).json(completeCheckLists);
};

const getCheckListById = async (req, res) => {
  const { checkList } = req;
  return res.status(200).json(checkList);
};

const createCheckList = async (req, res) => {
  const checkList = req.body;
  const userId = req.user.id;
  const newCheckList = await createCheckListService({ ...checkList, userId });
  console.log(newCheckList);
  return res.status(201).json(newCheckList);
};

const updateCheckList = async (req, res) => {
  const { id } = req.params;
  const checkList = req.body;
  await updateCheckListService(id, checkList);
  return res.status(200).json({ id, ...checkList });
};

const deleteCheckList = async (req, res) => {
  const { id } = req.params;
  await deleteCheckListService(id);
  return res.status(204).end();
};

module.exports = {
  getAllCheckLists,
  getCheckListById,
  createCheckList,
  updateCheckList,
  deleteCheckList,
  getAllCheckListsComplete,
};
