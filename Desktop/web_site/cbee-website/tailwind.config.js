/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // This line is crucial
  ],
  theme: {
    extend: {
      fontFamily: { // Add Quicksand font family
        quicksand: ['Quicksand', 'sans-serif'],
      },
    },
  },
  plugins: [],
}