import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // This allows external devices to connect
    port: 5173, // Optional: explicitly set the port (default is 5173)
  },
});
