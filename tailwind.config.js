/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        darkPurple: 'rgba(18, 9, 26, 1)',
        grey: 'rgba(164, 155, 155, 1)',
        aura: 'rgba(0, 0, 0, 0.3)',
        lightPurple: 'rgba(164, 155, 155, 0.14)',
        claro: '#A49B9B',
        gray: {
          400: '#9CA3AF',
        },
        black: '#000000',
        grisoscuro: '#736d6d',
        yellow: {
          400: '#FBBF24',
        },
        brown: '#982E00',
        lightBrown: '#982E004D',
        blue: '#004F7B',
        lightBlue: '#004F7B4D',
        violet: '#400090',
        lightViolet: '#4000904D',
        green: '#0E6700',
        lightGreen: '#0E67004D',
        lightWhite: '#FFFFFF4D',
        darkWhite: '#a1a1a14D',
        lightBlack: '#0000004D',
        purpleTransparent: 'rgb(38, 30, 43)',
        whitecases: 'rgb(191, 185, 185)',
        orangecases: 'rgb(155, 93, 0)',
        greencases: 'rgb(2, 115, 0)',
      },
      fontFamily: {
        marcellus: ['Marcellus SC', 'serif'],
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      screens: {
        xs: { max: '450px' },
      },
      fontFamily: {
        sans: ['Marcellus SC', 'serif'],
      },
    },
  },
  darkMode: false,
  variants: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.scrollbar-thin': {
          scrollbarWidth: 'thin',
          scrollbarColor: 'rgba(31, 29, 29, 0.5) rgba(0, 0, 0, 0)',
        },
        '.scrollbar-webkit': {
          '&::-webkit-scrollbar': {
            width: '8px',
          },
          '&::-webkit-scrollbar-track': {
            background: 'white',
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: 'rgb(31, 41, 55)',
            borderRadius: '20px',
            border: '1px solid white',
          },
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}