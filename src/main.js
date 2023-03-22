import { createSSRApp } from 'vue';
import App from './App.vue';
import { inject } from '@vercel/analytics';

inject();

export function createApp() {
  const app = createSSRApp(App);
  return {
    app,
  };
}
