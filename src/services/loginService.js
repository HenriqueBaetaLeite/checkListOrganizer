const bcrypt = require("bcryptjs");
const { User } = require("../database/models");

const SALTS = 10;

const getEmailforLogin = async (email) => User.findOne({ where: { email } });

module.exports = {
  getEmailforLogin,
};
