module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-cockpit',
      options: {
        cockpitConfig: {
          baseURL: 'http://development/Personal/gatsby-cockpit/cockpit', // the url to you cockpit installation
          accessToken: '5fbd100e0ae558966e4e42015a12ad', // you cockpit API key,
          collections: ['Pages'],
          regions: [],
          customComponents: [],
        },
      },
    },
  ],
}


