"use strict";

const tailwindFormsPlugin = require("@tailwindcss/forms");
const tailwindTypographyPlugin = require("@tailwindcss/typography");
const velvetThunderTailwind = require("@velvet-thunder/tailwind");
const velvetThunderEmber = require("velvet-thunder-v2/tailwind");

module.exports = {
  content: [
    ...velvetThunderEmber.content(),
    "./app/components/**/*.{hbs,js}",
    "./app/templates/**/*.hbs",
    "./app/index.html",
    "./docs/**/*.md",
  ],
  darkMode: "class",
  plugins: [
    tailwindFormsPlugin({ strategy: "class" }),
    tailwindTypographyPlugin,
    velvetThunderTailwind.plugin(),
  ],
};
