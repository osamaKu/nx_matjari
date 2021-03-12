module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--mt-font-sans)'],
        'heading-sans': ['var(--mt-font-heading-sans)']
      },
      colors: {
        secondary: 'var(--secondary)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
