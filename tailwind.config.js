/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      fontFamily:{
        'playfair': ['Playfair Display', 'sans-serif'],
        'gilroy-bold': ['Gilroy-Bold', 'sans-serif'],
        'gilroy-medium': ['Gilroy-Medium', 'sans-serif'],
      },
      colors:{
        'primary':'#EB60A7',
        'secondary':'#5B53D1',
        'purple-light':'#938CFF',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

