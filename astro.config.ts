import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import process from "node:process";

export default defineConfig({
  site: process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : undefined,
  compressHTML: true,
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [react(), mdx()],
  vite: {
    plugins: [tailwindcss()],
  },
});
