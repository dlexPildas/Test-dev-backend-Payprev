const User = require("../model/User");

module.exports = {
  //Cadastrar novo usuário
  async store(req, res) {
    //Pega os dados informados no corpo da requisição
    const { email, senha, cpf, admin } = req.body;

    //verifica se o usuário já foi cadastrado
    const userExist = await User.findOne({ email, cpf });
    if (userExist) {
      return res.json("User already exist!");
    }

    const user = await User.create({
      email,
      cpf,
      senha,
      admin
    });

    return res.json(user);
  },

  async index(req, res) {
    const users = await User.find();

    if (!users) {
      return res.json("Users not found!");
    }

    return res.json(users);
  }
};
