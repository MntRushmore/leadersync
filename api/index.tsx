import type { IncomingMessage, ServerResponse } from 'node:http'
import { Hono } from 'hono'
import { renderer } from '../src/renderer'
import { LandingPage } from '../src/pages/landing'
import { LoginPage } from '../src/pages/login'
import { RegisterPage } from '../src/pages/register'
import { AboutPage } from '../src/pages/about'
import { RoleSelectPage } from '../src/pages/role-select'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => c.render(<LandingPage />))
app.get('/login', (c) => c.render(<LoginPage />))
app.get('/register', (c) => c.render(<RegisterPage />))
app.get('/about', (c) => c.render(<AboutPage />))
app.get('/role-select', (c) => c.render(<RoleSelectPage />))

app.all('*', (c) => c.redirect('/'))

export const config = {
  runtime: 'nodejs',
  maxDuration: 30,
}

export default async function handler(req: IncomingMessage, res: ServerResponse) {
  try {
    const proto = req.headers['x-forwarded-proto'] || 'https'
    const host = req.headers.host || 'localhost'
    const url = new URL(req.url || '/', `${proto}://${host}`)

    const headers = new Headers()
    for (const [key, value] of Object.entries(req.headers)) {
      if (value) headers.set(key, Array.isArray(value) ? value.join(', ') : value)
    }

    const webReq = new Request(url.toString(), {
      method: req.method || 'GET',
      headers,
    })

    const webRes = await app.fetch(webReq)

    const resHeaders: Record<string, string> = {}
    webRes.headers.forEach((value, key) => { resHeaders[key] = value })
    res.writeHead(webRes.status, resHeaders)

    const body = await webRes.arrayBuffer()
    res.end(Buffer.from(body))
  } catch (err: any) {
    console.error('HANDLER_ERROR:', err)
    res.writeHead(500, { 'Content-Type': 'text/plain' })
    res.end(`Error: ${err.stack || err.message || String(err)}`)
  }
}
