/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html', './**/*.js'],
  mode: 'jit',
  theme: {
    extend: {
      colors:{
        primary: '',
        button:'#87ceeb'
      },
      maxWidth: {
        '400': '110rem',
        '300': '1000px'
      },
      borderRadius:{
        '4xl':'36px'
      },
    },
  },
  plugins: [],
}
