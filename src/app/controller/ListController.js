const List = require("../model/List");
const User = require("../model/User");

module.exports = {

  //Criar uma lista
  async store(req, res) {
    const { _id } = req.params;
    const { nome } = req.body;

    //Verifica se já existe uma lista com esse nome para esse usuário
    try {
      const listExist = await List.findOne({ nome });
      if (listExist.user == _id) {
        return res.json("Already exist a list with this name to this user!");
      }
    } catch (err) {
      console.log("list not exist");
    }

    //verifica se o usuário existe
    try {
      const user = await User.findOne({ _id });
      //cria a lista
      const list = await List.create({ nome, user: user._id });

      return res.json(list);
    } catch (err) {
      return res.json("User not found!");
    }
  },

  //Retornar todas as listas criadas por um determinado usuário
  async index(req, res) {
    const { _id } = req.params;

    //verifica se o usuário e a lista existem
    try {
      const user = await User.findOne({ _id });
      const lists = await List.find({ user: user._id });


      if (!lists) {
        return res.json("Lists not found!");
      }

      return res.json(lists);
    }
    //caso a(s) lista(s) ou o usuário não exista, retorna uma mensagem informando 
    catch (err) {
      return res.json("Lists not found!");
    }
  },

  //Deletar uma lista de um determinado usuário
  async delete(req, res) {
    const { _id, nome } = req.body;

    //Verifica se a lista existe, se sim, remove,
    await List.findOne({ nome, user: _id })
      .then(list => {
        list.remove();
        return res.json("List was removed!");
      })
      .catch(erro => {
        return res.json("List not exist");
      });
  },

  //Atualizar uma lista
  async update(req, res) {
    const { _id, nome } = req.body;

    //verifica se o novo nome da lista existe
    if (!nome) {
      return res.json("Name is not valid");
    }

    //Verifica se a lista existe
    await List.findOne({ _id })
      .then(async list => {
        //atualiza e salva a lista
        list.nome = nome;
        await list.save();
        return res.json({ message: "List was update" });
      })

      //caso não encontre a lista, retorna uma mensagem informando
      .catch(() => {
        return res.json("List not found!");
      });
  }
};
