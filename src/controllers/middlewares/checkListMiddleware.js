const { getCheckListByIdService } = require("../../services/checkListService");

const findCheckListByIdMiddleware = async (req, res, next) => {
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

const validateCheckListFields = (req, res, next) => {
  const { title, public } = req.body;

  if (!title || public === undefined || typeof public !== "boolean") {
    return res.status(400).json({ message: "Invalid fields." });
  }

  next();
};

const sanitizeCheckListFields = (req, _res, next) => {
  const { title, public } = req.body;

  req.body = {
    public,
    title: title.trim(),
  };

  next();
};

const validateCheckListWithIdOwner = async (req, res, next) => {
  console.log(req.user, req.checkList);
  
  const userId = req.user.id;

  const checkListOwnerId = req.checkList.userId;

  if (userId !== checkListOwnerId) {
    return res.status(404).json({ message: "operação inválida!" });
  }

  next();
};

module.exports = {
  findCheckListByIdMiddleware,
  validateCheckListFields,
  sanitizeCheckListFields,
  validateCheckListWithIdOwner,
};
