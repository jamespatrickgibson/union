const StyleDictionary = require("style-dictionary").extend({
  source: ["src/styles/tokens/*.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "src/styles/tokens/",
      files: [
        {
          destination: "tokens.scss",
          format: "scss/variables"
        }
      ]
    },
    css: {
      transformGroup: "css",
      buildPath: "src/styles/tokens/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables"
        }
      ]
    },
    json: {
      transformGroup: "web",
      buildPath: "src/styles/tokens/",
      files: [
        {
          destination: "tokens-json.js",
          format: "javascript/object",
          name: "tokens"
        }
      ]
    }
  }
});

StyleDictionary.buildAllPlatforms();
