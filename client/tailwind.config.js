/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
  
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'my-grey-bg': '#161824',
          'bil-bg': '#EFE9E2',
          "flow-grey-bg": '#111827',
        },
      },
    },
    plugins: [],
  }