/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Onest', 'system-ui', '-apple-system', 'sans-serif'],
      },
      colors: {
        bg: '#262624',
        'bg-preview': '#2d2d2d',
        surface: '#3d3d3d',
        'surface-hover': '#4a4a4a',
        panel: '#252525',
        'panel-border': '#3d3d3d',
        primary: '#5a9fd4',
        'primary-hover': '#6eb0e0',
        'primary-active': 'rgba(90, 159, 212, 0.2)',
        'text-secondary': '#b0b0b0',
      },
      borderRadius: {
        panel: '12px',
        input: '8px',
      },
      boxShadow: {
        panel: '0 8px 32px rgba(0, 0, 0, 0.4)',
      },
    },
  },
  plugins: [],
};
