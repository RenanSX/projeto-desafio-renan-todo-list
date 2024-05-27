import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from "node:url";

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    define: {
      "process.env": env,
    },
    plugins: [react(), viteTsconfigPaths()],
    server: {
      open: true,
      port: 3000,
    },
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
  });
};