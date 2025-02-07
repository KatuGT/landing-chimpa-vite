import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@swiper': './node_modules/swiper',
    },
  },
  assetsInclude: ['**/*.otf', '**/*.ttf', '**/*.woff', '**/*.woff2'],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
        @import "./src/presentation/config/bootstrap/_custom.scss";
        `,
        silenceDeprecations: ['mixed-decls', 'legacy-js-api', 'color-functions', 'import', 'global-builtin']
      }
    }
  },
})
