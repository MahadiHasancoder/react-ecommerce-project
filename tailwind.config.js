  // tailwind.config.js
  module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
     darkMode: false, // or 'media' or 'class'
     theme: {
       screens:{
         sm: '576px',
         md: '768px',
         lg: '992px',
         xl: '1200px'
       },
       container:{
          center: true,
          padding: '15px'
       },
       extend: {
         colors:{
           'primary': '#FD3D57'
         }
       },
     },
     variants: {
       extend: {
         display:['group-hover'],
         visibility:['group-hover'],
       },
     },
     plugins: [],
   }