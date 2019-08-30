//carrega a biblioteca de rotas
const { Router } = require("express");

//carrega os controllers onde estão as regras de negócio da aplicação 
const UserController = require("./app/controller/UserController");
const SessionController = require("./app/controller/SessionController");
const UserGitController = require("./app/controller/UserGitController");
const ListController = require("./app/controller/ListController");
const UserGitListController = require("./app/controller/UserGitListController");

//inicializa as routas
const routes = new Router();

//rotas para cadastrar e retornar um usuário
routes.post("/user", UserController.store);
routes.get("/users", UserController.index);

//rotas para cadastrar e retornar um ou umas usuários git 
routes.post("/user/git", UserGitController.store);
routes.get("/user/:userName", UserGitController.show);
routes.get("/users/git", UserGitController.index);

//rotas para cadastrar, deletar, atualizar, e retornar as listas
routes.post("/list/:_id", ListController.store);
routes.get("/list/:_id", ListController.index);
routes.delete("/list", ListController.delete);
routes.put('/list', ListController.update)

//rota para adicinar um usuário git a uma lista criada
routes.post("/userGit/list", UserGitListController.store);

//rota para fazer o login e iniciar uma sessão
routes.post("/login", SessionController.store);

module.exports = routes;
