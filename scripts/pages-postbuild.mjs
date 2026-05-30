// Post-build step for GitHub Pages.
// The SPA build emits dist/client/_shell.html (the static shell that hydrates on
// the client). GitHub Pages serves index.html at "/", so we promote the shell to
// index.html, copy it to 404.html as an SPA deep-link fallback, and drop a
// .nojekyll marker so Pages serves files/folders verbatim (no Jekyll processing).
import { copyFileSync, writeFileSync, existsSync } from "node:fs";
import { join } from "node:path";

const outDir = join(process.cwd(), "dist", "client");
const shell = join(outDir, "_shell.html");

if (!existsSync(shell)) {
  console.error(`[pages] Expected ${shell} but it was not found. Did the build run?`);
  process.exit(1);
}

copyFileSync(shell, join(outDir, "index.html"));
copyFileSync(shell, join(outDir, "404.html"));
writeFileSync(join(outDir, ".nojekyll"), "");

console.log("[pages] Wrote index.html, 404.html and .nojekyll to dist/client");
