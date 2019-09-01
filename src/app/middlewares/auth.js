const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");
const { promisify } = require("util");

//Verificar se o token do usuário é válido
module.exports = async (req, res, next) => {
  const authHeaders = req.headers.authorization; //Pega o token


  if (!authHeaders) { //caso não exista o token
    return res.status(401).json({ error: "Token not provided!" }); //retorna uma mensagem informando
  }

  //pega apenas o token
  const [, token] = authHeaders.split(" "); //

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret);
    req.userId = decoded._id;

    return next();
  } catch (err) {
    return res.status(401).json({ error: "token invalid" });
  }
};
