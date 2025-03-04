/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D946EF',   // Neon pink
        secondary: '#10B981', // Neon green
        accent: '#A78BFA'     // Lighter neon purple
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        header: ['Poppins', 'sans-serif']
      }
    }
  },
  plugins: []
}