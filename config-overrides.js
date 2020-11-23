const rewireAliases = require('react-app-rewire-aliases')
const { paths } = require('react-app-rewired')
const path = require('path')

/* config-overrides.js */
module.exports = function override(config, env) {
  config = rewireAliases.aliasesOptions({
    '@': path.resolve(__dirname, `${paths.appSrc}/`),
    '@store': path.resolve(__dirname, `${paths.appSrc}/store`),
    '@router': path.resolve(__dirname, `${paths.appSrc}/router/`),
    '@components': path.resolve(__dirname, `${paths.appSrc}/components/`),
    '@assets': path.resolve(__dirname, `${paths.appSrc}/assets/`),
    '@constants': path.resolve(__dirname, `${paths.appSrc}/constants/`),
    '@pages': path.resolve(__dirname, `${paths.appSrc}/pages/`),
    '@utils': path.resolve(__dirname, `${paths.appSrc}/utils/`),
    '@reducers': path.resolve(__dirname, `${paths.appSrc}/reducers/`),
    '@actions': path.resolve(__dirname, `${paths.appSrc}/actions/`),
    '@api': path.resolve(__dirname, `${paths.appSrc}/api/`),
    '@hoc': path.resolve(__dirname, `${paths.appSrc}/hoc/`),
  })(config, env)
  return config
}
