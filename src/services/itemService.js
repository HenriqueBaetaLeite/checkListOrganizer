const { Item } = require("../database/models");

const getAllItemsService = async () => Item.findAll();

const getItemByIdService = async (id) => Item.findByPk(id);

const createItemService = async (item) => Item.create(item);

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
