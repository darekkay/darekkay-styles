const tailwindPlugins = require("tailwindcss/lib/plugins/");
const customConfig = require("../../tailwind.config");

const availablePlugins = Object.keys(tailwindPlugins);
const definedPlugins = Object.keys(customConfig.corePlugins);

describe("tailwind config", () => {
  test.each(availablePlugins)(
    "defines default settings for %p",
    (availablePlugin) => {
      expect(definedPlugins).toContain(availablePlugin);
    }
  );
});
