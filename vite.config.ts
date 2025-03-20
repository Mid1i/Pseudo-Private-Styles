import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";


export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@/": "/src/"
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@use "@/styles/default" as *; @use "@/styles/index" as *;'
      }
    }
  }
})
