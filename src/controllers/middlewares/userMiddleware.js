const { getUserbyIdService } = require('../../services/userService');;

const getUserByIdMiddleware = async (req, res, next) => {
  const { id } = req.params;

  if (isNaN(id)) {
    return res.status(400).json({ message: "Invalid id parameter." });
  }

  const user = await getUserbyIdService(id);

  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }

  req.user = user.dataValues;

  next();
};

module.exports = {
  getUserByIdMiddleware,
};
