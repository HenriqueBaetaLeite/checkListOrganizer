const { User } = require('../database/models');

const getUsersService = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

const getUserbyIdService = async (id) => {
  const user = await User.findByPk(id);
  return user;
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
