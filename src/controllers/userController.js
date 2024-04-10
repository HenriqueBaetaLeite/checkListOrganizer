const {
  getUsersService,
  getUserbyIdService,
} = require("../services/userService");

const getAllUsers = async (req, res) => {
  const users = await getUsersService();
  return res.status(200).json(users);
};

const getUser = async (req, res) => {
  const { id } = req.params;
  const user = await getUserbyIdService(id);
  return res.status(200).json(user);
};

module.exports = {
  getAllUsers,
  getUser,
};
