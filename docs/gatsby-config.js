var path = require("path")

module.exports = {
  siteMetadata: {
    title: `Design With Union`,
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `${__dirname}/src/pages/`,
      },
    },
    // {
    //   resolve: "gatsby-plugin-page-creator",
    //   options: {
    //     path: path.resolve(__dirname, "../union/components"),
    //   },
    // },
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
        includePaths: ["../union/styles"],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          // posts: require.resolve("./src/components/posts-layout.js"),
          default: require.resolve("./src/components/Layout.jsx"),
        },
      },
    },
  ],
}
