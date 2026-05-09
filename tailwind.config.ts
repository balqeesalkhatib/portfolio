import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',          // ← class-based, not media query
  theme: {
    extend: {
      fontFamily: {
        display: ['"Clash Display"', 'sans-serif'],
        body: ['"Cabinet Grotesk"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        // Brand palette
        brand: {
          50:  '#f0f4ff',
          100: '#e0eaff',
          200: '#c7d7fe',
          300: '#a5bbfd',
          400: '#8193fb',
          500: '#6366f1',   // ← primary
          600: '#4f46e5',
          700: '#4338ca',
          800: '#3730a3',
          900: '#312e81',
        },
        // Accent — electric teal
        accent: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
        // Surface colors — used for glass cards
        surface: {
          light: 'rgba(255, 255, 255, 0.6)',
          dark:  'rgba(15, 15, 30, 0.6)',
        }
      },
      backdropBlur: {
        xs:  '2px',
        sm:  '8px',
        md:  '16px',
        lg:  '24px',
        xl:  '40px',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'mesh-light': `
          radial-gradient(at 40% 20%, hsla(240,100%,74%,0.3) 0px, transparent 50%),
          radial-gradient(at 80% 0%,  hsla(189,100%,56%,0.2) 0px, transparent 50%),
          radial-gradient(at 0%  50%, hsla(355,100%,93%,0.2) 0px, transparent 50%)
        `,
        'mesh-dark': `
          radial-gradient(at 40% 20%, hsla(263,90%,51%,0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%,  hsla(189,100%,56%,0.1) 0px, transparent 50%),
          radial-gradient(at 0%  50%, hsla(355,100%,93%,0.05) 0px, transparent 50%)
        `,
      },
      animation: {
        'float':      'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'gradient':   'gradient 8s ease infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-20px)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [],
} satisfies Config
