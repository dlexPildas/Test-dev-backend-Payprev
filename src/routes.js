const { Router } = require("express");

const UserController = require("./app/controller/UserController");
const SessionController = require("./app/controller/SessionController");
const UserGitController = require("./app/controller/UserGitController");
const ListController = require("./app/controller/ListController");
const UserGitListController = require("./app/controller/UserGitListController");

const routes = new Router();

routes.post("/user", UserController.store);
routes.get("/users", UserController.index);

routes.post("/user/git", UserGitController.store);
routes.get("/user/:userName", UserGitController.show);
routes.get("/users/git", UserGitController.index);

routes.post("/list/:_id", ListController.store);
routes.get("/list/:_id", ListController.index);
routes.delete("/list", ListController.delete);
routes.put('/list', ListController.update)

routes.post("/userGit/list", UserGitListController.store);

routes.post("/login", SessionController.store);

module.exports = routes;
