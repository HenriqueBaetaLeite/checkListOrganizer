const { ItemCheckList, Item } = require("../database/models");

const createItemCheckList = async (checkListId, tasks) => {
  await Promise.all(
    tasks.map((task) => ItemCheckList.create({ checkListId, itemId: task }))
  );
};

const removeItemCheckList = async (itemId, checkListId) => {
  await Item.destroy({ where: { itemId } });
  await ItemCheckList.destroy({ where: { itemId, checkListId } });
};

module.exports = {
  createItemCheckList,
  removeItemCheckList,
};
