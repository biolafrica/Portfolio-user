/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)'},
          '100%': { opacity: '1', transform: 'translateY(0)'},
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        slideDown: 'slideDown 0.2s ease-out',
        shimmer: 'shimmer 2s infinite',
        'loading-bar': 'loading-bar 1.5s ease-in-out infinite',
      },

    },
  },
  plugins: [],
}

