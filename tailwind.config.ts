module.exports = {
  darkMode: "class", // ✅ must be 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#C5A059',
          50: '#fcfaf2',
          100: '#f7f1db',
          500: '#C5A059',
          600: '#b38d45',
          700: '#8c6e33',
        },
        secondary: {
          DEFAULT: '#708090',
          50: '#f8fafc',
          100: '#f1f5f9',
          500: '#708090',
          600: '#5c6c7c',
          700: '#4a5766',
        },
        'matte-charcoal': '#121212',
        'deep-slate': '#1B1B1B',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #C5A059 0%, #708090 100%)',
      }
    },
  },
  plugins: [],
}