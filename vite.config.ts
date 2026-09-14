import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Netlify serves the site from the domain root, so keep the default base.
  // (No sub-path prefix needed, unlike a GitHub Pages project site.)
  base: '/',
})
