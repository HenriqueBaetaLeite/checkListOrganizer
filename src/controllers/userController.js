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
    const { id } = req.params;
    const serviceResponse = await getUserbyIdService(id);
    return res.status(serviceResponse.statusCode).json(serviceResponse.payload);
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
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
