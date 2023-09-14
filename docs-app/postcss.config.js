"use strict";

const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");
const { env } = require("node:process");
const postcssImport = require("postcss-import");
const tailwindcss = require("tailwindcss");
const tailwindcssNesting = require("tailwindcss/nesting");

const plugins = [
  postcssImport(),
  tailwindcssNesting(),
  tailwindcss(),
  autoprefixer(),
];

if (env.EMBER_ENV === "production") {
  plugins.push(cssnano());
}

module.exports = {
  plugins,
};
