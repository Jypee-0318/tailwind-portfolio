/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        lightpurple: '#9B7EBD',  // Light purple color
        blow: '#4A628A'
      },
      animation: {
        moveRight: 'moveRight 2s ease-in-out infinite',
        moveLeft: 'moveLeft 2s ease-in-out infinite',
        'custom-bounce': 'custom-bounce 1s infinite',
        fadeIn: 'fadeIn 1s ease-out forwards',
        moveSide: 'moveSide 3s ease-in-out infinite',
        fadeIn: 'fadeIn 1.5s ease-out forwards',
        pulse: 'pulseSlow 2s infinite',
      },
      scrollBehavior: ['smooth'],
      boxShadow: {
        'custom': '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.9', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.05)' },
        },
        'custom-bounce': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        moveRight: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
        moveLeft: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
