import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  // server: {
  //   Proxy: {
  //     "/api": "http://192.168.1.247:7002/api/auth/register",
  //   },
  // },
  plugins: [react()],
});
