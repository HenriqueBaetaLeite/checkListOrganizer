const { getUsersService } = require('../services/userService');

const getAllUsers = async (req, res) => {
  const users = await getUsersService();
    return res.status(200).json(users);
};

module.exports = {
    getAllUsers,
};
