const express = require("express");
const mongoose = require("mongoose");

const routes = require("./routes");

class App {
  //construtor da classe
  constructor() {
    this.server = express(); 

    this.middlewares();
    this.routes();
    this.mongoose();
  }

  //middlewares da aplicação
  middlewares() {
    this.server.use(express.json());
  }

  //carrega as rotas da api
  routes() {
    this.server.use(routes);
  }

  //Comunidação com o banco de dados
  mongoose() {
    mongoose
      .connect("mongodb://localhost/dbPayprev", {
        useNewUrlParser: true
      })
      .then(() => {
        console.log("conectado!");
      });
  }
}

module.exports = new App().server;
