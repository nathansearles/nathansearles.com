// @ts-check
import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: "https://nathansearles.com",
  base: "/",
  trailingSlash: "never",
  fonts: [
    {
      provider: fontProviders.local(),
      name: "Allo",
      cssVariable: "--font-allo",
      fallbacks: ["system-ui", "sans-serif"],
      options: {
        variants: [
          {
            src: ["public/fonts/AlloVariable.woff2"],
            weight: "100 900",
            style: "normal",
          },
        ],
      },
    },
  ],
});
