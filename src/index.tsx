import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { renderer } from './renderer'
import { LandingPage } from './pages/landing'
import { RoleSelectPage } from './pages/role-select'
import { VideoCallPage } from './pages/video-call'
import { DonationPage } from './pages/donation'
import { AboutPage } from './pages/about'

const app = new Hono()

// Enable CORS for WebRTC signaling
app.use('/api/*', cors())

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// JSX renderer
app.use(renderer)

// Pages
app.get('/', (c) => {
  return c.render(<LandingPage />)
})

app.get('/role-select', (c) => {
  return c.render(<RoleSelectPage />)
})

app.get('/video-call', (c) => {
  return c.render(<VideoCallPage />)
})

app.get('/donation', (c) => {
  return c.render(<DonationPage />)
})

app.get('/about', (c) => {
  return c.render(<AboutPage />)
})

// API Routes for WebRTC signaling and matchmaking
app.post('/api/match', async (c) => {
  const { role } = await c.req.json()
  
  // Mock matchmaking - in real app, this would use a queue/database
  return c.json({
    matched: true,
    partnerId: `${role === 'student' ? 'ceo' : 'student'}-${Math.random().toString(36).substr(2, 9)}`,
    partnerRole: role === 'student' ? 'CEO' : 'Student'
  })
})

app.post('/api/signal', async (c) => {
  // WebRTC signaling endpoint - in real app, this would use WebSockets or Server-Sent Events
  const { type, data, target } = await c.req.json()
  
  return c.json({
    success: true,
    message: 'Signal sent'
  })
})

app.post('/api/donate', async (c) => {
  const { amount } = await c.req.json()
  
  // Mock donation processing
  return c.json({
    success: true,
    message: `Thank you for your $${amount} donation!`,
    transactionId: `mock-${Date.now()}`
  })
})

export default app
