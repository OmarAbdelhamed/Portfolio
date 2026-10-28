/* eslint-disable no-undef */
/*eslint-env node*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        surface: '#050505',
        intro: '#0b0b0b',
        accent: '#2b5cff',
        'accent-hover': '#2748a1',
        'accent-soft': '#3e5cfb',
        line: '#ffffff1a',
        'line-strong': '#ffffff40',
        muted: '#71717b',
      },
      fontFamily: {
        heading: ['Tanker', 'Arial', 'sans-serif'],
        body: ['"Space Grotesk"', 'Arial', 'sans-serif'],
      },
      maxWidth: {
        container: '82rem',
      },
      screens: {
        xs: '480px',
      },
    },
  },
  plugins: [],
};
