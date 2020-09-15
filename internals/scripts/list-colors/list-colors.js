/** Create a color palette preview out of the color definition file */

const { readFileSync, writeFileSync } = require("fs");
const { join } = require("path");

const _ = require("lodash");
const ejs = require("ejs");

const colorsFile = readFileSync(
  join(__dirname, "..", "..", "..", "src", "base", "colors.scss"),
  "utf-8"
);
const colorLinePattern = /\$((.*)-(\d{1,2})): ?(#[\da-f]{3,6});$/gim;
const colors = [];

let match;
while ((match = colorLinePattern.exec(colorsFile)) !== null) {
  colors.push([match[1], match[2], match[3], match[4]]);
}

const flattened = colors.reduce(
  (accumulator, color) => ({ ...accumulator, [color[0]]: color[3] }),
  {}
);

writeFileSync(
  join(__dirname, "..", "..", "..", "public", "color-palette.json"),
  JSON.stringify(flattened, null, 2)
);

const grouped = _.groupBy(
  colors,
  ([colorName, colorFamily, grade, color]) => colorFamily
);

const template = readFileSync(join(__dirname, "template.ejs"), "utf-8");
const output = ejs.render(template, { palette: grouped });

writeFileSync(
  join(__dirname, "..", "..", "..", "public", "color-palette.html"),
  output
);
