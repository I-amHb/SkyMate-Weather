/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
          'custom': '0 4px 20px rgba(0, 0, 0, 0.1), 0 1px 20px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'nature': 'url(/assets/sky-1.jpeg) ',
      },
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}