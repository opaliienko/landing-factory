import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig(() => {
  return {
    base: "/",
    plugins: [react(), tailwindcss()],
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: "[name]__[local]___[hash:base64:5]",
      },
    },
    build: {
      rollupOptions: {
        input: {
          main: "index.html",
          "landing-2": "landing-2.html",
        },
      },
    },
  };
});
