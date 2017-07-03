"use strict";

let Express = require("express");
let Router = Express.Router();

/**
 * @api {get} /users Get Users
 * @apiName GetUsers
 * @apiGroup Users
 *
 *
 * @apiSuccess (200) {string} users
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *        "users"
 *     }
 *
 * @apiError (500) Error Internal-Server-Error.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 500
 */
Router.get("/", function (req, res, next) {
  res.send("users");
});

module.exports = Router;
