"use strict";

const { join } = require("node:path");

const CONTENT_PATHS = ["src/components/**/*.hbs"];

module.exports = {
  content: () => CONTENT_PATHS.map((path) => join(__dirname, path)),
};
