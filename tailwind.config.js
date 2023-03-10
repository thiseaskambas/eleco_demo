const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    height: (theme) => ({
      auto: 'auto',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
    }),
    minHeight: (theme) => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      screen: 'calc(var(--vh) * 100)',
      screenNoNav: 'calc(var(--vh, 1vh) * 100 - 56px)',
    }),
    extend: {
      colors: {
        'light-primary-0': '#fe4091',
        'light-primary-1': '#fd3f4f',
        'light-primary-2': '#1d1d1d',
        'light-primary-3': '#ffbfc3',
        'light-primary-4': '#26DDFF',
        'light-primary-5': '#249CB3',
        'light-primary-6': '#FFEE59',
        'light-primary-7': '#B31B5D',
        'light-primary-8': '#3373FF',
        'light-primary-9': '#26FF2E',
        'light-primary-10': '#FFCD59',
        'light-primary-success': '#67D640',
        'light-primary-start': '#fd3fa8',
        'light-primary-end': '#fd3d4f',
        'dark-primary-0': '#21354a',
        'dark-primary-1': '#386e85',
        'dark-primary-2': '#853c81',
        'dark-primary-mid': '#7a4482',
      },
      fontFamily: {
        raleway: ['var(--raleway-font)', ...fontFamily.sans],
        merriweather: ['var(--merriweather-font)', ...fontFamily.serif],
        lato: ['var(--lato-font)', ...fontFamily.sans],
        poppins: ['var(--poppins-font)', ...fontFamily.sans],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
  variants: {
    // extend: {
    //   backgroundColor: ['even'],
    // },
  },
};
