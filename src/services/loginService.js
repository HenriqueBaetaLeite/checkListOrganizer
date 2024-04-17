const { User } = require("../database/models");

const getEmailforLogin = async (email) => {
  const user = await User.findOne({ where: { email } });
  return user;
};

module.exports = {
  getEmailforLogin,
};
