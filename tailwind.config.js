/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        goku: {
          dark: '#E15B0A', // Set dark background entirely to the requested E15B0A Orange
          navy: '#412A6B', // Mid purple
          indigo: '#452F7A', // Lighter purple
          plum: '#6B406D', // Muted purple
          orange: '#E15B0A', // NEW MAIN COLOR
          'orange-dark': '#C03F12', // Darker rust orange
          yellow: '#D8C5AD', // Sand/Beige color for accents
          'yellow-light': '#FFFFFF', // Keeping white for extreme highlights
          cyan: '#D8C5AD' // Replacing cyan with the sand color for consistency
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Anton', 'sans-serif'],
        accent: ['Oswald', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'goku-aura': 'radial-gradient(circle at 50% 50%, rgba(255, 94, 0, 0.2), #100b20 70%)'
      }
    },
  },
  plugins: [],
}
