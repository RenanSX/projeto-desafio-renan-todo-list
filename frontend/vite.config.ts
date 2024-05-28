import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import viteTsconfigPaths from 'vite-tsconfig-paths'
import { fileURLToPath, URL } from 'node:url'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return defineConfig({
    define: {
      'process.env': env
    },
    plugins: [react(), viteTsconfigPaths()],
    base: '/',
    preview: {
      port: 3000,
      strictPort: true
    },
    server: {
      port: 3000,
      strictPort: true,
      host: true,
      origin: 'http://0.0.0.0:3000'
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  })
}
