import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Allows access from outside the container
    port: 80, // Ensure this matches the exposed port
    strictPort: true,
    watch: {
      usePolling: true, // Ensures changes are detected inside Docker
    },
  },
});
