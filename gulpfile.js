const { gulp, tasks } = require("@darekkay/gulp");

const config = require("./config");
const { series, parallel } = gulp;
const { clean, styles, content, assets, env } = tasks(config);

const build = series(env("production"), styles, assets, content);

module.exports = { clean, build };
