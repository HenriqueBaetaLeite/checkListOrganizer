const { CheckList } = require("../database/models");

const getAllCheckListsService = async () =>
  CheckList.findAll({ where: { public: true } });

const getCheckListByIdService = async (id) =>
  CheckList.findOne({ where: { id, public: true } });

const createCheckListService = async (checkList) => CheckList.create(checkList);

const updateCheckListService = async (id, checkList) => {
  const [checkListUpdated] = await CheckList.update(checkList, {
    where: { id }
  });
  return checkListUpdated;
};
const deleteCheckListService = async (id) =>
  CheckList.destroy({
    where: { id }
  });

module.exports = {
  getAllCheckListsService,
  getCheckListByIdService,
  createCheckListService,
  updateCheckListService,
  deleteCheckListService,
};
