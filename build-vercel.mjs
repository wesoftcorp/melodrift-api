// Build script for Vercel deployment
// Bundles the Hono app into a single file with all path aliases resolved
import { build } from 'esbuild'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

await build({
  entryPoints: [resolve(__dirname, 'src/vercel-entry.ts')],
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'esm',
  outfile: resolve(__dirname, 'api/index.js'),
  alias: {
    '#modules': resolve(__dirname, 'src/modules'),
    '#common': resolve(__dirname, 'src/common')
  },
  tsconfig: resolve(__dirname, 'tsconfig.json'),
  sourcemap: false,
  minify: false,
  logLevel: 'info'
})

console.log('Vercel build complete: api/index.js')
