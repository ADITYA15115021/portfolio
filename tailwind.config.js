/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: { sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'], display: ['Newsreader', 'Georgia', 'serif'] },
      colors: { ink: '#17211d', moss: '#315943', sand: '#f7f6f1', line: '#d9ddd6', muted: '#627069' },
      boxShadow: { soft: '0 18px 45px -28px rgba(23, 33, 29, 0.35)' }
    }
  },
  plugins: []
}
