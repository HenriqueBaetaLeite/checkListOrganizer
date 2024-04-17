const { User } = require('../database/models');

const loginService = async (email, password) => {
  const user = await User.findOne({ where: { email, password } });
  return user;
};

module.exports = {
  loginService,
};
