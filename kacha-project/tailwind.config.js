/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // './src/app/**/*.{tsx,html}',
    // './src/app/**/*.{html,tsx}',
    './src/app/**/*.{html,tsx}',

    './src/app/pages/**/*.{html,tsx}'

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

