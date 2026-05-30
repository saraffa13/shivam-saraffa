/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        surface: '#0b1326',
        'surface-low': '#131b2e',
        'surface-container': '#171f33',
        'surface-high': '#222a3d',
        'surface-highest': '#2d3449',
        'surface-bright': '#31394d',
        'on-surface': '#dae2fd',
        'on-surface-variant': '#c2c6d6',
        outline: '#8c909f',
        'outline-variant': '#424754',
        primary: '#adc6ff',
        'primary-bright': '#4d8eff',
        'on-primary': '#002e6a',
        background: '#0b1326',
      },
      fontFamily: {
        display: ['Geist', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
        xl: '0.75rem',
      },
    },
  },
  plugins: [],
}
