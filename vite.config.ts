import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Use repo name (lowercase) to match the new GitHub Pages path.
  base: '/movie-arc/',
  plugins: [react()],
})
