/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      animation:{
        wiggle: 'wiggle 100ms ease-in-out infinite',
        pulse2: 'pulse 800ms cubic-bezier(0.4, 0, 0.6, 1) infinite;',
        'drop-in': 'drop-in 1s ease-in-out 1000ms backwards',
    },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        'drop-in': {
          '0%': { opacity: 0, transform: 'translateY(-30px)'},
          '100%': { opacity: 1, transform: 'translate(0px)'},
        },
        pulse:{
          '0%, 100%': {
            opacity: 1
          },
          '50%': {
            opacity: 0
          }
        }
      }
    },
  },
  plugins: [],
}
