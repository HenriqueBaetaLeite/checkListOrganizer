const bcrypt = require('bcryptjs');

const { User } = require("../database/models");

const SALTS = 10;

const getUsersService = async () =>
  User.findAll({ attributes: { exclude: ["password"] } });

const getUserbyIdService = async (id) =>
  User.findByPk(id, { attributes: { exclude: ["password"] } });

const getUserByEmailService = async (email) =>
  User.findOne({
    where: {
      email,
    },
    attributes: {
      exclude: ["password"],
    },
  });

const hashPassword = async (password) => bcrypt.hash(password, SALTS);

const createUserService = async (user) => User.create(user);

const updateUserService = async (id, user) => {
  const [userUpdated] = await User.update(user, {
    where: {
      id,
    },
  });
  return userUpdated;
};

const deleteUserService = async (id) =>
  User.destroy({
    where: {
      id,
    },
  });

module.exports = {
  getUsersService,
  getUserbyIdService,
  getUserByEmailService,
  createUserService,
  updateUserService,
  deleteUserService,
  hashPassword,
};
