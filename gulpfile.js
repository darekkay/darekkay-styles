const { series, parallel } = require("gulp");

const config = require("./config");

const clean = require("@darekkay/gulp/tasks/clean")(config);
const styles = require("@darekkay/gulp/tasks/styles")(config);
const content = require("@darekkay/gulp/tasks/content")(config);

const env = require("@darekkay/gulp/tasks/env")(config);

const build = series(env("production"), styles, content);

module.exports = { clean, build };
