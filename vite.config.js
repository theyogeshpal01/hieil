import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import legacy from '@vitejs/plugin-legacy'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    legacy({
      targets: ['defaults', 'not IE 11']
    })
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Vendor: react ecosystem
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom') || id.includes('node_modules/react-router')) {
            return 'react-vendor';
          }
          // Vendor: UI icons - split FA into separate chunk
          if (id.includes('node_modules/react-icons')) {
            return 'icons';
          }
          // Vendor: sweetalert2
          if (id.includes('node_modules/sweetalert2')) {
            return 'sweetalert2';
          }
          // Vendor: axios
          if (id.includes('node_modules/axios')) {
            return 'axios';
          }
          // Vendor: html2pdf / jspdf
          if (id.includes('node_modules/html2pdf') || id.includes('node_modules/jspdf') || id.includes('node_modules/html2canvas')) {
            return 'pdf';
          }
          // Vendor: AOS animations
          if (id.includes('node_modules/aos')) {
            return 'aos';
          }
          // Admin pages - separate chunk
          if (id.includes('/src/admin/')) {
            return 'admin';
          }
          // Public pages - separate chunk
          if (id.includes('/src/pages/')) {
            return 'public-pages';
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000,
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'axios']
  }
})
