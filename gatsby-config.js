module.exports = {
  siteMetadata: {
    title: "Oanh Le",
  },
  plugins: ["gatsby-plugin-gatsby-cloud"],
  plugins: ["gatsby-plugin-postcss","gatsby-plugin-dark-mode",   {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `assets`,
      path: `${__dirname}/src/assets/`,
    },
  },],
};
