import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   Proxy: {
  //     "/api": "http://192.168.1.247:7002/api/auth/register",
  //   },
  // },
  plugins: [react()], resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
