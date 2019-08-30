const List = require("../model/List");
const UserGit = require("../model/UserGit");

module.exports = {
  //Adicionar um usuário git a lista
  async store(req, res) {
    const { _idList, _idUserGit, tag } = req.body;

    //Verifica se a lista existe
    await List.findOne({ _id: _idList })
      .then(async list => {

        //verifica se o usuário git existe
        await UserGit.findOne({_id: _idUserGit}).then( async userGit => {
          
          //caso a lista e o usuário git exista, adiciona o usuário git a lista
          list.usersGit.push({
            user: userGit._id,
            tag,
          })
          
          await list.save()
          
          return res.json(list)

        //caso o usuário não exista
        }).catch( err => {
          return res.json("User git not found!");  
        })
      })

      //caso a lista não exista
      .catch(err => {
        return res.json("List not found!");
      });
  }
};
