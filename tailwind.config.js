/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.jsx', './src/**/**/*.jsx'],
  theme: {
    extend: {
      colors: {
        primaryColor: '#2ADACB',
        secondaryColor: '#B80BF4',
        primaryDark: '#050910',
        secondaryDark: '#383b56',
      },
      height: {
        '10cx': '8%',
        '90cx': '92%',
      },
    },
  },
  plugins: [],
};
