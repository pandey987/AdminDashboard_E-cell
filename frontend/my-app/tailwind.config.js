/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./public/index.html"],
  theme: {
    extend: {
      keyframes: {
        fall: {
          '0%': { transform: 'translateY(0rem)', TransitionEvent: 'opacity:10%' },
          // '50%': { transform: 'translateY(20rem)' },
          // '75%': { transform: 'translateY(18rem)' },
          '100%': { transform: 'translateY(20rem)', TransitionEvent: 'opacity:100%'}
        }
      },
      animation: {
        fall: 'fall 1s'
      }
    },
  },
  plugins: [],
}

