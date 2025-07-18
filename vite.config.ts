import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ command }) => {
  return {
    plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
    build: {
      target: "esnext",
      cssMinify: "lightningcss",
      // FIXME: why is the minified maplibre-gl still almost 1MiB (Can't we find a better alternative?)
      chunkSizeWarningLimit: 1024,
    },
    css: {
      preprocessorMaxWorkers: true,
    },
    // FIXME: RenderToPipeableStream https://github.com/remix-run/react-router/issues/12568
    resolve:
      command === "serve"
        ? {}
        : {
            alias: {
              "react-dom/server": "react-dom/server.node",
            },
          },
    server: {
      proxy: {
        "/api": {
          target: "https://booking-system-backend-1.onrender.com",
          changeOrigin: true,
          secure: false,
        },
      },
    },
  };
});
