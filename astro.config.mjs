import { defineConfig, fontProviders } from "astro/config";

const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

// Fontes versionadas em src/assets/fonts (subset latin, OFL): o build não
// depende de rede e o visitante não faz requisições ao Google.
const font = (name, cssVariable, files) => ({
  provider: fontProviders.local(),
  name,
  cssVariable,
  options: {
    variants: Object.entries(files).map(([weight, file]) => ({
      weight: Number(weight),
      style: "normal",
      src: [`./src/assets/fonts/${file}.woff2`],
    })),
  },
});

export default defineConfig({
  output: "static",
  site: isGitHubPages ? "https://zaraac.github.io" : undefined,
  base: isGitHubPages ? "/Trix-digital" : "/",
  fonts: [
    font("Chakra Petch", "--font-chakra", { 700: "chakra-petch-700" }),
    font("IBM Plex Sans", "--font-plex-sans", {
      400: "ibm-plex-sans-400",
      600: "ibm-plex-sans-600",
    }),
    font("IBM Plex Mono", "--font-plex-mono", { 400: "ibm-plex-mono-400" }),
  ],
});
