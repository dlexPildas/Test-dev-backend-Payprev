const { Schema, model } = require("mongoose");

//cria uma collection para a lista de usuários do git
const ListSchema = new Schema({
  nome: {
    type: String,
    required: true
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  usersGit: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "UserGit"
      },
      tag: {
        type: String,
        require: true
      }
    }
  ]
});

module.exports = model("List", ListSchema);
