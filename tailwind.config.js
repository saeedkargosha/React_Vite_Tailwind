/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cell: '#807c81',
        'cell-action': '#fe9f0c',
        'cell-header': '#676268',
      },
    },
  },
  plugins: [],
}
