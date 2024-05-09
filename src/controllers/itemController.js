const {
  getAllItemsService,
  createItemService,
  updateItemService,
  deleteItemService,
} = require("../services/itemService");

const getAllItems = async (_req, res) => {
  const items = await getAllItemsService();
  return res.status(200).json(items);
};

const getItemById = async (req, res) => {
  const { item } = req;
  return res.status(200).json(item);
};

const createItem = async (req, res) => {
  const { checkListId, name, description } = req.body;
  const newItem = await createItemService(checkListId, { name, description });
  return res.status(201).json(newItem);
};

const updateItem = async (req, res) => {
  const { id } = req.params;
  const item = req.body;
  await updateItemService(id, item);
  return res.status(200).json({ id, ...item });
};

const deleteItem = async (req, res) => {
  const { id } = req.params;
  await deleteItemService(id);
  return res.status(204).end();
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
