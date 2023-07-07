/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      zIndex: {
        '999': '999',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      colors: {
        'regal-blue': '#9EAAC0',
        'someBlue': '#536079',
        'natBlue': '#11151D',
      },
      screens: {
        'sl': '1152px',
      },
    },
  },
  plugins: [],
}
