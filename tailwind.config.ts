import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 1990 Fleer-inspired palette
        sky: {
          DEFAULT: '#2ba6dc',
          light: '#5fc1ea',
          deep: '#1d8bbf',
        },
        red: {
          DEFAULT: '#d8232a',
          deep: '#a8181d',
        },
        cream: {
          DEFAULT: '#faf3e0',
          paper: '#f5ead0',
        },
        gold: {
          DEFAULT: '#d6a82e',
          deep: '#a8801f',
        },
        ink: {
          DEFAULT: '#0e0e0e',
          soft: '#1f1f1f',
        },
        navy: '#1a3866',
      },
      fontFamily: {
        display: ['Anton', 'sans-serif'],
        serif: ['"Yeseva One"', 'serif'],
        body: ['"Roboto Condensed"', 'sans-serif'],
        script: ['Pacifico', 'cursive'],
      },
      boxShadow: {
        'card-stack': '10px 10px 0 #0e0e0e, 10px 10px 0 4px #d6a82e',
        'card-sm': '6px 6px 0 #0e0e0e, 6px 6px 0 4px #d6a82e',
        'hard': '4px 4px 0 #0e0e0e',
        'hard-lg': '6px 6px 0 #0e0e0e',
        'gold': '4px 4px 0 #d6a82e',
        'gold-lg': '6px 6px 0 #d6a82e',
        'cta': '5px 5px 0 #d6a82e, 5px 5px 0 4px #0e0e0e',
      },
      animation: {
        'ticker': 'ticker 32s linear infinite',
        'wobble': 'wobble 4s ease-in-out infinite',
      },
      keyframes: {
        ticker: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        wobble: {
          '0%, 100%': { transform: 'rotate(12deg) scale(1)' },
          '50%': { transform: 'rotate(8deg) scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
