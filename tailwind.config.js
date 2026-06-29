/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dev-bg': '#0a0f1d',
        'dev-surface': '#111827',
        'dev-primary': '#0ea5e9',
        'dev-secondary': '#38bdf8',
        'dev-border': '#1e293b',
        'dev-text': '#94a3b8',
        'code-keyword': '#c678dd',
        'code-function': '#61afef',
        'code-string': '#98c379',
        'code-type': '#e5c07b',
        'code-comment': '#5c6370',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
      },
      animation: {
        'float-slow': 'float 6s ease-in-out infinite',
        'float-fast': 'float 4s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'spin-slow': 'spin 15s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        }
      }
    }
  },
  plugins: [],
}
