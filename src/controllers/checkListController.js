const { getAllCheckLists } = require("../services/checkListService");

const getAll = async (_req, res) => {
  const checkLists = await getAllCheckLists();
  res.status(200).json(checkLists);
};

module.exports = {
  getAll,
};
