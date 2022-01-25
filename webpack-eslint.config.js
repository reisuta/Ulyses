// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  resolve: {
    extensions: [
      '.vue', '.mjs',
      '.js', '.sass',
      '.scss', '.css',
      '.ts',
      '.module.sass', '.module.scss',
      '.module.css', '.png',
      '.svg', '.gif',
    ],
    alias: {
      '@api':        path.resolve('app/javascript/api'),
      '@components': path.resolve('app/javascript/components'),
      '@utils':      path.resolve('app/javascript/utils'),
    },
  },
}
