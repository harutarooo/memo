import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES ? "memo" : "./",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["public/react.svg", "public/vite.svg"],
      manifest: {
        name: "PWA Memo",
        short_name: "Memo",
        description: "PWA Memo App",
        theme_color: "#cccccc",
        icons: [
          {
            src: "/public/react.svg",
            sizes: "192x192",
            type: "image/svg+xml",
          },
          {
            src: "/public/vite.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
        ],
      },
    }),
  ],
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
});
