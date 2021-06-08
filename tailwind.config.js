module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens:{
        "f-96": "960px",
        "f-925": "925px",
        "f-575": "575px"
      },
      backgroundImage: theme=>({
        "bannerOneSide": "url('https://cdn.bannerflow.com/resources/mpu-1-8250e801-6290-485b-8185-bb4d092e65b8-102o12C.jpg')"
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
