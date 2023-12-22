const { readFileSync, readdirSync } = require("fs");
const { join } = require("path");

const logger = require("@darekkay/logger");

const themesFolder = join(__dirname, "..", "..", "..", "src", "themes");
const customPropertyRegex = /(--.*):/g;

const extractCustomProperties = (text) => {
  return text
    .match(customPropertyRegex)
    .map((customProperty) =>
      customProperty.substring(0, customProperty.length - 1),
    );
};

const defaultTheme = readFileSync(join(themesFolder, "_default.scss"), "utf-8");
const defaultCustomProperties = extractCustomProperties(defaultTheme);

const themeFiles = readdirSync(themesFolder).filter(
  (file) => !file.startsWith("_") && file.endsWith(".scss"),
);

let errorOccured = false;

themeFiles.forEach((themeFile) => {
  logger.info(`Checking ${themeFile} theme`);

  const theme = readFileSync(join(themesFolder, themeFile), "utf-8");
  const themeCustomProperties = extractCustomProperties(theme);

  // check if theme contains all custom properties defined in "_default.scss"
  defaultCustomProperties.forEach((defaultCustomProperty) => {
    if (!themeCustomProperties.includes(defaultCustomProperty)) {
      logger.error(
        `Theme ${themeFile} does not contain custom property ${defaultCustomProperty}`,
      );
      errorOccured = true;
    }
  });

  // check if theme introduces a custom property that is not defined in "_default.scss"
  themeCustomProperties.forEach((themeCustomProperty) => {
    if (!defaultCustomProperties.includes(themeCustomProperty)) {
      logger.error(
        `Theme ${themeFile} defines an unknown custom property ${themeCustomProperty}`,
      );
      errorOccured = true;
    }
  });

  // TODO: verify accessibility between certain value combinations, e.g. `--color-background-warning` and `--color-text-interaction`
});

if (errorOccured) {
  process.exit(1);
} else {
  logger.success("No theme issues found");
}
