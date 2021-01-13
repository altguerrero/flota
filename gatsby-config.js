module.exports = {
  siteMetadata: {
    title: "Flota",
    description: "Webs Flota",
    author: "@altguerrero",
    siteUrl: "https://flota.com",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-transformer-cloudinary",
      options: {
        cloudName: "dng0a1ian",
        apiKey: "995125942981528",
        apiSecret: "a4l6vB7qpzFmFM7238edtiDBpjg",
        uploadFolder: "consolas-retro",
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`,
    //   },
    //},
    "gatsby-plugin-styled-components",
  ],
};
