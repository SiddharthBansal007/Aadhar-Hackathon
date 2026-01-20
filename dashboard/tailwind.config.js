/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Deep ocean palette for government/institutional feel
        primary: {
          50: '#e6f4f7',
          100: '#b3dde6',
          200: '#80c6d5',
          300: '#4dafc4',
          400: '#1a98b3',
          500: '#0d7a91',
          600: '#0a5f70',
          700: '#07444f',
          800: '#04292f',
          900: '#010e0f',
        },
        accent: {
          gold: '#d4a017',
          amber: '#f59e0b',
          coral: '#f97316',
          teal: '#14b8a6',
        },
        surface: {
          dark: '#0f1729',
          card: '#1a2744',
          hover: '#243352',
        }
      },
      fontFamily: {
        display: ['Outfit', 'system-ui', 'sans-serif'],
        body: ['DM Sans', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern': 'linear-gradient(to right, rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.03) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(ellipse at center, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(13, 122, 145, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(13, 122, 145, 0.5)' },
        }
      }
    },
  },
  plugins: [],
}
