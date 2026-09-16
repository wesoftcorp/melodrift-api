// Build script for Vercel deployment
import { build } from 'esbuild'
import { resolve, dirname } from 'path'
import { fileURLToPath } from 'url'
import { readFileSync, writeFileSync } from 'fs'

const __dirname = dirname(fileURLToPath(import.meta.url))

await build({
  entryPoints: [resolve(__dirname, 'src/vercel-entry.ts')],
  bundle: true,
  platform: 'node',
  target: 'node22',
  format: 'cjs',
  outfile: resolve(__dirname, 'api/index.js'),
  alias: {
    '#modules': resolve(__dirname, 'src/modules'),
    '#common': resolve(__dirname, 'src/common')
  },
  tsconfig: resolve(__dirname, 'tsconfig.json'),
  sourcemap: false,
  minify: false,
  logLevel: 'info',
  footer: {
    js: 'module.exports = vercel_entry_default; module.exports.default = vercel_entry_default;'
  }
})

console.log('Vercel build complete: api/index.js')