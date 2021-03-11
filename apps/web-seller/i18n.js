module.exports = {
  locales: ['en', 'ar', 'fr'],
  defaultLocale: 'en',
  pages: {
    '*': ['common'],
    '/about': ['about'],
    // 'rgx:^/more-examples': ['more-examples'],
  },
  interpolation: {
    prefix: '${',
    suffix: '}',
  },
  loadLocaleFrom: async (locale, namespace) => await import(`./locales/${locale}/${namespace}`).then((m) => m.default),
}