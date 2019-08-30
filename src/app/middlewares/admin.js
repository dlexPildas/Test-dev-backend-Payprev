const User = require("../model/User");

//verificar se o usuário é admin
module.exports = async (req, res, next) => {
  const { admin } = await User.findOne({ _id: req.userId }); //pega o atributo admin do usuário que está logado

  if (!admin) {
    //se não for admin, retorna mensagem informando que usuário não tem permissão
    return res.status(401).json("User dont have permission");
  }
  next();
};
