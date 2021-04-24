module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'primary': ['Montserrat'],
      'secondary': ['Playfair Display']
    },
    extend: {
      colors: {
        'dark-blue':'#262B46',
        'white':'#FFFFFF',
        'light-blue':'#6FC3DF',
        'purple':'#8D82C4',
        'red':'#EC8D81',
        'yellow':'#E7B788',
        'violet':'#8EA9E8',
        'green':'#87C5A4 '
      },
    },
  },
  variants: {
    extend: {},
  }, 
  plugins: [],
}
 