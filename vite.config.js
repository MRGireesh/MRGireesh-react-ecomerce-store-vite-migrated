import { defineConfig } from 'vite';
import ViteImagemin from 'vite-plugin-imagemin';
import react from '@vitejs/plugin-react';

export default defineConfig(() => {
  return {
    build: {
      outDir: 'dist',
    },
    plugins: [  react(),
      ViteImagemin({
        gifsicle: { optimizationLevel: 3 },
        mozjpeg: { quality: 85 },
        optipng: { optimizationLevel: 3 },
        svgo: {
          plugins: [
            { removeViewBox: false },
            { removeUnusedNS: false },
            { removeUselessStrokeAndFill: false },
          ],
        },
        custom: [
          // Add custom configuration for WebP using sharp
          async ({ data, path }) => {
            if (path.endsWith('.png') || path.endsWith('.jpg') || path.endsWith('.jpeg')) {
              const sharp = require('sharp');
              const webpBuffer = await sharp(data).webp({ quality: 75 }).toBuffer();
              return { data: webpBuffer, path: path.replace(/\.(png|jpg|jpeg)$/, '.webp') };
            }
            return { data, path };
          },
        ],
      }),
    ],
  };
});
