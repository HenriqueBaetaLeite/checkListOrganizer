const { CheckList } = require('../database/models');

const getAllCheckLists = async () => CheckList.findAll();

module.exports = {
  getAllCheckLists,
};
