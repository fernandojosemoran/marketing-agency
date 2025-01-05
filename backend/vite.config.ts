/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig, loadEnv,  } from 'vite';

import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: "./",
  plugins: [ react() ],
  test: {
    globals: true,
    environment: 'jsdom',
    environmentOptions: {
      pretendToBeVisual: true,
    },
    env: loadEnv(mode, process.cwd(), ''),
    setupFiles: [ './setupTests.ts' ],
    include: [ './src/**/*.{test,spec}.{tsx,jsx,ts,js}' ],
    exclude: [ 'node_modules' ],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
}));
