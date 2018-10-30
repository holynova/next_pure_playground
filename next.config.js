const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withImages = require('next-images')
let config = {
  webpack: function (config) {
    return config
  },
  distDir: 'dist'
}
module.exports = withSass(
  withCss(
    withImages(
      config
    ))
);