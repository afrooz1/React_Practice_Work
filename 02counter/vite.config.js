import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/React_Practice_Work/02counter/",
  plugins: [react()],
})
