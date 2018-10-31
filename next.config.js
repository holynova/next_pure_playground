const withSass = require('@zeit/next-sass')
const withCss = require('@zeit/next-css')
const withBundleAnalyzer = require('@zeit/next-bundle-analyzer')
const withImages = require('next-images')

const config = {

  //----------------------------
  analyzeServer: ['server', 'both'].includes(process.env.BUNDLE_ANALYZE),
  analyzeBrowser: ['browser', 'both'].includes(process.env.BUNDLE_ANALYZE),
  bundleAnalyzerConfig: {
    server: {
      analyzerMode: 'static',
      reportFilename: '../bundles/server.html'
    },
    browser: {
      analyzerMode: 'static',
      reportFilename: './bundles/client.html'
    }
  },
  webpack: function (config) {
    return config
  },
  //----------------------------

  distDir: 'dist'
}
// module.exports = withBundleAnalyzer(config)
module.exports =
  withBundleAnalyzer(
    withSass(
      withCss(
        withImages(
          config
        ))));