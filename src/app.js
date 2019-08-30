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

  //Comunicação com o banco de dados
  mongoose() {
    mongoose
      .connect("mongodb+srv://userPayprev:0123456789@cluster0-op7mq.mongodb.net/payprevdb?retryWrites=true&w=majority", {
        useNewUrlParser: true
      })
      .then(() => {
        console.log("conectado!");
      }).catch(err => {
        console.log(err)
      });
  }
}

module.exports = new App().server;
