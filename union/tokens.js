const StyleDictionary = require("style-dictionary").extend({
  source: ["styles/tokens/tokens.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "styles/tokens/",
      files: [
        {
          destination: "tokens.scss",
          format: "scss/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "styles/tokens/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
    },
    json: {
      transformGroup: "web",
      buildPath: "styles/tokens/",
      files: [
        {
          destination: "tokens-json.json",
          format: "json",
          name: "tokens",
        },
      ],
    },
  },
});

StyleDictionary.registerFormat({
  name: "json",
  formatter: function (dictionary, config) {
    return JSON.stringify(dictionary.properties, null, 2);
  },
});

StyleDictionary.buildAllPlatforms();
