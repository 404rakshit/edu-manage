/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./screen/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fade: "fade 1s ease-in-out infinite",
      },
      keyframes: {
        fade: {
          "0%, 100%": { opacity: '1' },
          "50%": { opacity: '0.6' },
        },
      },
    },
  },
  plugins: [],
};
