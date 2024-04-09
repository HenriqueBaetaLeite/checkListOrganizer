const { User } = require('../database/models');

const getUsersService = async () => {
  const allUsers = await User.findAll();
  return allUsers;
};

module.exports = {
    getUsersService,
};
