# ConvoConnect - CEO-Student Connection Platform

## Project Overview
- **Name**: ConvoConnect
- **Goal**: Connect students with CEOs and inspirational leaders through random video conversations
- **Style**: Black-and-white hand-drawn scribble design with playful animations
- **Inspiration**: Omegle-style matching but focused on professional mentorship

## URLs
- **Production**: https://0dab8b96.leadersync.pages.dev/
- **Production (Alternative)**: https://leadersync.pages.dev/
- **GitHub**: https://github.com/MntRushmore/leadersync

## Features Implemented ✅

### Authentication System
1. **User Registration** (`/register`) - Complete signup with role selection (Student/CEO)
2. **User Login** (`/login`) - JWT-based authentication with bcrypt password hashing  
3. **User Dashboard** (`/dashboard`) - Role-specific dashboard with profile management
4. **Profile Pages** (`/profile`) - User profile with industry, bio, and contact info

### Core Platform Features
1. **Landing Page** (`/`) - Black-and-white scribble design with call-to-action
2. **Real WebRTC Video Calls** - Peer-to-peer video calling with camera/microphone controls
3. **Matching System** - Real-time queue system pairing students with leaders
4. **Session Management** - JWT tokens, secure authentication, session persistence

### Technical Features
- **Real WebRTC Implementation**: Browser-based video calling with simple-peer
- **JWT Authentication**: Secure token-based auth with bcrypt password hashing
- **Cloudflare D1 Database**: Production SQLite database with full schema
- **WebSocket Signaling**: Real-time signaling server for WebRTC coordination  
- **Durable Objects**: Cloudflare-based matching queue and signaling infrastructure
- **Role-Based Access Control**: Student and CEO user types with appropriate permissions

## Data Architecture
- **Database**: Cloudflare D1 SQLite (leadersync-production)
- **Tables**: users, conversations, sessions with proper relationships and indexing
- **Authentication**: JWT tokens with 7-day expiration, secure password hashing
- **Real-time**: WebSocket connections for video call signaling
- **Migrations**: Full database schema with proper foreign keys and constraints

## User Journey
1. **Land on Homepage** → See scribble design and mission
2. **Choose Role** → Select "Student" or "CEO/Leader"  
3. **Get Matched** → Automatic pairing (2-second simulation)
4. **Video Chat** → Mock video call with working text chat
5. **End Call** → Donation request with fake payment options
6. **Repeat** → Option to start new conversation

## Tech Stack
- **Backend**: Hono + TypeScript
- **Frontend**: Server-rendered JSX + Vanilla JavaScript
- **Styling**: TailwindCSS + Custom scribble CSS
- **Fonts**: Kalam (handwritten) + Architects Daughter (sketch)
- **Deployment**: Cloudflare Pages
- **Development**: Wrangler + PM2

## Development Status
- **Status**: ✅ Production-Grade Platform LIVE
- **Deployment**: ✅ Active on Cloudflare Pages
- **Database**: ✅ Cloudflare D1 production database configured
- **Authentication**: ✅ Full JWT authentication system
- **WebRTC**: ✅ Real peer-to-peer video calling implemented
- **Last Updated**: September 23, 2025
- **Next Steps**: Mobile optimization, payment integration, advanced matching

## Quick Start

```bash
# Install dependencies
npm install

# Build the project  
npm run build

# Start development server
npm run dev:sandbox

# Or use PM2 (recommended for sandbox)
pm2 start ecosystem.config.cjs

# Test locally
curl http://localhost:3000
```

## Deployment Ready Features
- **Cloudflare Pages**: Optimized for edge deployment
- **Static Assets**: Properly served from `/static/*` path  
- **Environment Variables**: Ready for production secrets
- **Performance**: Lightweight bundle with CDN resources

## Future Enhancements
- **Payment Integration**: Stripe integration for donations and premium features
- **Advanced Matching**: Industry-specific, skill-based, and location-based pairing
- **Mobile Optimization**: Enhanced mobile experience and PWA features
- **Analytics Dashboard**: Usage tracking, success metrics, and conversation analytics  
- **Rating System**: Post-conversation feedback and leader ratings
- **Conversation History**: Chat logs and conversation replay features
- **Advanced Security**: Two-factor authentication and enhanced privacy controls
- **API Integration**: External calendar sync, CRM integration, and notification systems

## Design Philosophy
- **Authentic Conversations**: Focus on genuine human connections
- **Serendipity**: Embrace the magic of random encounters
- **Accessibility**: Break down barriers to mentorship
- **Playful Professionalism**: Serious purpose with approachable design

---

*"Where conversations change lives"* 🚀