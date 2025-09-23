// Authentication utilities for ConvoConnect
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { z } from 'zod'

// Validation schemas
export const RegisterSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  role: z.enum(['student', 'ceo'], { 
    errorMap: () => ({ message: 'Role must be either student or ceo' })
  }),
  // Role-specific fields
  company: z.string().optional(),
  position: z.string().optional(),
  university: z.string().optional(),
  major: z.string().optional(),
  graduationYear: z.number().optional(),
  industry: z.string().optional(),
  experienceYears: z.number().optional(),
})

export const LoginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required')
})

export const UpdateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  bio: z.string().optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  industry: z.string().optional(),
  experienceYears: z.number().optional(),
  university: z.string().optional(),
  major: z.string().optional(),
  graduationYear: z.number().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal('')),
  websiteUrl: z.string().url().optional().or(z.literal('')),
  companySize: z.enum(['startup', 'small', 'medium', 'large', 'enterprise']).optional(),
  timezone: z.string().optional(),
  languages: z.array(z.string()).optional(),
})

export interface User {
  id: string
  email: string
  name: string
  role: 'student' | 'ceo'
  bio?: string
  company?: string
  position?: string
  industry?: string
  experienceYears?: number
  university?: string
  major?: string
  graduationYear?: number
  linkedinUrl?: string
  websiteUrl?: string
  avatarUrl?: string
  verificationStatus: 'pending' | 'verified' | 'rejected'
  isActive: boolean
  isOnline: boolean
  lastSeen: string
  timezone?: string
  languages?: string[]
  totalConversations: number
  averageRating: number
  totalRatingCount: number
  createdAt: string
  updatedAt: string
  emailVerifiedAt?: string
}

export interface AuthSession {
  id: string
  userId: string
  tokenHash: string
  expiresAt: string
  ipAddress?: string
  userAgent?: string
  createdAt: string
  lastUsedAt: string
}

// Hash password using bcrypt
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 12
  return await bcrypt.hash(password, saltRounds)
}

// Verify password against hash
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash)
}

// Generate JWT token
export function generateToken(payload: any, secret: string, expiresIn: string = '7d'): string {
  return jwt.sign(payload, secret, { expiresIn })
}

// Verify JWT token
export function verifyToken(token: string, secret: string): any {
  try {
    return jwt.verify(token, secret)
  } catch (error) {
    return null
  }
}

// Generate secure random ID
export function generateId(): string {
  return crypto.randomUUID().replace(/-/g, '')
}

// Extract Bearer token from Authorization header
export function extractBearerToken(authHeader: string | undefined): string | null {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }
  return authHeader.substring(7)
}

// User database operations
export class UserService {
  constructor(private db: D1Database) {}

  async createUser(userData: z.infer<typeof RegisterSchema>): Promise<User> {
    const userId = generateId()
    const passwordHash = await hashPassword(userData.password)

    const user = await this.db.prepare(`
      INSERT INTO users (
        id, email, password_hash, name, role, company, position, 
        university, major, graduation_year, industry, experience_years
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      RETURNING *
    `).bind(
      userId,
      userData.email.toLowerCase(),
      passwordHash,
      userData.name,
      userData.role,
      userData.company || null,
      userData.position || null,
      userData.university || null,
      userData.major || null,
      userData.graduationYear || null,
      userData.industry || null,
      userData.experienceYears || null
    ).first()

    if (!user) {
      throw new Error('Failed to create user')
    }

    // Return user without password hash
    const { password_hash, ...userWithoutPassword } = user as any
    return this.formatUser(userWithoutPassword)
  }

  async findUserByEmail(email: string): Promise<(User & { passwordHash: string }) | null> {
    const user = await this.db.prepare(`
      SELECT * FROM users WHERE email = ? AND is_active = 1
    `).bind(email.toLowerCase()).first()

    if (!user) return null

    const { password_hash, ...userWithoutPassword } = user as any
    return {
      ...this.formatUser(userWithoutPassword),
      passwordHash: password_hash
    }
  }

  async findUserById(id: string): Promise<User | null> {
    const user = await this.db.prepare(`
      SELECT * FROM users WHERE id = ? AND is_active = 1
    `).bind(id).first()

    if (!user) return null

    const { password_hash, ...userWithoutPassword } = user as any
    return this.formatUser(userWithoutPassword)
  }

  async updateUser(id: string, updates: z.infer<typeof UpdateProfileSchema>): Promise<User | null> {
    const updateFields = []
    const values = []

    for (const [key, value] of Object.entries(updates)) {
      if (value !== undefined) {
        const dbKey = this.camelToSnake(key)
        updateFields.push(`${dbKey} = ?`)
        values.push(value)
      }
    }

    if (updateFields.length === 0) {
      return this.findUserById(id)
    }

    updateFields.push('updated_at = CURRENT_TIMESTAMP')
    values.push(id)

    await this.db.prepare(`
      UPDATE users SET ${updateFields.join(', ')} WHERE id = ?
    `).bind(...values).run()

    return this.findUserById(id)
  }

  async updateUserStatus(id: string, isOnline: boolean): Promise<void> {
    await this.db.prepare(`
      UPDATE users SET is_online = ?, last_seen = CURRENT_TIMESTAMP WHERE id = ?
    `).bind(isOnline, id).run()
  }

  async searchUsers(role: 'student' | 'ceo', filters?: {
    industry?: string
    experienceYears?: number
    isOnline?: boolean
  }): Promise<User[]> {
    let query = 'SELECT * FROM users WHERE role = ? AND is_active = 1 AND verification_status = "verified"'
    const params = [role]

    if (filters?.industry) {
      query += ' AND industry = ?'
      params.push(filters.industry)
    }

    if (filters?.experienceYears !== undefined) {
      query += ' AND experience_years >= ?'
      params.push(filters.experienceYears)
    }

    if (filters?.isOnline) {
      query += ' AND is_online = 1'
    }

    query += ' ORDER BY last_seen DESC LIMIT 50'

    const users = await this.db.prepare(query).bind(...params).all()
    
    return users.results.map(user => {
      const { password_hash, ...userWithoutPassword } = user as any
      return this.formatUser(userWithoutPassword)
    })
  }

  private formatUser(user: any): User {
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
      bio: user.bio,
      company: user.company,
      position: user.position,
      industry: user.industry,
      experienceYears: user.experience_years,
      university: user.university,
      major: user.major,
      graduationYear: user.graduation_year,
      linkedinUrl: user.linkedin_url,
      websiteUrl: user.website_url,
      avatarUrl: user.avatar_url,
      verificationStatus: user.verification_status,
      isActive: user.is_active,
      isOnline: user.is_online,
      lastSeen: user.last_seen,
      timezone: user.timezone,
      languages: user.languages ? JSON.parse(user.languages) : [],
      totalConversations: user.total_conversations,
      averageRating: user.average_rating,
      totalRatingCount: user.total_rating_count,
      createdAt: user.created_at,
      updatedAt: user.updated_at,
      emailVerifiedAt: user.email_verified_at
    }
  }

  private camelToSnake(str: string): string {
    return str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`)
  }
}

// Session management
export class SessionService {
  constructor(private db: D1Database, private jwtSecret?: string) {}

  async createSession(userId: string, ipAddress?: string, userAgent?: string): Promise<string> {
    const sessionId = generateId()
    const secret = this.jwtSecret || 'convoconnect-fallback-secret'
    const token = generateToken({ sessionId, userId }, secret)
    const tokenHash = await hashPassword(token)
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000) // 7 days

    await this.db.prepare(`
      INSERT INTO user_sessions (id, user_id, token_hash, expires_at, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(sessionId, userId, tokenHash, expiresAt.toISOString(), ipAddress, userAgent).run()

    return token
  }

  async validateSession(token: string): Promise<User | null> {
    const secret = this.jwtSecret || 'convoconnect-fallback-secret'
    const payload = verifyToken(token, secret)
    if (!payload || !payload.sessionId) {
      return null
    }

    const session = await this.db.prepare(`
      SELECT * FROM user_sessions WHERE id = ? AND expires_at > CURRENT_TIMESTAMP
    `).bind(payload.sessionId).first()

    if (!session) {
      return null
    }

    // Update last used timestamp
    await this.db.prepare(`
      UPDATE user_sessions SET last_used_at = CURRENT_TIMESTAMP WHERE id = ?
    `).bind(payload.sessionId).run()

    // Get user
    const userService = new UserService(this.db)
    return userService.findUserById(session.user_id as string)
  }

  async deleteSession(sessionId: string): Promise<void> {
    await this.db.prepare(`
      DELETE FROM user_sessions WHERE id = ?
    `).bind(sessionId).run()
  }

  async deleteAllUserSessions(userId: string): Promise<void> {
    await this.db.prepare(`
      DELETE FROM user_sessions WHERE user_id = ?
    `).bind(userId).run()
  }

  async cleanupExpiredSessions(): Promise<void> {
    await this.db.prepare(`
      DELETE FROM user_sessions WHERE expires_at < CURRENT_TIMESTAMP
    `).run()
  }
}