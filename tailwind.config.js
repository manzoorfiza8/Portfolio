const colors = require('tailwindcss/colors')
module.exports = {
  mode:"jit",
  drakmode:"class",
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        // Configure your color palette here
        'cyan':colors.cyan,
        'teal':colors.teal,
        'dark' :'#232A3C',
        'medium': '#293245',       
        'Fuchsia':{
        600:'#86198f',
       950 :'#4a044e',
       900:'#701a75'
        }
      }
    },
  },
  plugins: [],
}

