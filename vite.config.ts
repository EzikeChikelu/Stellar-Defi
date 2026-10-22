import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  // This app is deployed at the domain root on Netlify/Vercel.
  // Do not use the GitHub Pages repository subpath here.
  base: "/",
  plugins: [react()],
  server: { host: "0.0.0.0" },
});
