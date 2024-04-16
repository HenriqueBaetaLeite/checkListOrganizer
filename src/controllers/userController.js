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

const getUserById = async (req, res, next) => {
  try {
    const { user } = req;
    return res.status(200).json(user);
  } catch (error) {
    return next(error);
  }
};

const createUser = async (req, res) => {
  const user = req.body;
  const newUser = await createUserService(user);
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
