import { defineConfig } from 'vite';
import { resolve } from 'path';
import Inspect from 'vite-plugin-inspect'; // Assuming Inspect is a valid plugin

export default defineConfig({
  plugins: [Inspect()], // Example plugin, adjust as needed

  build: {
    assetsDir: 'assets', // Output directory for all assets
    cssCodeSplit: true, // Enable CSS code splitting
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        login: resolve(__dirname, 'app/login/login.html'),
        about: resolve(__dirname, 'app/about/about.html'),


      },
      output: {
        assetFileNames: (assetInfo) => {
          // Check the asset type and adjust the output directory accordingly
          if (assetInfo.name.endsWith('.css')) {
            return 'styles/[name].[hash].[ext]'; // Output directory for CSS files
          }
          if (/\.(png|jpe?g|gif|svg)$/.test(assetInfo.name)) {
            return 'images/[name].[hash].[ext]'; // Output directory for images
          }
          if (assetInfo.name.endsWith('.js')) {
                         return 'assets/js/[name].[hash].[ext]'; // Output directory for JS files
                   }

          return 'assets/[name].[hash].[ext]'; // Default output directory for other assets
       },
        chunkFileNames: 'assets/js/[name].[hash].js', // Output directory for JavaScript chunks
        entryFileNames: 'assets/js/[name].[hash].js', // Output directory for entry JavaScript files
      },
    },
  },
});


