/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2B6C57",
        "primary-dark": "#00412C",
        "gray-bg": "#FCFCFC;"
      },
      fontFamily: {
        'fredoka': ['fredoka', 'sans-serif'],
        'nunito': ['nunito', 'sans-serif'],
        'sans': ['fredoka', 'sans-serif']
      },
      fontWeight: {
        bold: '600'
      }
    },
  },
  plugins: [],
}

