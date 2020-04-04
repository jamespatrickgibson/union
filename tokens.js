const StyleDictionary = require("style-dictionary").extend({
  source: ["src/styles/tokens/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "src/styles/tokens/",
      files: [
        {
          destination: "tokens.scss",
          format: "scss/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "src/styles/tokens/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
        },
      ],
    },
  },
});

StyleDictionary.buildAllPlatforms();
