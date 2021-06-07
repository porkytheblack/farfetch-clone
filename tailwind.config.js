module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "f-96": "960px",
        "f-925": "925px"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
