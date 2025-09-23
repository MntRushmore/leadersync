import { Hono } from 'hono'
import { cors } from 'hono/cors'
import { serveStatic } from 'hono/cloudflare-workers'
import { bearerAuth } from 'hono/bearer-auth'
import { renderer } from './renderer'
import { LandingPage } from './pages/landing'
import { LoginPage } from './pages/login'
import { RegisterPage } from './pages/register'
import { ProfilePage } from './pages/profile'
import { DashboardPage } from './pages/dashboard'
import { VideoCallPage } from './pages/video-call'
import { DonationPage } from './pages/donation'
import { AboutPage } from './pages/about'
import { RoleSelectPage } from './pages/role-select'
import { 
  UserService, 
  SessionService, 
  LoginSchema, 
  RegisterSchema, 
  UpdateProfileSchema,
  extractBearerToken
} from './lib/auth'
import { SignalingServer, MatchingQueue } from './lib/signaling'

// Types for Cloudflare environment
interface Env {
  DB: D1Database
  SIGNALING_SERVER: DurableObjectNamespace
  MATCHING_QUEUE: DurableObjectNamespace
  AI?: any
}

const app = new Hono<{ Bindings: Env }>()

// Export Durable Objects
export { SignalingServer, MatchingQueue }

// Enable CORS for API and WebSocket endpoints
app.use('/api/*', cors({
  origin: '*',
  allowMethods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowHeaders: ['Content-Type', 'Authorization'],
}))

app.use('/ws/*', cors({
  origin: '*',
  allowMethods: ['GET'],
  allowHeaders: ['Upgrade', 'Connection', 'Sec-WebSocket-Key', 'Sec-WebSocket-Version'],
}))

// Serve static files
app.use('/static/*', serveStatic({ root: './public' }))

// JSX renderer
app.use(renderer)

// Authentication middleware
const authMiddleware = async (c: any, next: any) => {
  const token = extractBearerToken(c.req.header('Authorization'))
  
  if (!token) {
    return c.json({ error: 'Authentication required' }, 401)
  }

  const sessionService = new SessionService(c.env.DB)
  const user = await sessionService.validateSession(token)
  
  if (!user) {
    return c.json({ error: 'Invalid or expired session' }, 401)
  }

  c.set('user', user)
  await next()
}

// Optional auth middleware for pages (redirects to login)
const pageAuthMiddleware = async (c: any, next: any) => {
  const token = c.req.cookie('auth-token') || extractBearerToken(c.req.header('Authorization'))
  
  if (!token) {
    return c.redirect('/login')
  }

  const sessionService = new SessionService(c.env.DB)
  const user = await sessionService.validateSession(token)
  
  if (!user) {
    return c.redirect('/login')
  }

  c.set('user', user)
  await next()
}

// ============= PUBLIC PAGES =============

// Landing page
app.get('/', (c) => {
  return c.render(<LandingPage />)
})

// Authentication pages
app.get('/login', (c) => {
  return c.render(<LoginPage />)
})

app.get('/register', (c) => {
  return c.render(<RegisterPage />)
})

app.get('/about', (c) => {
  return c.render(<AboutPage />)
})

app.get('/role-select', (c) => {
  return c.render(<RoleSelectPage />)
})

// ============= PROTECTED PAGES =============

// User dashboard (replaces role-select for logged-in users)
app.get('/dashboard', pageAuthMiddleware, (c) => {
  const user = c.get('user')
  return c.render(<DashboardPage user={user} />)
})

// User profile
app.get('/profile', pageAuthMiddleware, (c) => {
  const user = c.get('user')
  return c.render(<ProfilePage user={user} />)
})

// Video call page
app.get('/video-call/:roomId', pageAuthMiddleware, (c) => {
  const user = c.get('user')
  const roomId = c.req.param('roomId')
  return c.render(<VideoCallPage user={user} roomId={roomId} />)
})

// Donation page
app.get('/donation', pageAuthMiddleware, (c) => {
  const user = c.get('user')
  return c.render(<DonationPage user={user} />)
})

// ============= AUTHENTICATION API =============

// Register
app.post('/api/auth/register', async (c) => {
  try {
    const body = await c.req.json()
    const userData = RegisterSchema.parse(body)
    
    const userService = new UserService(c.env.DB)
    
    // Check if user already exists
    const existingUser = await userService.findUserByEmail(userData.email)
    if (existingUser) {
      return c.json({ error: 'Email already registered' }, 400)
    }
    
    // Create user
    const user = await userService.createUser(userData)
    
    // Create session
    const sessionService = new SessionService(c.env.DB)
    const token = await sessionService.createSession(
      user.id,
      c.req.header('CF-Connecting-IP'),
      c.req.header('User-Agent')
    )
    
    return c.json({
      success: true,
      user,
      token
    })
  } catch (error: any) {
    console.error('Registration error:', error)
    
    if (error.issues) {
      return c.json({ 
        error: 'Validation failed', 
        issues: error.issues 
      }, 400)
    }
    
    return c.json({ 
      error: 'Registration failed', 
      message: error.message 
    }, 500)
  }
})

// Login
app.post('/api/auth/login', async (c) => {
  try {
    const body = await c.req.json()
    const loginData = LoginSchema.parse(body)
    
    const userService = new UserService(c.env.DB)
    const userWithPassword = await userService.findUserByEmail(loginData.email)
    
    if (!userWithPassword) {
      return c.json({ error: 'Invalid email or password' }, 401)
    }
    
    // Verify password (you'll need to implement verifyPassword)
    const bcrypt = await import('bcryptjs')
    const isValidPassword = await bcrypt.compare(loginData.password, userWithPassword.passwordHash)
    
    if (!isValidPassword) {
      return c.json({ error: 'Invalid email or password' }, 401)
    }
    
    // Update user status
    await userService.updateUserStatus(userWithPassword.id, true)
    
    // Create session
    const sessionService = new SessionService(c.env.DB)
    const token = await sessionService.createSession(
      userWithPassword.id,
      c.req.header('CF-Connecting-IP'),
      c.req.header('User-Agent')
    )
    
    // Remove password hash from response
    const { passwordHash, ...user } = userWithPassword
    
    return c.json({
      success: true,
      user,
      token
    })
  } catch (error: any) {
    console.error('Login error:', error)
    
    if (error.issues) {
      return c.json({ 
        error: 'Validation failed', 
        issues: error.issues 
      }, 400)
    }
    
    return c.json({ 
      error: 'Login failed', 
      message: error.message 
    }, 500)
  }
})

// Logout
app.post('/api/auth/logout', authMiddleware, async (c) => {
  const user = c.get('user')
  const userService = new UserService(c.env.DB)
  
  // Update user status
  await userService.updateUserStatus(user.id, false)
  
  return c.json({ success: true })
})

// Get current user
app.get('/api/auth/me', authMiddleware, async (c) => {
  const user = c.get('user')
  return c.json({ user })
})

// ============= USER PROFILE API =============

// Update profile
app.put('/api/profile', authMiddleware, async (c) => {
  try {
    const user = c.get('user')
    const body = await c.req.json()
    const updates = UpdateProfileSchema.parse(body)
    
    const userService = new UserService(c.env.DB)
    const updatedUser = await userService.updateUser(user.id, updates)
    
    if (!updatedUser) {
      return c.json({ error: 'User not found' }, 404)
    }
    
    return c.json({ success: true, user: updatedUser })
  } catch (error: any) {
    console.error('Profile update error:', error)
    
    if (error.issues) {
      return c.json({ 
        error: 'Validation failed', 
        issues: error.issues 
      }, 400)
    }
    
    return c.json({ 
      error: 'Profile update failed', 
      message: error.message 
    }, 500)
  }
})

// ============= MATCHING API =============

// Join matching queue
app.post('/api/matching/join', authMiddleware, async (c) => {
  try {
    const user = c.get('user')
    const { preferences } = await c.req.json()
    
    const id = c.env.MATCHING_QUEUE.idFromName('global')
    const queue = c.env.MATCHING_QUEUE.get(id)
    
    const response = await queue.fetch('http://queue/join', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        userId: user.id,
        userName: user.name,
        role: user.role,
        preferences: preferences || {}
      })
    })
    
    return c.json(await response.json())
  } catch (error: any) {
    console.error('Matching error:', error)
    return c.json({ 
      error: 'Failed to join queue', 
      message: error.message 
    }, 500)
  }
})

// Leave matching queue
app.post('/api/matching/leave', authMiddleware, async (c) => {
  try {
    const user = c.get('user')
    
    const id = c.env.MATCHING_QUEUE.idFromName('global')
    const queue = c.env.MATCHING_QUEUE.get(id)
    
    const response = await queue.fetch('http://queue/leave', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: user.id })
    })
    
    return c.json(await response.json())
  } catch (error: any) {
    console.error('Leave queue error:', error)
    return c.json({ 
      error: 'Failed to leave queue', 
      message: error.message 
    }, 500)
  }
})

// Get queue status
app.get('/api/matching/status', async (c) => {
  try {
    const id = c.env.MATCHING_QUEUE.idFromName('global')
    const queue = c.env.MATCHING_QUEUE.get(id)
    
    const response = await queue.fetch('http://queue/status')
    return c.json(await response.json())
  } catch (error: any) {
    console.error('Queue status error:', error)
    return c.json({ 
      error: 'Failed to get queue status', 
      message: error.message 
    }, 500)
  }
})

// ============= WEBSOCKET ENDPOINTS =============

// WebRTC signaling WebSocket
app.get('/ws/signaling/:roomId', (c) => {
  const roomId = c.req.param('roomId')
  
  const id = c.env.SIGNALING_SERVER.idFromName(roomId)
  const signalingServer = c.env.SIGNALING_SERVER.get(id)
  
  return signalingServer.fetch(c.req.raw)
})

// Matching queue WebSocket
app.get('/ws/matching', (c) => {
  const id = c.env.MATCHING_QUEUE.idFromName('global')
  const queue = c.env.MATCHING_QUEUE.get(id)
  
  return queue.fetch('http://queue/websocket')
})

// ============= CONVERSATION API =============

// Start conversation (creates room and records in database)
app.post('/api/conversations/start', authMiddleware, async (c) => {
  try {
    const user = c.get('user')
    const { partnerId, roomId } = await c.req.json()
    
    // Create conversation record
    const conversationId = crypto.randomUUID()
    
    const studentId = user.role === 'student' ? user.id : partnerId
    const ceoId = user.role === 'ceo' ? user.id : partnerId
    
    await c.env.DB.prepare(`
      INSERT INTO conversations (id, student_id, ceo_id, room_id, status)
      VALUES (?, ?, ?, ?, 'active')
    `).bind(conversationId, studentId, ceoId, roomId).run()
    
    return c.json({
      success: true,
      conversationId,
      roomId
    })
  } catch (error: any) {
    console.error('Start conversation error:', error)
    return c.json({ 
      error: 'Failed to start conversation', 
      message: error.message 
    }, 500)
  }
})

// End conversation
app.post('/api/conversations/:id/end', authMiddleware, async (c) => {
  try {
    const conversationId = c.req.param('id')
    const user = c.get('user')
    const { duration, rating, feedback } = await c.req.json()
    
    // Update conversation record
    const updateField = user.role === 'student' ? 'rating_student' : 'rating_ceo'
    const feedbackField = user.role === 'student' ? 'feedback_student' : 'feedback_ceo'
    
    await c.env.DB.prepare(`
      UPDATE conversations 
      SET ended_at = CURRENT_TIMESTAMP, 
          duration_seconds = ?, 
          ${updateField} = ?, 
          ${feedbackField} = ?,
          status = 'ended'
      WHERE id = ? AND (student_id = ? OR ceo_id = ?)
    `).bind(duration, rating, feedback, conversationId, user.id, user.id).run()
    
    return c.json({ success: true })
  } catch (error: any) {
    console.error('End conversation error:', error)
    return c.json({ 
      error: 'Failed to end conversation', 
      message: error.message 
    }, 500)
  }
})

// Get user's conversation history
app.get('/api/conversations', authMiddleware, async (c) => {
  try {
    const user = c.get('user')
    const limit = parseInt(c.req.query('limit') || '20')
    const offset = parseInt(c.req.query('offset') || '0')
    
    const conversations = await c.env.DB.prepare(`
      SELECT c.*, 
             s.name as student_name, s.university, s.major,
             ceo.name as ceo_name, ceo.company, ceo.position
      FROM conversations c
      JOIN users s ON c.student_id = s.id
      JOIN users ceo ON c.ceo_id = ceo.id
      WHERE c.student_id = ? OR c.ceo_id = ?
      ORDER BY c.started_at DESC
      LIMIT ? OFFSET ?
    `).bind(user.id, user.id, limit, offset).all()
    
    return c.json({ conversations: conversations.results })
  } catch (error: any) {
    console.error('Get conversations error:', error)
    return c.json({ 
      error: 'Failed to get conversations', 
      message: error.message 
    }, 500)
  }
})

// ============= DONATION API (Enhanced) =============

app.post('/api/donate', authMiddleware, async (c) => {
  try {
    const user = c.get('user')
    const { amount } = await c.req.json()
    
    // In production, integrate with Stripe or other payment processor
    // For now, just record the "donation" intent
    
    return c.json({
      success: true,
      message: `Thank you ${user.name} for your $${amount} donation!`,
      transactionId: `mock-${Date.now()}`,
      user: user.name
    })
  } catch (error: any) {
    console.error('Donation error:', error)
    return c.json({ 
      error: 'Donation failed', 
      message: error.message 
    }, 500)
  }
})

// Initialize database on first request
app.use(async (c, next) => {
  if (c.env.DB) {
    try {
      // Run migrations (in production, use proper migration system)
      // This is a simplified approach for development
      await c.env.DB.exec(`
        CREATE TABLE IF NOT EXISTS _migrations (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT UNIQUE,
          executed_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `)
      
      const migrationExists = await c.env.DB.prepare(`
        SELECT 1 FROM _migrations WHERE name = ?
      `).bind('0001_initial_schema').first()
      
      if (!migrationExists) {
        // Apply initial migration
        const migrationSQL = `
          -- This is a simplified version for development
          CREATE TABLE IF NOT EXISTS users (
            id TEXT PRIMARY KEY,
            email TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            name TEXT NOT NULL,
            role TEXT CHECK(role IN ('student', 'ceo')) NOT NULL,
            bio TEXT,
            company TEXT,
            position TEXT,
            industry TEXT,
            experience_years INTEGER,
            linkedin_url TEXT,
            website_url TEXT,
            avatar_url TEXT,
            university TEXT,
            major TEXT,
            graduation_year INTEGER,
            verification_status TEXT DEFAULT 'pending',
            is_active BOOLEAN DEFAULT TRUE,
            is_online BOOLEAN DEFAULT FALSE,
            last_seen DATETIME DEFAULT CURRENT_TIMESTAMP,
            matching_preferences TEXT,
            timezone TEXT DEFAULT 'UTC',
            languages TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            total_conversations INTEGER DEFAULT 0,
            average_rating REAL DEFAULT 0.0,
            total_rating_count INTEGER DEFAULT 0
          );
          
          CREATE TABLE IF NOT EXISTS conversations (
            id TEXT PRIMARY KEY,
            student_id TEXT NOT NULL,
            ceo_id TEXT NOT NULL,
            started_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            ended_at DATETIME,
            duration_seconds INTEGER,
            status TEXT DEFAULT 'active',
            rating_student INTEGER,
            rating_ceo INTEGER,
            feedback_student TEXT,
            feedback_ceo TEXT,
            room_id TEXT UNIQUE,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
          );
          
          CREATE TABLE IF NOT EXISTS user_sessions (
            id TEXT PRIMARY KEY,
            user_id TEXT NOT NULL,
            token_hash TEXT NOT NULL UNIQUE,
            expires_at DATETIME NOT NULL,
            ip_address TEXT,
            user_agent TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            last_used_at DATETIME DEFAULT CURRENT_TIMESTAMP
          );
          
          CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);
          CREATE INDEX IF NOT EXISTS idx_users_role ON users(role);
          CREATE INDEX IF NOT EXISTS idx_conversations_student_id ON conversations(student_id);
          CREATE INDEX IF NOT EXISTS idx_conversations_ceo_id ON conversations(ceo_id);
        `
        
        await c.env.DB.exec(migrationSQL)
        
        await c.env.DB.prepare(`
          INSERT INTO _migrations (name) VALUES (?)
        `).bind('0001_initial_schema').run()
        
        console.log('Database initialized successfully')
      }
    } catch (error) {
      console.error('Database initialization error:', error)
    }
  }
  
  await next()
})

export default app
