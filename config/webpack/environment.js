const { environment } = require('@rails/webpacker')
const { VueLoaderPlugin } = require('vue-loader')
const vue = require('./loaders/vue')

environment.plugins.prepend('VueLoaderPlugin', new VueLoaderPlugin())
environment.loaders.prepend('vue', vue)
module.exports = environment


/* eslint-disable */
const path = require('path')

// environment.plugins.prepend('Provide', require('./plugins/provide'))

// environment.plugins.append("ForkTsCheckerWebpackPlugin", require('./plugins/fork_ts_checker'))

// environment.loaders.prepend('pug', require('./loaders/pug'))

// environment.splitChunks()

environment.config.resolve.alias = {
  '@api':        path.resolve('app/javascript/api'),
  '@components': path.resolve('app/javascript/components'),
  '@utils':      path.resolve('app/javascript/utils'),
}

