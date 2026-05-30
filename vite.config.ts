// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Static deployment for GitHub Pages.
// - `nitro: false` disables the Cloudflare Worker build so we emit plain static assets.
// - SPA mode prerenders a static shell (with <head> meta/OG tags) that hydrates on the
//   client; the portfolio is fully client-rendered, so no server runtime is needed.
export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: {
      enabled: true,
      prerender: {
        crawlLinks: true,
      },
    },
  },
});
