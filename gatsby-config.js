module.exports = {
  siteMetadata: {
    title: 'Portfolio',
    author: 'Sergio Vicente de las Heras',
    description: `Hi, I'm Sergio 👋 I'm a enthusiastic software engineer located in Madrid, Spain. I currently work as a full stack developer.`,
    siteUrl: 'https://echosergio.dev',
    social: {
      github: 'https://github.com/echosergio',
      linkedin: 'https://www.linkedin.com/in/echosergio',
    },
  },
  plugins: [
    'gatsby-plugin-styled-components',
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Courier Prime\:500,700`, `IBM Plex Mono\:500,700`],
        display: 'swap',
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/images/icon.png',
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-relative-images',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1920,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'echosergio',
        short_name: 'echosergio',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ffffff',
        display: 'minimal-ui',
        icon: './src/images/icon.png',
      },
    },
  ],
};
