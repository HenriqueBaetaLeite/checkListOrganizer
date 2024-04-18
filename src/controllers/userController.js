const {
  getUsersService,
  createUserService,
  updateUserService,
  deleteUserService,
  hashPassword,
} = require("../services/userService");

const getAllUsers = async (req, res) => {
  const users = await getUsersService();
  return res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { user } = req;
  return res.status(200).json(user);
};

const createUser = async (req, res) => {
  const { email, password } = req.body;
  const passwordHashed = await hashPassword(password);
  const newUser = await createUserService({ email, password: passwordHashed });
  return res.status(201).json(newUser);
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const user = req.body;
  await updateUserService(id, user);
  return res.status(200).json({ id, ...user });
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  await deleteUserService(id);
  return res.status(204).end();
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
};
