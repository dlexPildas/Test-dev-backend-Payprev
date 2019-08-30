const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true
    },
    cpf: {
      type: Number,
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
