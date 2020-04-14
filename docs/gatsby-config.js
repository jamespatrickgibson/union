/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
module.exports = {
  siteMetadata: {
    title: `Design With Union`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
        includePaths: ["../union/styles"],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/default-page-layout.js"),
        },
      },
    },
  ],
};
