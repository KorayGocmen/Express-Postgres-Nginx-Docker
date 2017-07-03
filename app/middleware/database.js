"use strict";

let Sequelize = require("sequelize");
let Chalk = require("chalk");
let Environment = require("./environment");

let Connect = function (showMessage) {

  let sequelize;
  try {
    sequelize = new Sequelize(Environment.DB_CONNECTION);
  } catch (err) {
    console.log(err);
  }

  // Check the connection to the database
  if (showMessage) {
    sequelize.authenticate().then(function () {
      console.log("Environment: ", process.env.NODE_ENV);
      console.log(Chalk.green("Connection to database successfull"));
    }).catch(function () {
      console.log("Environment: ", process.env.NODE_ENV);
      console.log(Chalk.red("Unable to connect to the database"));
    });
  }

  return sequelize;
};

module.exports = {
  Connect
};
