const { Item } = require('../database/models');

const getAllItemsService = async () => Item.findAll();

module.exports = {
  getAllItemsService,
};