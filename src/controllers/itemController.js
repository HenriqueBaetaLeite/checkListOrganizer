const { getAllItemsService } = require('../services/itemService');

const getAllItems = async (req, res) => {
  const items = await getAllItemsService();
  return res.status(200).json(items);
};

module.exports = {
  getAllItems,
};
