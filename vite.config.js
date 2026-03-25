import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { Readable } from 'node:stream'

const PROXY_PATH = '/api/v1/messages'

/** Dev / preview middleware: forwards to Anthropic so the browser never hits their API (CORS). */
function anthropicProxyPlugin(apiKey) {
  const mount = (server) => {
    server.middlewares.use((req, res, next) => {
      const url = req.url?.split('?')[0] ?? ''
      if (url !== PROXY_PATH) return next()

      if (req.method === 'OPTIONS') {
        res.statusCode = 204
        res.setHeader('Access-Control-Allow-Origin', '*')
        res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
        res.end()
        return
      }

      if (req.method !== 'POST') return next()

      if (!apiKey) {
        res.statusCode = 500
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({ error: 'Missing ANTHROPIC_API_KEY in .env' }))
        return
      }

      ;(async () => {
        const chunks = []
        for await (const chunk of req) chunks.push(chunk)
        const body = Buffer.concat(chunks)

        try {
          const r = await fetch('https://api.anthropic.com/v1/messages', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-api-key': apiKey,
              'anthropic-version': '2023-06-01',
            },
            body,
          })

          if (!r.ok) {
            const text = await r.text()
            res.statusCode = r.status
            res.setHeader('Content-Type', r.headers.get('content-type') || 'application/json')
            res.end(text)
            return
          }

          const ct = r.headers.get('content-type')
          if (ct) res.setHeader('Content-Type', ct)
          res.statusCode = r.status

          if (!r.body) {
            res.end()
            return
          }

          Readable.fromWeb(r.body).pipe(res)
        } catch (err) {
          res.statusCode = 502
          res.setHeader('Content-Type', 'application/json')
          res.end(JSON.stringify({ error: err?.message || String(err) }))
        }
      })()
    })
  }

  return {
    name: 'anthropic-proxy',
    configureServer: mount,
    configurePreviewServer: mount,
  }
}

export default defineConfig(({ mode }) => {
  // Prefixes are used by Vite to decide which env vars to expose. Using [''] includes all vars.
  const env = loadEnv(mode, process.cwd(), [''])
  const apiKey = env.ANTHROPIC_API_KEY || env.VITE_ANTHROPIC_API_KEY || ''

  return {
    plugins: [react(), anthropicProxyPlugin(apiKey)],
    server: {
      port: 3000,
      open: true,
    },
    preview: {
      port: 3000,
    },
  }
})
