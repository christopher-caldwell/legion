const withPlugins = require('next-compose-plugins')
const withOptimizedImages = require('next-optimized-images')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const withTM = require('next-transpile-modules')(['@caldwell619/component-toolkit'])

const handleBundleAnalyzer = config => {
  if (process.env.ANALYZE) {
    config.plugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        openAnalyzer: true,
      })
    )
  }
}

const nextConfig = {
  images: {
    disableStaticImages: true,
  },
  optimizeImages: false,
  trailingSlash: true,
  webpack: config => {
    handleBundleAnalyzer(config)
    return config
  },
}

module.exports = withPlugins([[withOptimizedImages], [withTM]], nextConfig)
