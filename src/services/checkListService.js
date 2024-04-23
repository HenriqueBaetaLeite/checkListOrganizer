const { where } = require("sequelize");
const { CheckList, User, Item, ItemCheckList } = require("../database/models");

const getAllCheckListsService = async () =>
  CheckList.findAll({ where: { public: true } });

const getAllCheckListsCompleteService = async () =>
  CheckList.findAll({
    where: { public: true },
    attributes: { exclude: ["id", "userId", "public"] },
    include: [
      { model: User, as: "user", attributes: { exclude: ["password"] } },
      {
        model: Item,
        as: "itemsList",
        through: { attributes: [] },
        attributes: { exclude: ["id", "completed"] },
      },
    ],
  });

const getCheckListByIdService = async (id) =>
  CheckList.findOne({ where: { id, public: true } });

const createCheckListService = async (checkList) => CheckList.create(checkList);

const updateCheckListService = async (id, checkList) =>
  CheckList.update(checkList, {
    where: { id },
  });

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
