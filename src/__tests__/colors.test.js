const { readFileSync } = require("fs");
const { join } = require("path");
const assert = require("assert").strict;

const onecolor = require("onecolor");

/** Returns an array of [grade, color] values for all available colors */
const colorsWithGrades = () => {
  const colorsFile = readFileSync(
    join(__dirname, "..", "base", "colors.scss"),
    "utf-8"
  );
  const colorLinePattern = /\$.*-(\d{1,2}): ?(#[\da-f]{3,6});$/gim;
  const colors = [];

  let match;
  while ((match = colorLinePattern.exec(colorsFile)) !== null) {
    colors.push([match[1], match[2]]);
  }
  return colors;
};

describe("colors", () => {
  it("should meet the USWDS contrast ratio criteria", () => {
    const colors = colorsWithGrades();
    colors.forEach(([grade1, color1]) => {
      colors.forEach(([grade2, color2]) => {
        if (grade1 > grade2) {
          return; // don't check the same ratio twice
        }

        const contrastRatio = onecolor(color1).contrast(onecolor(color2));

        if (Math.abs(grade1 - grade2) >= 40) {
          assert(
            contrastRatio >= 3,
            `Insufficient contrast ratio between ${color1} and ${color2}`
          );
        }

        if (Math.abs(grade1 - grade2) >= 50) {
          assert(
            contrastRatio >= 4.5,
            `Insufficient contrast ratio between ${color1} and ${color2}`
          );
        }

        if (Math.abs(grade1 - grade2) >= 70) {
          assert(
            contrastRatio >= 7,
            `Insufficient contrast ratio between ${color1} and ${color2}`
          );
        }
      });
    });
  });
});
