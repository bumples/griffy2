 require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Bumples`,
    description: `Great kids books to read.`,
    author: `@gatsbyjs`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `dawlrnrnd2gl`,
        // Learn about environment variables: https://gatsby.app/env-vars
        accessToken: `36XlVTeALWMZTfLF8kIPknL1Zn89v2Z0gTGYOHkAVyc` 
        
        
      },
    },
    // {
    //   resolve: "gatsby-plugin-snipcart",
    //   options: {
    //     apiKey: process.env.SNIPCART_APIKEY,
    //     autopop: true,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
    },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
};
