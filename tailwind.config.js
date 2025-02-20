/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#41B883',
        tertiary: '#E9C46A',
        quaternary: '#F43F5E',
      },
    },
  },
  plugins: [],
}
