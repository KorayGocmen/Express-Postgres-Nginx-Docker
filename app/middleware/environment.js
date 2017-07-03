"use strict";

let IS_PRODUCTION = process.env.NODE_ENV === "production" ? true : false;

let DB_CONNECTION = process.env.DB_CONNECTION || "postgres://user:secure1@db/test_db";

module.exports = {
  IS_PRODUCTION,
  DB_CONNECTION
};
