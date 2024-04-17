const { createToken  } = require("../services/tokenService");

const login = async (req, res) => {
  const { user } = req;

  const token = createToken(user);

  return res.status(200).json({ token });
};

module.exports = {
  login,
};
