const { Schema, model } = require("mongoose");

const UserGitSchema = new Schema(
  {
    login: {
      type: String,
      required: true
    },
    nome: {
      type: String,
      required: true
    },
    bio: {
      type: String,
      required: true
    },
    localidade: {
      type: String,
      required: true
    },
    html_url: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = model("UserGit", UserGitSchema);
