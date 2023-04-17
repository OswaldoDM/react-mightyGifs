/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {    
    
    extend: {
      

      fontFamily:{
        'PTMono': ['Pt Mono', 'monospace'],               
        'Comic': ['Comic Mono', 'monospace'],                
        
      }
    },
  },
  plugins: [],
}

