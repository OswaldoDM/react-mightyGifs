/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      colors:{
        fullBlack: '#000000',
        whiteText: '#f7f7f7',        
        iGreen: '#19ccb7d9',
        iGreenL: '#00f0d4d9',  
      },


      fontFamily:{
        'PTMono': ['Pt Mono', 'monospace'],
        'Nexa': ['Nexa Black'],        
        'Comic': ['Comic Mono', 'monospace'],
        'Roboto': ['Roboto', 'sans-serif']        
        
      }
    },
  },
  plugins: [],
}

