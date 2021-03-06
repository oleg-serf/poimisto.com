const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Poimisto',
    address: 'Pirkkalaistie 1',
    zipCode: '37100',
    city: 'Nokia',
    vatNumber : 'FI28649557',
    mainNavigation: [
      { id: 0, title: 'Home', link: '/' },
      { id: 1, title: 'Contact Us', link: '/contact' },
      /*
      { id: 2, title: 'About Us', link: '/about' },
      */
    ],
  },
  plugins: [
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'Assets',
        path: path.join(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/,
        },
      },
    },
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          '@/components': 'src/components',
          '@/assets': 'src/assets',
          '@/utils': 'src/utils',
        },
        extensions: ['ts', 'tsx'],
      },
    },
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Anonymous Pro\:400,700,400i,700i`,
          `Lato\:300,400,700,300i,400i,700i`,
        ],
        display: 'swap',
      },
    },
  ],
}
