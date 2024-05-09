const bcrypt = require("bcryptjs");

const { User } = require("../database/models");

const SALTS = 10;

const excludePassword = {
  attributes: { exclude: ["password"] },
};

const hashPassword = async (password) => bcrypt.hash(password, SALTS);

const getUsersService = async () => User.findAll(excludePassword);

const getUserByIdService = async (id) => User.findByPk(id, excludePassword);

const getUserByEmailService = async (email) =>
  User.findOne({
    where: {
      email,
    },
    excludePassword,
  });

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
  getUserByIdService,
  getUserByEmailService,
  createUserService,
  updateUserService,
  deleteUserService,
  hashPassword,
};
