/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      backgroundColor: "var(--background-color)",
      backgroundColorMuted: "var(--background-color-muted)",
      foregroundColor: "var(--foreground-color)",
      foregroundColorMuted: "var(--foreground-color-muted)",
    },
    extend: {},
  },
  plugins: [],
};
