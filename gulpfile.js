const { gulp, tasks } = require("@darekkay/gulp");

const config = {
  paths: {
    assets: [
      {
        source: "src/fonts/nunito/**/*",
        destination: "dist/css/fonts",
      },
      {
        source: "public/assets/**/*",
        destination: "dist/assets",
      },
    ],

    destination: "dist",

    content: "public/**/*.html",

    styles: [
      {
        source: "src/_all.scss",
        destination: "dist/css",
        watch: "src",
      },
      {
        source: "src/vendor/highlightjs/_all.scss",
        destination: "dist/css",
        fileName: "highlightjs.css",
        watch: "src",
      },
      {
        source: "src/vendor/prismjs/_all.scss",
        destination: "dist/css",
        fileName: "prismjs.css",
        watch: "src",
      },
      {
        source: "src/vendor/tailwind/_all.scss",
        destination: "dist/css",
        fileName: "tailwind.css",
        watch: "src",
      },
    ],
  },

  postcssPlugins: ["tailwindcss", "autoprefixer"],
};

const { series } = gulp;
const { clean, styles, content, assets, env } = tasks(config);

const build = series(env("production"), styles, assets, content);

module.exports = { clean, build };
