import { defineConfig } from "astro/config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

export default defineConfig({
  output: "static",
  site: isGitHubPages ? "https://zaraac.github.io" : undefined,
  base: isGitHubPages ? "/Trix-digital" : "/",
});
