const { User } = require("../database/models");

const getUsersService = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const getUserbyIdService = async (id) => {
  const user = await User.findByPk(id);
  if (!user) {
    return { statusCode: 404, payload: { message: "User not found." } };
  };
  return { statusCode: 200, payload: user };
};

const createUserService = async (user) => {
  const newUser = await User.create(user);
  return newUser;
};

const updateUserService = async (id, user) => {
  const updatedUser = await User.update(user, {
    where: {
      id,
    },
  });
  return updatedUser;
};

const deleteUserService = async (id) => {
  await User.destroy({
    where: {
      id,
    },
  });
};

module.exports = {
  getUsersService,
  getUserbyIdService,
  createUserService,
  updateUserService,
  deleteUserService,
};
