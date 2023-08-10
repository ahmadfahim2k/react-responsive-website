/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    boxShadow: {
      'custom': '0 0 5px 1px rgba(0, 0, 0, 0.463)',
      'custom-inset': '0 5px 10px rgba(0, 0, 0, 0.268) inset',
    },
  },
  plugins: [],
}