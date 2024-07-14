module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        secondary: '#your-secondary-color', // Replace with your actual secondary color
        accent: '#your-accent-color', // Add any other custom colors if needed
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
