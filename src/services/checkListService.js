const { CheckList, User, Item, ItemCheckList } = require("../database/models");

const getAllCheckListsService = async () =>
  CheckList.findAll({ where: { public: true } });

const getAllCheckListsCompleteService = async () =>
  CheckList.findAll({
    include: [
      // { model: User, as: "user", attributes: { exclude: ["password"] } },
      {
        model: Item,
        as: "itemsList",
        through: { attributes: ["itemId", "checkListId"] },
        attributes: { exclude: ["description", "completed"] },
      },
    ],
  });

const getCheckListByIdService = async (id) =>
  CheckList.findOne({ where: { id, public: true } });

const createCheckListService = async (checkList) => CheckList.create(checkList);

const updateCheckListService = async (id, checkList) => {
  const [checkListUpdated] = await CheckList.update(checkList, {
    where: { id },
  });
  return checkListUpdated;
};
const deleteCheckListService = async (id) =>
  CheckList.destroy({
    where: { id },
  });

module.exports = {
  getAllCheckListsService,
  getCheckListByIdService,
  createCheckListService,
  updateCheckListService,
  deleteCheckListService,
  getAllCheckListsCompleteService,
};
