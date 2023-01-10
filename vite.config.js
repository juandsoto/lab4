// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        doughnut: resolve(__dirname, "src/doughnut.html"),
        eye: resolve(__dirname, "src/eye.html"),
      },
    },
  },
});
