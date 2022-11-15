/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      inset: {
        '1320px': '1320px',
      },
      colors : {
        'cyan-25' : '#F2FBFB'
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}
