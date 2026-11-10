/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        tactical: {
          950: '#06090e',
          900: '#0c121d',
          850: '#111928',
          800: '#1a2436',
          700: '#27364f',
          gold: '#eab308',
          goldHover: '#ca8a04',
          emerald: '#10b981',
          crimson: '#ef4444',
          sky: '#0284c7'
        }
      }
    }
  },
  plugins: []
};