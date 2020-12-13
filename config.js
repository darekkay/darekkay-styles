const { join } = require("path");

const path = (...arguments) => join(__dirname, ...arguments);

module.exports = {
  paths: {
    assets: {
      source: path("src", "fonts", "nunito"),
      destination: path("dist", "css", "fonts"),
    },

    destination: path("dist"),

    content: path("public") + "/**/*.html",

    styles: {
      source: path("src", "_all.scss"),
      destination: path("dist", "css"),
    },
  },
};
