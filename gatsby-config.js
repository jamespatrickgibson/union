const path = require("path");

module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        includePaths: [path.resolve(__dirname, "../src/styles")]
      }
    }
  ]
};
