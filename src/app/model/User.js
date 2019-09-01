const { Schema, model } = require("mongoose");

//cria uma collection para o usuário
const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    cpf: {
      type: String,
      required: true
    },
    senha: {
      type: String,
      required: true
    },
    admin: {
      type: Boolean,
      default: false
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("User", UserSchema);
