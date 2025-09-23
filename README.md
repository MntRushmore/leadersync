# ConvoConnect - CEO-Student Connection Platform

## Project Overview
- **Name**: ConvoConnect
- **Goal**: Connect students with CEOs and inspirational leaders through random video conversations
- **Style**: Black-and-white hand-drawn scribble design with playful animations
- **Inspiration**: Omegle-style matching but focused on professional mentorship

## URLs
- **Development**: https://3000-ireqcvp2vm2oywlg0guv1-6532622b.e2b.dev
- **GitHub**: Ready for GitHub push (setup required)

## Features Implemented ✅

### Core Pages
1. **Landing Page** (`/`) - Black-and-white scribble design with big CTA button
2. **Role Selection** (`/role-select`) - Choose between "Student" or "CEO/Leader" 
3. **Video Call Interface** (`/video-call`) - Mock WebRTC with chat, controls, and name tags
4. **Donation Page** (`/donation`) - Mock payment system with fake confirmations
5. **About Page** (`/about`) - Mission statement and team information

### Key Features
- **Scribble-Style Design**: Hand-drawn borders, buttons, and animations
- **Role-Based Matching**: Students paired with CEOs automatically
- **Video Call Simulation**: Mock WebRTC interface with working chat
- **Interactive Elements**: Hover effects, button animations, loading states
- **Mock Donations**: Fake payment flow with success confirmations
- **Responsive Design**: Works on mobile and desktop

### Technical Features
- **Hono Backend**: Lightweight Cloudflare Workers framework
- **JSX Rendering**: Server-side rendering with interactive client-side JS
- **Custom CSS**: Hand-drawn scribble effects and animations
- **WebRTC Placeholder**: Mock implementation ready for real WebRTC
- **Session Management**: Role persistence between pages

## Data Architecture
- **No Database**: Currently uses sessionStorage and mock data
- **Future Storage**: Ready for Cloudflare D1, KV, or external APIs
- **State Management**: Client-side session storage for user roles
- **API Endpoints**: `/api/match`, `/api/signal`, `/api/donate` (mock implementations)

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
- **Status**: ✅ Fully Functional Demo
- **Last Updated**: December 2024
- **Next Steps**: Real WebRTC implementation, user authentication, payments

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
- **Real WebRTC**: Implement actual peer-to-peer video calling
- **User Authentication**: Sign up/login system
- **Payment Integration**: Stripe or similar payment processor  
- **Database**: User profiles, conversation history, ratings
- **Mobile App**: React Native or Progressive Web App
- **Advanced Matching**: Industry-specific, skill-based pairing
- **Analytics**: Usage tracking and success metrics

## Design Philosophy
- **Authentic Conversations**: Focus on genuine human connections
- **Serendipity**: Embrace the magic of random encounters
- **Accessibility**: Break down barriers to mentorship
- **Playful Professionalism**: Serious purpose with approachable design

---

*"Where conversations change lives"* 🚀