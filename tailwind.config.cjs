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
        header: '42px 1fr 48px',
        screen: 'repeat(6, 1fr)',
        'bottom-nav': 'repeat(4, 1fr)',
        'top-nav': '24px 1fr 24px',
      },
      gridTemplateRows: {
        screen: '48px 1fr 48px',
      },
    },
  },
  plugins: [require('daisyui')],
};
