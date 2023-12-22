const corePlugins = require("tailwindcss/lib/corePluginList").default;
const customConfig = require("../../tailwind.config");

const customConfigPlugins = Object.keys(customConfig.corePlugins);

describe("tailwind config", () => {
  test("defines all core plugins", () => {
    const missingCorePlugins = corePlugins
      .map(
        (availablePlugin) =>
          !customConfigPlugins.includes(availablePlugin) && availablePlugin,
      )
      .filter(Boolean);
    expect(missingCorePlugins).toEqual([]);
  });

  test("doesn't define unknown/deprecated plugins", () => {
    const unknownPlugins = customConfigPlugins
      .map(
        (availablePlugin) =>
          !corePlugins.includes(availablePlugin) && availablePlugin,
      )
      .filter(Boolean);
    expect(unknownPlugins).toEqual([]);
  });
});
