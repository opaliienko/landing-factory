import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { readdirSync } from "fs";

import tailwindcss from "@tailwindcss/vite";

const landingsDirectory = resolve(__dirname, "src/landings");

const landings = readdirSync(landingsDirectory, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

const landingInputs = landings.reduce((acc, name) => {
  acc[name] = resolve(__dirname, `src/landings/${name}/index.html`);
  return acc;
}, {});

export default defineConfig(({ command }) => {
  const isProduction = command === "build";

  return {
    plugins: [react(), tailwindcss()],
    css: {
      modules: {
        localsConvention: "camelCase",
        generateScopedName: "[name]__[local]___[hash:base64:5]",
      },
    },
    build: {
      rollupOptions: {
        input: isProduction
          ? landingInputs
          : {
              main: resolve(__dirname, "index.html"),
              ...landingInputs,
            },
      },
    },
  };
});
