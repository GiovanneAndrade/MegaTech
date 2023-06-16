import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
// https://vitejs.dev/config/
dotenv.config();
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.BACK_END_URL': JSON.stringify(process.env.BACK_END_URL),
  },
})
