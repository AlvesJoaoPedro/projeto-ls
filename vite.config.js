import { defineConfig } from 'vite';

export default defineConfig({
  base: '/meu-projeto',
  build: {
    rollupOptions: {
      input: {
        index: './index.html',
        cadernoAberto: './cadernoaberto.html',
        completedTasks: './completedtasks.html',
        deletedTasks: './deletedtasks.html'
      },
    },
  },
});