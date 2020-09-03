module.exports = {
  purge: [],
  theme: {
    extend: {
      transitionProperty: {
        'width': 'width'
      }
    },
    inset: {
      'l-10': '10rem',
      't-10': '5rem'
    }
  },
  variants: {
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
  },
  plugins: [],
}
