
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   plugins: [[react()],
 
    tailwindcss(),
    
],
  // server: {
  //   port: 3000, // change this to your desired port
  //   host: '0.0.0.0', // or 'localhost' if you prefer
  // },
 
  
})
