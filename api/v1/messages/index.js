const { Readable } = require('node:stream')

/**
 * Proxies streaming requests to Anthropic from the server so the API key
 * is never exposed in the browser bundle.
 *
 * Vercel route: POST /api/v1/messages
 */
module.exports = async function handler(req, res) {
  if (req.method === 'OPTIONS') {
    res.statusCode = 204
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type')
    res.end()
    return
  }

  if (req.method !== 'POST') {
    res.statusCode = 405
    res.end('Method Not Allowed')
    return
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    res.statusCode = 500
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ error: 'Missing ANTHROPIC_API_KEY' }))
    return
  }

  // Read raw request body (frontend sends JSON).
  const rawBody = await new Promise((resolve, reject) => {
    let data = ''
    req.on('data', (chunk) => {
      data += chunk
    })
    req.on('end', () => resolve(data))
    req.on('error', reject)
  })

  const anthropicRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'x-api-key': apiKey,
      'anthropic-version': '2023-06-01',
    },
    body: rawBody,
  })

  const contentType = anthropicRes.headers.get('content-type') || 'text/event-stream'
  res.statusCode = anthropicRes.status
  res.setHeader('content-type', contentType)
  res.setHeader('cache-control', 'no-cache, no-transform')
  res.setHeader('connection', 'keep-alive')
  res.setHeader('x-accel-buffering', 'no')
  if (typeof res.flushHeaders === 'function') res.flushHeaders()

  if (!anthropicRes.ok) {
    try {
      const errText = await anthropicRes.text()
      res.setHeader('content-type', 'application/json')
      res.end(JSON.stringify({ error: errText }))
    } catch {
      res.end(JSON.stringify({ error: 'Anthropic request failed' }))
    }
    return
  }

  if (!anthropicRes.body) {
    res.end()
    return
  }

  try {
    Readable.fromWeb(anthropicRes.body).pipe(res)
  } catch (e) {
    try {
      const text = await anthropicRes.text()
      res.setHeader('content-type', 'text/plain')
      res.end(text)
    } catch {
      res.end(JSON.stringify({ error: e?.message || String(e) }))
    }
  }
}

