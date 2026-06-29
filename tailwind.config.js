/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1A2942',
        navyDeep: '#0F1F3D',
        navyDark: '#162338',
        coral: '#FF6B5B',
        coralText: '#C0392B',
        coralLight: '#FFE5E0',
        coralBg: '#FFEEEA',
        blueTag: '#DDE4EC',
        blueTagBg: '#E5EBF2',
        brandgreen: '#10B981',
        whatsapp: '#25D366',
        brandyellow: '#FBBF24',
        brandorange: '#F59E0B',
        canvas: '#F7F8FB',
        textmuted: '#566273',
        brandborder: '#E8EDF3',
        iconbg: '#F3F5F9',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '80rem',
      },
      keyframes: {
        heroWhiteWipe: {
          '0%': { opacity: '1' },
          '70%': { opacity: '0.4' },
          '100%': { opacity: '0' },
        },
        slideFlash: {
          '0%': { opacity: '0' },
          '40%': { opacity: '0.55' },
          '100%': { opacity: '0' },
        },
        heroTextUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        revealUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        heroWhiteWipe: 'heroWhiteWipe 1.6s ease-out forwards',
        slideFlash: 'slideFlash 1.6s ease-in-out forwards',
        heroTextUp: 'heroTextUp 1s ease-out forwards',
        revealUp: 'revealUp 0.9s cubic-bezier(0.22,1,0.36,1) both',
      },
    },
  },
  plugins: [],
};
