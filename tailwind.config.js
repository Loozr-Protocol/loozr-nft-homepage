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
        "muted": "#536079",
        "muted-50": "#222A3B",
        "loozr-purple": "#8369F4",
        "loozr-green": "#15FFAB",
        "dark-900": "#0C0F15",
        "dark-800": "#12161F",
        "dark-700": "#141922",
        "white-40": "rgba(255, 255, 255, 0.4)",
      },
      screens: {
        'sl': '1152px',
      },
      backgroundImage: {
        "gradient-ld":
          "linear-gradient(180.44deg, #8369F4 27.17%, #F039E2 156.68%)",
        "gradient-ldd":
          "linear-gradient(180.44deg, rgba(131, 105, 244, 0.4) 27.17%, rgba(240, 57, 226, 0.4) 156.68%)",
        "s-gradient":
          "linear-gradient(180deg, #8369F4 27.69%, #F039E2 178.46%)",
      },
      fontSize: {
        label: ["3.5rem", 1],
      },
    },
  },
  plugins: [],
}
