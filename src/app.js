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

  middlewares() {
    this.server.use(express.json());
  }

  routes() {
    this.server.use(routes);
  }

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
