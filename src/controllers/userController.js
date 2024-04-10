const {
  getUsersService,
  getUserbyIdService,
  createUserService,
  updateUserService,
  deleteUserService,
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

const createUser = async (req, res) => {
  const user = req.body;
  const newUser = await createUserService(user);
  return res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  const updatedUser = await updateUserService(id, user);
  return res.status(200).json(updatedUser);
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await deleteUserService(id);
  return res.status(204).end();
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
};
