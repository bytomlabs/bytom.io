module.exports = {
  siteMetadata: {
    title: `Bytom`,
    description: `A digital asset layer protocol is the infrastructure of asset Internet.`,
    author: `@bytom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `docs`,
        path: `${__dirname}/src/pages/docs`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Bytom`,
        short_name: `bytom`,
        start_url: `/`,
        icon: `src/images/logo2.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: 'gatsby-transformer-remark',
    //   options: {

    //   }
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
