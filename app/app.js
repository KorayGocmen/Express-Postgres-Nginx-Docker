"use strict";

let Express = require("express");
let Path = require("path");
let Favicon = require("serve-favicon");
let Logger = require("morgan");
let CookieParser = require("cookie-parser");
let BodyParser = require("body-parser");

let Database = require("./middleware/database");

let indexController = require("./routes/index_controller");
let usersController = require("./routes/users_controller");

let sequelize = Database.Connect(true);

let app = Express();

// view engine setup
app.set("views", Path.join(__dirname, "views"));
app.set("view engine", "pug");

// uncomment after placing your Favicon in /public
//app.use(Favicon(Path.join(__dirname, "public", "favicon.ico")));
app.use(Logger("dev"));
app.use(BodyParser.json());
app.use(BodyParser.urlencoded({ extended: false }));
app.use(CookieParser());
app.use(Express.static(Path.join(__dirname, "public")));

app.use("/", indexController);
app.use("/users", usersController);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  let err = new Error("Not Found");
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
