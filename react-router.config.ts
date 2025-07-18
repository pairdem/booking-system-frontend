import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  prerender: true,
  ssr: false, // use SSR/CSR mode
  presets: [vercelPreset()],
} satisfies Config;
