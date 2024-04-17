const { loginService } = require("../services/loginService");

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await loginService(email, password);

  if (!user) {
    return res.status(401).json({ message: "Usuário não existe" });
  }
};

module.exports = {
  login,
};
