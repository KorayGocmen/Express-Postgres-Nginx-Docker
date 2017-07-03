"use strict";

let Express = require("express");
let Path = require("path");
let Router = Express.Router();
let Database = require("../middleware/database");

/**
 * @api {get} / Request Index Page
 * @apiName GetIndexPage
 * @apiGroup Index
 *
 *
 * @apiSuccess (200) page Index-Page
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *
 * @apiError (500) Error Internal-Server-Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500
 */
Router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = Router;
