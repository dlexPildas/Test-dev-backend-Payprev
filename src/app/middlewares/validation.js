const validarCpf = require("validar-cpf");
const emailValidator = require("email-validator");

module.exports = async (req, res, next) => {
  const { email, cpf, senha } = req.body;
  //verifica se a senha é válida
  if (senha.length <= 5) {
    return res.json("Passoword does not valid");
  }

  //verificar se o cpf é valido
  if (cpf) {
    if (!validarCpf(cpf)) {
      return res.json("CPF does not valid");
    }
  }

  //verifica se o email é valido
  if (!emailValidator.validate(email)) {
    return res.json("Email does not valid");
  }

  next();
};
