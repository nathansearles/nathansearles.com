// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://nathansearles.com",
  base: "/",
  trailingSlash: "never",
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Inter",
      cssVariable: "--font-inter",
      styles: ["normal"],
      weights: [450],
    },
  ],
});
