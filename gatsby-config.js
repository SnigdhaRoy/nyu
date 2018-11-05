const path = require('path')

module.exports = {
  siteMetadata: {
    name: '@lachlanjc @ nyu',
    siteUrl: 'https://nyu.lachlanjc.me'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        src: path.join(__dirname, 'src'),
        components: path.join(__dirname, 'src/components'),
        sections: path.join(__dirname, 'src/sections'),
        pages: path.join(__dirname, 'src/pages'),
        theme: path.join(__dirname, 'src/theme'),
        data: path.join(__dirname, 'src/data.json')
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: '@lachlanjc @ nyu',
        short_name: 'nyu',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#57068c',
        display: 'minimal-ui'
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    'gatsby-plugin-no-sourcemaps'
  ]
}
