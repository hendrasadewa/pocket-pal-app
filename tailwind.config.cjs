/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['"Nunito Sans", sans-serif', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      gridTemplateColumns: {
        header: '25% 1fr 25%',
        screen: 'repeat(6, 1fr)',
        'bottom-nav': 'repeat(4, 1fr)',
      },
      gridTemplateRows: {
        screen: '48px 1fr 48px',
      },
    },
  },
  plugins: [require('daisyui')],
};
