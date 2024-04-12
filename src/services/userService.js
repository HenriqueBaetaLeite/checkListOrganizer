const { User } = require("../database/models");

const getUsersService = async () => User.findAll();

const getUserbyIdService = async (id) => User.findByPk(id);

const getUserByEmailService = async (email) =>
  User.findOne({
    where: {
      email,
    },
  });

const createUserService = async (user) => User.create(user);

const updateUserService = async (id, user) =>
  User.update(user, {
    where: {
      id,
    },
  });

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
};
