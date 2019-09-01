const axios = require("axios");
const UserGit = require("../model/UserGit");

module.exports = {
  async store(req, res) {
    const { userName } = req.body;

    const userExist = await UserGit.findOne({login: userName})

    if(userExist){
      return res.json('User already did add!')
    }

    try {
      //busca pelo usuário no git
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      //pega os dados necessários retornados pela api do github
      const { login, bio, location, html_url, name } = response.data;
      
      
      //cadastra o usuário do git
      const userGit = await UserGit.create({
        nome: name,
        login: login,
        bio,
        localidade: location,
        html_url
      });
      return res.json(userGit);
    } catch (err) {
      //caso não exista o usuário, ele retorna uma mensagem
      return res.json("User not found!");
    }
  },

  //retornar um usuário
  async show(req, res) {
    const { userName } = req.params;

    try {
      //busca pelo usuário no git
      const response = await axios.get(
        `https://api.github.com/users/${userName}`
      );

      //pega os dados necessários retornados pela api do github
      const { login, bio, location, html_url, name } = response.data;
      return res.json(
        (user = {
          name,
          login,
          bio,
          location,
          html_url
        })
      );
    } catch (err) {
      //caso não exista o usuário, ele retorna uma mensagem
      return res.json("User not found!");
    }
  },

  //Retorna os usuários cadastrados do git
  async index(req, res) {
    const users = await UserGit.find();

    if (!users) {
      return res.json("Not found users!");
    }

    return res.json(users);
  }
};
