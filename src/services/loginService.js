const { User } = require("../database/models");

const getEmailforLogin = async (email) => User.findOne({ where: { email } });

module.exports = {
  getEmailforLogin,
};
