const { join } = require("path");

const path = (...arguments) => join(__dirname, ...arguments);

module.exports = {
  paths: {
    destination: path("dist"),

    content: path("public") + "/**/*.html",

    styles: {
      source: path("src", "_all.scss"),
      destination: path("dist", "css"),
    },
  },
};
