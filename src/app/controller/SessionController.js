const jwt = require("jsonwebtoken");
const User = require("../model/User");
const auth = require("../../config/auth");

module.exports = {
  async store(req, res) {
    const { email, senha } = req.body;

    //verifica se a senha é válida
    if (senha.length <= 5) {
      return res.json("Password does not valid")
    }

    const userExist = await User.findOne({ email, senha });

    //verifica se o usuário foi encontrado
    if (!userExist) {
      return res.json("User not found");
    }

    //retorna o usuário logado na sessão
    return res.json({
      user: {
        _id: userExist._id,
        email,
        senha
      },
      token: jwt.sign({ _id: userExist._id }, auth.secret, {
        expiresIn: auth.expiresIn
      })
    });
  }
};
