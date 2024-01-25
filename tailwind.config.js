/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2563eb',
        secondary: '#3b82f6',

      },
      screens: {
        '2xl' : '1320px'
      }
    },
  },
  plugins: [],
}

