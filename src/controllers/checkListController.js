const {
  getAllCheckListsService,
  createCheckListService,
  updateCheckListService,
  deleteCheckListService,
} = require("../services/checkListService");

const getAllCheckLists = async (_req, res) => {
  const checkLists = await getAllCheckListsService();
  return res.status(200).json(checkLists);
};
const getCheckListById = async (req, res) => {
  const { checkList } = req;
  return res.status(200).json(checkList);
};

const createCheckList = async (req, res) => {
  const checkList = req.body;
  const newCheckList = await createCheckListService(checkList);
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
};
