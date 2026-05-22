// import tailwindcss from "@tailwindcss/vite";
// import { defineConfig } from "astro/config";
// import react from "@astrojs/react";

// export default defineConfig({
//   output: "static",
//   integrations: [react()],
//   vite: {
//     plugins: [tailwindcss()],
//     resolve: {
//       alias: {
//         "@": ".",
//       },
//     },
//   },
// });

import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://wwwyancarvalho.dev.br",
  output: "static",
  integrations: [react(), sitemap()],
  trailingSlash: "never",
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        "@": ".",
      },
    },
  },
});
