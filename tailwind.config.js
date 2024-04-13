/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": "#141931",
        "dark-secondary": "#1F2743",
        "red-primary": "#FF6858",
        "yellow-primary": "#FFB72A",
        "purple": "#6D6BDC",
        "green": "#1ED1C5",
      },
    },
  },
  plugins: [],
}