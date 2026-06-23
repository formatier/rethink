import tailwindcss from "@tailwindcss/vite";

import { createResolver } from "nuxt/kit";

const { resolve } = createResolver(import.meta.url);

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  vite: {
    plugins: [tailwindcss()],
  },

  css: ["./app/assets/css/main.css"],
  modules: ["@nuxt/fonts", "@nuxt/icon"],

  icon: {
    mode: "css",
    cssLayer: "base",
    customCollections: [
      {
        prefix: "logos",
        dir: resolve("./app/assets/logos"),
      },
    ],
  },
  fonts: {
    families: [
      {
        name: "Lora",
        styles: ["normal", "italic"],
        provider: "google",
      },

      {
        name: "Space Grotesk",
        styles: ["normal", "italic"],
        provider: "google",
      },
      {
        name: "Anuphan",
        styles: ["normal", "italic"],
        provider: "google",
      },

      {
        name: "IBM Plex Mono",
        styles: ["normal", "italic"],
        provider: "google",
      },
      {
        name: "IBM Plex Sans Thai",
        styles: ["normal", "italic"],
        provider: "google",
      },
    ],
  },
});
