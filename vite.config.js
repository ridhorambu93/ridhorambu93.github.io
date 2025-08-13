import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
//base: "https://ridhorambu93.github.io/",
  base: "/ridhorambu93.github.io/",
});
