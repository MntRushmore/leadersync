// WebRTC Signaling Server using Cloudflare Durable Objects

export interface WebRTCMessage {
  type: 'offer' | 'answer' | 'ice-candidate' | 'join-room' | 'leave-room' | 'user-joined' | 'user-left' | 'chat-message'
  roomId: string
  userId: string
  userName: string
  userRole: 'student' | 'ceo'
  data?: any
  message?: string
}

// Durable Object for WebRTC signaling
export class SignalingServer {
  private sessions: Map<string, WebSocket> = new Map()
  private rooms: Map<string, Set<string>> = new Map()
  private userInfo: Map<string, { userId: string, userName: string, userRole: 'student' | 'ceo' }> = new Map()

  constructor(controller: any, env: Env) {
    // Cloudflare Durable Object constructor
  }

  async fetch(request: Request): Promise<Response> {
    const webSocketPair = new WebSocketPair()
    const [client, server] = Object.values(webSocketPair)

    // Accept the WebSocket connection
    server.accept()

    // Handle WebSocket events
    server.addEventListener('message', (event) => {
      this.handleMessage(server, event.data as string)
    })

    server.addEventListener('close', () => {
      this.handleDisconnect(server)
    })

    server.addEventListener('error', (error) => {
      console.error('WebSocket error:', error)
      this.handleDisconnect(server)
    })

    return new Response(null, {
      status: 101,
      webSocket: client,
    })
  }

  private handleMessage(ws: WebSocket, data: string) {
    try {
      const message: WebRTCMessage = JSON.parse(data)
      
      switch (message.type) {
        case 'join-room':
          this.handleJoinRoom(ws, message)
          break
        case 'leave-room':
          this.handleLeaveRoom(ws, message)
          break
        case 'offer':
        case 'answer':
        case 'ice-candidate':
          this.handleWebRTCSignaling(ws, message)
          break
        case 'chat-message':
          this.handleChatMessage(ws, message)
          break
        default:
          console.warn('Unknown message type:', message.type)
      }
    } catch (error) {
      console.error('Error parsing WebSocket message:', error)
      ws.send(JSON.stringify({
        type: 'error',
        message: 'Invalid message format'
      }))
    }
  }

  private handleJoinRoom(ws: WebSocket, message: WebRTCMessage) {
    const { roomId, userId, userName, userRole } = message
    
    // Store session info
    this.sessions.set(userId, ws)
    this.userInfo.set(userId, { userId, userName, userRole })
    
    // Add user to room
    if (!this.rooms.has(roomId)) {
      this.rooms.set(roomId, new Set())
    }
    
    const room = this.rooms.get(roomId)!
    room.add(userId)
    
    console.log(`User ${userName} (${userRole}) joined room ${roomId}`)
    
    // Notify other users in the room
    const otherUsers = Array.from(room).filter(id => id !== userId)
    for (const otherUserId of otherUsers) {
      const otherWs = this.sessions.get(otherUserId)
      const otherUserInfo = this.userInfo.get(otherUserId)
      
      if (otherWs && otherUserInfo) {
        // Tell the new user about existing users
        ws.send(JSON.stringify({
          type: 'user-joined',
          roomId,
          userId: otherUserId,
          userName: otherUserInfo.userName,
          userRole: otherUserInfo.userRole
        }))
        
        // Tell existing users about the new user
        otherWs.send(JSON.stringify({
          type: 'user-joined',
          roomId,
          userId,
          userName,
          userRole
        }))
      }
    }
    
    // Send join confirmation
    ws.send(JSON.stringify({
      type: 'joined-room',
      roomId,
      userId,
      participants: otherUsers.length + 1
    }))
  }

  private handleLeaveRoom(ws: WebSocket, message: WebRTCMessage) {
    const { roomId, userId } = message
    
    this.removeUserFromRoom(userId, roomId)
    
    // Send leave confirmation
    ws.send(JSON.stringify({
      type: 'left-room',
      roomId,
      userId
    }))
  }

  private handleWebRTCSignaling(ws: WebSocket, message: WebRTCMessage) {
    const { roomId, userId } = message
    const room = this.rooms.get(roomId)
    
    if (!room || !room.has(userId)) {
      ws.send(JSON.stringify({
        type: 'error',
        message: 'User not in room'
      }))
      return
    }
    
    // Forward signaling message to all other users in the room
    const otherUsers = Array.from(room).filter(id => id !== userId)
    for (const otherUserId of otherUsers) {
      const otherWs = this.sessions.get(otherUserId)
      if (otherWs) {
        otherWs.send(JSON.stringify(message))
      }
    }
  }

  private handleChatMessage(ws: WebSocket, message: WebRTCMessage) {
    const { roomId, userId, message: chatMessage } = message
    const room = this.rooms.get(roomId)
    const userInfo = this.userInfo.get(userId)
    
    if (!room || !room.has(userId) || !userInfo) {
      ws.send(JSON.stringify({
        type: 'error',
        message: 'Cannot send message'
      }))
      return
    }
    
    // Forward chat message to all users in the room
    const chatBroadcast = {
      type: 'chat-message',
      roomId,
      userId,
      userName: userInfo.userName,
      userRole: userInfo.userRole,
      message: chatMessage,
      timestamp: new Date().toISOString()
    }
    
    for (const participantId of room) {
      const participantWs = this.sessions.get(participantId)
      if (participantWs) {
        participantWs.send(JSON.stringify(chatBroadcast))
      }
    }
  }

  private handleDisconnect(ws: WebSocket) {
    // Find and remove the disconnected user
    let disconnectedUserId: string | null = null
    
    for (const [userId, userWs] of this.sessions.entries()) {
      if (userWs === ws) {
        disconnectedUserId = userId
        break
      }
    }
    
    if (disconnectedUserId) {
      console.log(`User ${disconnectedUserId} disconnected`)
      
      // Remove from all rooms
      for (const [roomId, room] of this.rooms.entries()) {
        if (room.has(disconnectedUserId)) {
          this.removeUserFromRoom(disconnectedUserId, roomId)
        }
      }
      
      // Clean up
      this.sessions.delete(disconnectedUserId)
      this.userInfo.delete(disconnectedUserId)
    }
  }

  private removeUserFromRoom(userId: string, roomId: string) {
    const room = this.rooms.get(roomId)
    if (!room) return
    
    room.delete(userId)
    const userInfo = this.userInfo.get(userId)
    
    // Notify other users in the room
    for (const otherUserId of room) {
      const otherWs = this.sessions.get(otherUserId)
      if (otherWs) {
        otherWs.send(JSON.stringify({
          type: 'user-left',
          roomId,
          userId,
          userName: userInfo?.userName || 'Unknown',
          userRole: userInfo?.userRole || 'student'
        }))
      }
    }
    
    // Clean up empty rooms
    if (room.size === 0) {
      this.rooms.delete(roomId)
    }
  }
}

// Matching Queue Durable Object for real-time user pairing
export class MatchingQueue {
  private studentQueue: Array<{
    userId: string
    userName: string
    preferences: any
    joinedAt: number
  }> = []
  
  private ceoQueue: Array<{
    userId: string
    userName: string
    preferences: any
    joinedAt: number
  }> = []

  private waitingSessions: Map<string, WebSocket> = new Map()

  constructor(controller: any, env: Env) {
    // Cloudflare Durable Object constructor
  }

  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    
    if (url.pathname === '/websocket') {
      const webSocketPair = new WebSocketPair()
      const [client, server] = Object.values(webSocketPair)

      server.accept()
      
      server.addEventListener('message', (event) => {
        this.handleQueueMessage(server, event.data as string)
      })

      server.addEventListener('close', () => {
        this.handleQueueDisconnect(server)
      })

      return new Response(null, {
        status: 101,
        webSocket: client,
      })
    }

    // REST API for queue operations
    if (request.method === 'POST' && url.pathname === '/join') {
      const { userId, userName, role, preferences } = await request.json()
      return this.joinQueue(userId, userName, role, preferences)
    }

    if (request.method === 'POST' && url.pathname === '/leave') {
      const { userId } = await request.json()
      return this.leaveQueue(userId)
    }

    if (request.method === 'GET' && url.pathname === '/status') {
      return new Response(JSON.stringify({
        studentsInQueue: this.studentQueue.length,
        ceosInQueue: this.ceoQueue.length
      }), {
        headers: { 'Content-Type': 'application/json' }
      })
    }

    return new Response('Not found', { status: 404 })
  }

  private async joinQueue(userId: string, userName: string, role: 'student' | 'ceo', preferences: any): Promise<Response> {
    const queueEntry = {
      userId,
      userName,
      preferences: preferences || {},
      joinedAt: Date.now()
    }

    if (role === 'student') {
      // Check if there's a CEO available
      if (this.ceoQueue.length > 0) {
        const ceo = this.ceoQueue.shift()!
        return this.createMatch(queueEntry, ceo, 'student-ceo')
      } else {
        // Add to student queue
        this.studentQueue.push(queueEntry)
        return new Response(JSON.stringify({
          status: 'queued',
          position: this.studentQueue.length,
          queueType: 'student'
        }), {
          headers: { 'Content-Type': 'application/json' }
        })
      }
    } else {
      // Check if there's a student available
      if (this.studentQueue.length > 0) {
        const student = this.studentQueue.shift()!
        return this.createMatch(student, queueEntry, 'student-ceo')
      } else {
        // Add to CEO queue
        this.ceoQueue.push(queueEntry)
        return new Response(JSON.stringify({
          status: 'queued',
          position: this.ceoQueue.length,
          queueType: 'ceo'
        }), {
          headers: { 'Content-Type': 'application/json' }
        })
      }
    }
  }

  private async leaveQueue(userId: string): Promise<Response> {
    // Remove from both queues
    this.studentQueue = this.studentQueue.filter(user => user.userId !== userId)
    this.ceoQueue = this.ceoQueue.filter(user => user.userId !== userId)
    
    // Remove from waiting sessions
    this.waitingSessions.delete(userId)

    return new Response(JSON.stringify({ status: 'left' }), {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  private createMatch(student: any, ceo: any, matchType: string): Response {
    const roomId = crypto.randomUUID()
    const match = {
      roomId,
      matchType,
      student: {
        userId: student.userId,
        userName: student.userName
      },
      ceo: {
        userId: ceo.userId,
        userName: ceo.userName
      },
      createdAt: new Date().toISOString()
    }

    console.log('Created match:', match)

    // Notify both users via WebSocket if they're connected
    const studentWs = this.waitingSessions.get(student.userId)
    const ceoWs = this.waitingSessions.get(ceo.userId)

    if (studentWs) {
      studentWs.send(JSON.stringify({
        type: 'match-found',
        match,
        yourRole: 'student',
        partnerRole: 'ceo'
      }))
    }

    if (ceoWs) {
      ceoWs.send(JSON.stringify({
        type: 'match-found',
        match,
        yourRole: 'ceo',
        partnerRole: 'student'
      }))
    }

    return new Response(JSON.stringify({
      status: 'matched',
      match
    }), {
      headers: { 'Content-Type': 'application/json' }
    })
  }

  private handleQueueMessage(ws: WebSocket, data: string) {
    try {
      const message = JSON.parse(data)
      
      if (message.type === 'register') {
        const { userId } = message
        this.waitingSessions.set(userId, ws)
        
        ws.send(JSON.stringify({
          type: 'registered',
          userId
        }))
      }
    } catch (error) {
      console.error('Error handling queue message:', error)
    }
  }

  private handleQueueDisconnect(ws: WebSocket) {
    // Remove from waiting sessions
    for (const [userId, userWs] of this.waitingSessions.entries()) {
      if (userWs === ws) {
        this.waitingSessions.delete(userId)
        break
      }
    }
  }
}

// Types for Cloudflare environment
export interface Env {
  DB: D1Database
  SIGNALING_SERVER: DurableObjectNamespace
  MATCHING_QUEUE: DurableObjectNamespace
  AI?: any
}