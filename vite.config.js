import { defineConfig } from 'vite';
import uni from '@dcloudio/vite-plugin-uni';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni()],
  preview: {
    proxy: {
      '/list': {
        target:
          'https://fc-mp-e0df291e-12b9-4b9c-99b8-c490b9170a5c.next.bspapp.com',
      },
    },
  },
});
