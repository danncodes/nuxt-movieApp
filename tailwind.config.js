module.exports = {
  mode: 'jit',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        theme: {
          primary: "#1D1D1D",
        }
      },
      fontFamily: {
        roboto: 'Roboto',
        cairo: 'Cairo'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
