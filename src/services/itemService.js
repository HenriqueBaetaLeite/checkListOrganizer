const { Item, ItemCheckList } = require("../database/models");

const getAllItemsService = async () => Item.findAll();

const getItemByIdService = async (id) => Item.findByPk(id);

const createItemService = async (checkListId, item) => {
  const itemCreated = await Item.create(item);
  await ItemCheckList.create({
    checkListId,
    itemId: itemCreated.dataValues.id,
  });
  return itemCreated;
};

const updateItemService = async (id, item) =>
  Item.update(item, { where: { id } });

const deleteItemService = async (id) => Item.destroy({ where: { id } });

module.exports = {
  getAllItemsService,
  getItemByIdService,
  createItemService,
  updateItemService,
  deleteItemService,
};
