import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
// import tailwindcss from "@tailwindcss/vite" // Uncomment if using Tailwind CSS

export default defineConfig({
  plugins: [react()],
  base: "/",
})
