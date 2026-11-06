/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        diwali: {
          midnight: '#080611',
          royal: '#160D2B',
          violet: '#29113D',
          gold: '#D9A441',
          champagne: '#FFE2A0',
          orange: '#FF9B32',
          ivory: '#FFF2D6',
          deepGlow: '#4A154B',
          cardBg: 'rgba(26, 14, 46, 0.55)',
          cardBorder: 'rgba(217, 164, 65, 0.35)',
        }
      },
      fontFamily: {
        serif: ['"Cinzel Decorative"', '"Cinzel"', '"Playfair Display"', 'Georgia', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        script: ['"Great Vibes"', '"Alex Brush"', 'cursive'],
        body: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'diya-glow': '0 0 35px rgba(255, 155, 50, 0.55), 0 0 80px rgba(217, 164, 65, 0.3)',
        'gold-glow': '0 0 25px rgba(217, 164, 65, 0.45)',
        'card-glow': '0 10px 40px -10px rgba(8, 6, 17, 0.8), 0 0 25px rgba(217, 164, 65, 0.15)',
        'card-hover': '0 15px 50px -5px rgba(8, 6, 17, 0.9), 0 0 35px rgba(255, 180, 70, 0.35)',
      },
      animation: {
        'flicker': 'flicker 2.5s infinite ease-in-out',
        'float-slow': 'float 7s infinite ease-in-out',
        'float-medium': 'float 5s infinite ease-in-out',
        'float-fast': 'float 3.5s infinite ease-in-out',
        'pulse-glow': 'pulseGlow 3s infinite ease-in-out',
        'shimmer': 'shimmer 4s infinite linear',
        'spin-slow': 'spin 30s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { transform: 'scale(1) translateY(0)', opacity: '1', filter: 'drop-shadow(0 0 16px #FF9B32)' },
          '25%': { transform: 'scale(1.06, 0.95) translateY(-1px) rotate(-1deg)', opacity: '0.92', filter: 'drop-shadow(0 0 20px #FFB84D)' },
          '50%': { transform: 'scale(0.96, 1.04) translateY(-3px) rotate(1deg)', opacity: '0.98', filter: 'drop-shadow(0 0 24px #FF7A00)' },
          '75%': { transform: 'scale(1.03, 0.98) translateY(-1.5px) rotate(-0.5deg)', opacity: '0.94', filter: 'drop-shadow(0 0 18px #FF9B32)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '0.95', transform: 'scale(1.08)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
