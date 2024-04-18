const bcrypt = require('bcryptjs');
const { User } = require("../database/models");

const SALTS = 10

const getEmailforLogin = async (email) => User.findOne({ where: { email } });

const hashPassword = async (password) => {
  const hashedPassword = await bcrypt.hash(password, SALTS);
  return hashedPassword;
}

module.exports = {
  getEmailforLogin,
  hashPassword,
};
