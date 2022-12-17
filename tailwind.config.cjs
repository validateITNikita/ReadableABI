/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "300px",
        md: "700px",
        lg: "1200px",
        xl: "1900px",
      },
      colors: {
        
      }

    },
  },
  plugins: [],
}