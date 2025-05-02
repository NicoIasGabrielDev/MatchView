/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{html,ts}",
    ],
    theme: {
      extend: {
        colors: {
          'brazil-green': '#009c3b',
          'brazil-yellow': '#ffdf00',
          'brazil-blue': '#002776',
        },
        fontFamily: {
          'game': ['Bangers', 'cursive'],
        }
      },
    },
    plugins: [],
  }