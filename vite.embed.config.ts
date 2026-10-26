/**
 * Library build for embedding KubeezCut in another app (Bylonder): `npm run build:embed` writes dist-embed/.
 * - Entry src/embed/index.tsx: island mounts and the host contract; no router, no standalone shell.
 * - VITE_AI_FEATURES=false: AI entry points are compiled out (src/config/features.ts).
 * - CSS is scoped: every rule moves under `.kc-embed` and cascade layers are flattened, so Tailwind's reset does
 *   not reach the host and the host's unlayered rules do not override the islands.
 */
import fs from 'node:fs'
import path from 'node:path'
import postcss, { type AtRule, type Rule } from 'postcss'
import { defineConfig, mergeConfig, type Plugin, type UserConfig } from 'vite'
import base from './vite.config'

const SCOPE = '.kc-embed'

function scopeSelector(selector: string): string {
  const s = selector.trim()
  // Document-level selectors become the island root.
  const root = s.match(/^(:root|html|body|:host)\b(.*)$/)
  if (root) return `${SCOPE}${root[2]}`
  // Universal and pseudo-element resets apply to the island root and its contents.
  if (s === '*' || s.startsWith('::')) return `${SCOPE}${s === '*' ? '' : s}, ${SCOPE} ${s}`
  return `${SCOPE} ${s}`
}

function scopeStylesheet(css: string): string {
  const result = postcss([
    {
      postcssPlugin: 'kc-embed-scope',
      Once(root) {
        // Flatten cascade layers: keep their rules in order, drop the layer statements.
        root.walkAtRules('layer', (rule: AtRule) => {
          if (rule.nodes && rule.nodes.length) rule.replaceWith(rule.nodes)
          else rule.remove()
        })
        root.walkRules((rule: Rule) => {
          const parent = rule.parent as AtRule | undefined
          if (parent?.type === 'atrule' && /keyframes$/i.test(parent.name)) return
          rule.selectors = rule.selectors.flatMap((selector) => scopeSelector(selector).split(', '))
        })
      },
    },
  ]).process(css, { from: undefined })
  return result.css
}

/**
 * Vite emits a worker file for every `new Worker(new URL(...))` it transforms, even when the code that starts it
 * was compiled out (AI features). Deletes output files no entry file reaches by name.
 */
function pruneUnreachablePlugin(entries: string[]): Plugin {
  let outDir = ''
  return {
    name: 'kc-embed-prune-unreachable',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    writeBundle() {
      const files = fs.readdirSync(outDir, { recursive: true, withFileTypes: true })
        .filter((d) => d.isFile())
        .map((d) => path.relative(outDir, path.join(d.parentPath ?? d.path, d.name)))
      const reached = new Set(entries)
      const queue = [...entries]
      while (queue.length) {
        const file = queue.pop()!
        if (!/\.(js|mjs|css)$/.test(file)) continue
        const text = fs.readFileSync(path.join(outDir, file), 'utf8')
        for (const other of files) {
          if (!reached.has(other) && text.includes(path.basename(other))) { reached.add(other); queue.push(other) }
        }
      }
      for (const file of files) if (!reached.has(file)) fs.rmSync(path.join(outDir, file))
    },
  }
}

/** Resolves `lucide-react` to the Blender icon shim everywhere except inside the shim itself. */
function blenderIconsPlugin(): Plugin {
  const shim = path.resolve(__dirname, 'src/embed/blender-icons.tsx')
  return {
    name: 'kc-embed-blender-icons',
    enforce: 'pre',
    resolveId(source, importer) {
      if (source === 'lucide-react' && importer && path.resolve(importer) !== shim) return shim
      return null
    },
  }
}

function scopedCssPlugin(): Plugin {
  return {
    name: 'kc-embed-scoped-css',
    apply: 'build',
    generateBundle(_options, bundle) {
      for (const file of Object.values(bundle)) {
        if (file.type === 'asset' && file.fileName.endsWith('.css')) {
          file.source = scopeStylesheet(String(file.source))
        }
      }
    },
  }
}

export default defineConfig((env) => {
  const app = (typeof base === 'function' ? base(env) : base) as UserConfig
  return mergeConfig(
    {
      ...app,
      // The standalone app's SEO plugin writes site files; the library needs only React and Tailwind.
      plugins: (app.plugins ?? []).filter((p) => !(p && 'name' in p && (p as Plugin).name === 'seo-site-url')),
    },
    {
      define: { 'import.meta.env.VITE_AI_FEATURES': JSON.stringify('false') },
      plugins: [blenderIconsPlugin(), scopedCssPlugin(), pruneUnreachablePlugin(['index.js', 'embed.css'])],
      // Each worker is one self-contained file. A host bundler copies worker files as plain assets and does not
      // follow their relative imports, so a chunk shared with a worker would be missing from the host's build.
      worker: { format: 'es', rollupOptions: { output: { inlineDynamicImports: true } } },
      // Site assets (brand images, favicons) belong to the standalone app.
      publicDir: false,
      // Workers and lazy chunks resolve next to the module, wherever the host serves it.
      base: './',
      build: {
        outDir: 'dist-embed',
        sourcemap: false,
        emptyOutDir: true,
        cssCodeSplit: false,
        lib: {
          entry: path.resolve(__dirname, 'src/embed/index.tsx'),
          formats: ['es'],
          fileName: 'index',
          cssFileName: 'embed',
        },
      },
    } satisfies UserConfig,
  )
})
