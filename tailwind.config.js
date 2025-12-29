/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Theme Override: Black & Neon
        slate: {
          950: '#000000', // Pure Black Background
          900: '#0a0a0a', // Slightly lighter for cards
          800: '#1f1f1f', // Borders
          ...require('tailwindcss/colors').slate,
        },
        emerald: {
          ...require('tailwindcss/colors').emerald,
          400: '#00FF94', // Neon Green Primary
          500: '#00DC82', // Darker Neon
        },
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
