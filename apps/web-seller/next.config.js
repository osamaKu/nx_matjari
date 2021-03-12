// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPlugins = require('next-compose-plugins')
const withNx = require('@nrwl/next/plugins/with-nx')
const nextTranslate = require('next-translate')

const nextConfig = {}

module.exports = nextTranslate(withNx())
