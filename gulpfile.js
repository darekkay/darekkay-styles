const { join } = require("path");
const { gulp, tasks } = require("@darekkay/gulp");

const path = (...arguments) => join(__dirname, ...arguments);

const config = {
  paths: {
    assets: {
      source: path("src", "fonts", "nunito"),
      destination: path("dist", "css", "fonts"),
    },

    destination: path("dist"),

    content: path("public") + "/**/*.html",

    styles: [
      {
        source: path("src", "_all.scss"),
        destination: path("dist", "css"),
        watch: path("src"),
      },
      {
        source: path("src", "vendor", "highlightjs", "_all.scss"),
        destination: path("dist", "css"),
        fileName: "highlightjs.css",
        watch: path("src"),
      },
      {
        source: path("src", "vendor", "prismjs", "_all.scss"),
        destination: path("dist", "css"),
        fileName: "prismjs.css",
        watch: path("src"),
      },
    ],
  },
};

const { series } = gulp;
const { clean, styles, content, assets, env } = tasks(config);

const build = series(env("production"), styles, assets, content);

module.exports = { clean, build };
