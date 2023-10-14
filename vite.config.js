import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/threejsportfolio/', // Replace 'threejsportfolio' with your actual repository name
});