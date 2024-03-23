/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js",
    "./pages/**/*.{ts,tsx}",
    "./public/**/*.html",
    "./node_modules/flowbite-react/lib/**/*.js",
    'node_modules/flowbite-react/lib/esm/**/*.js',
   
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      width: {
        '128': '44rem',
      },
      colors: {
        'blues': '#4581AC',
        'brown': '#7B493E',
        'gray': '#ECECEC',
        'yellow': '#EECB5D',
       
      },
    },
  },
  plugins: [nextui(), require("flowbite/plugin")],

};
