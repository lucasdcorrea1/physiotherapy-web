// vite.config.ts
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

// IMPORTANTe: troque NOME_DO_REPO pelo nome exato do seu repositório
export default defineConfig({
  plugins: [react()],
  base: "/physiotherapy-web/", // <- caminho base para GH Pages
})
