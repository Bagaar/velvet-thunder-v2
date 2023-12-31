"use strict";

const EmberApp = require("ember-cli/lib/broccoli/ember-app");

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    "ember-cli-babel": { enableTypeScriptTransform: true },
  });

  const { Webpack } = require("@embroider/webpack");
  return require("@embroider/compat").compatBuild(app, Webpack, {
    packagerOptions: {
      webpackConfig: {
        module: {
          rules: [
            {
              test: /\.css$/i,
              use: [{ loader: "postcss-loader" }],
            },
          ],
        },
      },
    },
  });
};
