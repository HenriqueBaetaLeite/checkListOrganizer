const { getItemByIdService } = require('../../services/itemService');

const getItemByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid id parameter." });
  }

  const item = await getItemByIdService(id);

  if (!item) {
    return res.status(404).json({ message: "Item not found." });
  }

  req.item = item.dataValues;

  next();
}

const validateItemsFields = (req, res, next) => {
  const { name, description } = req.body;

  if (!name || !description) {
    return res.status(400).json({ message: "Invalid fields." });
  }

  next();
}

module.exports = {
  getItemByIdMiddleware,
  validateItemsFields,
};
