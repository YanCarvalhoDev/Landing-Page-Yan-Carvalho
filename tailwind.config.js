/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'neon-cyan': '#00FFFF',
        'neon-blue': '#0080FF',
        'dark-gray': '#1a1a1a',
        'darker-gray': '#0d0d0d',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { 
            'text-shadow': '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff',
            'box-shadow': '0 0 5px #00ffff'
          },
          '100%': { 
            'text-shadow': '0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff',
            'box-shadow': '0 0 10px #00ffff, 0 0 20px #00ffff'
          }
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
};