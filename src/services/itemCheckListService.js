const { ItemCheckList, Item } = require("../database/models");

const createItemCheckList = async (checkListId, tasks) => {
  await Promise.all(
    tasks.map((task) => ItemCheckList.create({ checkListId, itemId: task }))
  );
};

module.exports = {
  createItemCheckList,
};
