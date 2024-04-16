const { getCheckListByIdService } = require("../../services/checkListService");

const getCheckListByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid id parameter." });
  }

  const checkList = await getCheckListByIdService(id);

  if (!checkList) {
    return res.status(404).json({ message: "CheckList not found." });
  }

  req.checkList = checkList.dataValues;

  next();
};

module.exports = {
  getCheckListByIdMiddleware,
};
