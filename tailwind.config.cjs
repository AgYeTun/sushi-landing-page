/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    colors: {
      'primary': 'hsl(19, 64%, 54%)',
      'primary-alt': 'hsl(19, 64%, 52%)',
      'title': 'hsl(19, 16%, 15%)',
      'txt': 'hsl(19, 16%, 35%)',
      'txt-light': 'hsl(19, 8%, 55%)',
      'body-color': 'hsl(19, 100%, 96%)',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      lora: ['Lora', 'serif'],
      dancing_script: ['Dancing Script', 'cursive'],
    },
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
  ]
};
