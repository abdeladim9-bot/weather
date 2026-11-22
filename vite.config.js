import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: { dedupe: ['react', 'react-dom'] },
  optimizeDeps: {
    include: [
      'react',
      'react-dom/client',
      'react/jsx-dev-runtime',
      'react-router-dom',
      'react-redux',
      '@reduxjs/toolkit',
      '@mui/material',
      '@mui/material/styles',
      '@mui/material/Container',
      '@mui/material/Button',
      '@mui/icons-material/Cloud',
      'axios',
      'moment',
      'moment/min/locales',
      'i18next',
      'react-i18next',
      'i18next-http-backend',
      'i18next-browser-languagedetector',
    ],
  },
})