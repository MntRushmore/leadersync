// src/server-entry.ts
import { handle } from "@hono/node-server/vercel";

// src/index.tsx
import { Hono } from "hono";
import { cors } from "hono/cors";
import { getCookie } from "hono/cookie";

// src/renderer.tsx
import { jsxRenderer } from "hono/jsx-renderer";
import { jsx, jsxs } from "hono/jsx/jsx-runtime";
var renderer = jsxRenderer(({ children }) => {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxs("head", { children: [
      /* @__PURE__ */ jsx("meta", { charset: "UTF-8" }),
      /* @__PURE__ */ jsx("meta", { name: "viewport", content: "width=device-width, initial-scale=1.0" }),
      /* @__PURE__ */ jsx("title", { children: "MentorMatch - Career Advice & Mentorship for Students | Find a Mentor" }),
      /* @__PURE__ */ jsx("meta", { name: "description", content: "Get free career advice and professional mentorship from CEOs and industry leaders. MentorMatch connects college students with mentors for one-on-one video tutoring, career guidance, and professional development." }),
      /* @__PURE__ */ jsx("meta", { name: "keywords", content: "career advice, find a mentor, career guidance, student mentorship, professional development, career coaching, online tutoring, career success, talk to a CEO, mentorship program, career growth, career planning, leadership coaching, career advice for college students, building a successful career, one on one mentoring, virtual mentoring, career counseling, professional mentoring, executive coaching" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }),
      /* @__PURE__ */ jsx("link", { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" }),
      /* @__PURE__ */ jsx("link", { href: "https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Architects+Daughter&display=swap", rel: "stylesheet" }),
      /* @__PURE__ */ jsx("script", { src: "https://cdn.tailwindcss.com" }),
      /* @__PURE__ */ jsx("link", { href: "/static/style.css", rel: "stylesheet" }),
      /* @__PURE__ */ jsx("script", { dangerouslySetInnerHTML: {
        __html: `
            tailwind.config = {
              theme: {
                extend: {
                  fontFamily: {
                    'handwritten': ['Kalam', 'cursive'],
                    'sketch': ['Architects Daughter', 'cursive'],
                  },
                  animation: {
                    'wiggle': 'wiggle 1s ease-in-out infinite',
                    'scribble': 'scribble 0.3s ease-in-out',
                    'bounce-slow': 'bounce 2s infinite',
                  }
                }
              }
            }
          `
      } })
    ] }),
    /* @__PURE__ */ jsxs("body", { class: "bg-white text-black font-handwritten overflow-x-hidden", children: [
      children,
      /* @__PURE__ */ jsx("script", { src: "/static/app.js" })
    ] })
  ] });
});

// src/pages/landing.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "hono/jsx/jsx-runtime";
function LandingPage() {
  return /* @__PURE__ */ jsxs2("div", { class: "min-h-screen bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs2("div", { class: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx2("svg", { class: "absolute top-10 left-10 w-32 h-32 opacity-10", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx2("path", { d: "M10,50 Q30,10 50,50 Q70,90 90,50", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-bounce-slow" }) }),
      /* @__PURE__ */ jsx2("svg", { class: "absolute top-32 right-20 w-24 h-24 opacity-10", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx2("circle", { cx: "50", cy: "50", r: "40", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-wiggle" }) }),
      /* @__PURE__ */ jsx2("svg", { class: "absolute bottom-20 left-1/4 w-40 h-20 opacity-10", viewBox: "0 0 100 50", children: /* @__PURE__ */ jsx2("path", { d: "M5,25 Q25,5 45,25 Q65,45 85,25", stroke: "black", "stroke-width": "2", fill: "none" }) })
    ] }),
    /* @__PURE__ */ jsxs2("div", { class: "relative z-10 container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxs2("header", { class: "text-center mb-16", children: [
        /* @__PURE__ */ jsx2("div", { class: "scribble-border inline-block p-6 mb-8", children: /* @__PURE__ */ jsx2("h1", { class: "text-5xl md:text-7xl font-bold font-sketch transform rotate-1 hover:rotate-0 transition-transform duration-300", children: "MentorMatch" }) }),
        /* @__PURE__ */ jsx2("p", { class: "text-xl md:text-2xl font-handwritten max-w-2xl mx-auto transform -rotate-1 hover:rotate-0 transition-transform duration-300", children: "Free career advice and mentorship from CEOs and industry leaders" })
      ] }),
      /* @__PURE__ */ jsxs2("div", { class: "mb-12 max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsx2("div", { class: "scribble-border-large overflow-hidden", children: /* @__PURE__ */ jsx2(
          "img",
          {
            src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80",
            alt: "Students getting career advice and tutoring from a professional mentor",
            class: "w-full h-64 md:h-80 object-cover"
          }
        ) }),
        /* @__PURE__ */ jsx2("p", { class: "text-center font-handwritten text-sm text-gray-500 mt-2 transform -rotate-1", children: "One-on-one career coaching and mentorship that drives real career success." })
      ] }),
      /* @__PURE__ */ jsx2("div", { class: "text-center mb-16", children: /* @__PURE__ */ jsxs2("div", { class: "scribble-border-large inline-block p-8 mb-8 bg-gray-50", children: [
        /* @__PURE__ */ jsx2("h2", { class: "text-3xl md:text-4xl font-bold font-sketch mb-6 transform rotate-1", children: "Get career guidance from real industry leaders" }),
        /* @__PURE__ */ jsx2("p", { class: "text-lg font-handwritten mb-8 max-w-xl mx-auto", children: "Whether you're a college student seeking career advice or a leader ready to mentor, start building a successful career through one-on-one professional mentorship." }),
        /* @__PURE__ */ jsx2(
          "button",
          {
            onclick: "window.location.href='/role-select'",
            class: "scribble-button text-2xl md:text-3xl font-bold font-sketch px-12 py-6 transform hover:scale-105 hover:rotate-1 transition-all duration-300 bg-black text-white hover:bg-gray-800",
            children: "Start a Conversation"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs2("div", { class: "grid md:grid-cols-3 gap-8 mb-16", children: [
        /* @__PURE__ */ jsxs2("div", { class: "scribble-card p-6 text-center transform hover:rotate-1 transition-transform duration-300", children: [
          /* @__PURE__ */ jsx2(
            "img",
            {
              src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
              alt: "One-on-one career coaching session between a mentor and student",
              class: "w-full h-40 object-cover rounded mb-4",
              style: "border-radius: 10px 18px 14px 20px"
            }
          ),
          /* @__PURE__ */ jsx2("h3", { class: "text-xl font-bold font-sketch mb-3", children: "Find a Mentor" }),
          /* @__PURE__ */ jsx2("p", { class: "font-handwritten", children: "Smart mentor matching pairs college students with CEOs and industry leaders for career guidance." })
        ] }),
        /* @__PURE__ */ jsxs2("div", { class: "scribble-card p-6 text-center transform hover:-rotate-1 transition-transform duration-300", children: [
          /* @__PURE__ */ jsx2(
            "img",
            {
              src: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&q=80",
              alt: "Student in an online video tutoring and career coaching session",
              class: "w-full h-40 object-cover rounded mb-4",
              style: "border-radius: 10px 18px 14px 20px"
            }
          ),
          /* @__PURE__ */ jsx2("h3", { class: "text-xl font-bold font-sketch mb-3", children: "Video Mentoring" }),
          /* @__PURE__ */ jsx2("p", { class: "font-handwritten", children: "Live one-on-one video tutoring sessions for career advice and professional development." })
        ] }),
        /* @__PURE__ */ jsxs2("div", { class: "scribble-card p-6 text-center transform hover:rotate-1 transition-transform duration-300", children: [
          /* @__PURE__ */ jsx2(
            "img",
            {
              src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80",
              alt: "Students achieving career success through professional mentorship and tutoring",
              class: "w-full h-40 object-cover rounded mb-4",
              style: "border-radius: 10px 18px 14px 20px"
            }
          ),
          /* @__PURE__ */ jsx2("h3", { class: "text-xl font-bold font-sketch mb-3", children: "Career Growth" }),
          /* @__PURE__ */ jsx2("p", { class: "font-handwritten", children: "Build a successful career with mentorship that drives long-term career growth and professional success." })
        ] })
      ] }),
      /* @__PURE__ */ jsx2("div", { class: "text-center mb-16", children: /* @__PURE__ */ jsxs2("div", { class: "scribble-border inline-block p-6 max-w-3xl", children: [
        /* @__PURE__ */ jsx2("h2", { class: "text-2xl font-bold font-sketch mb-4 transform -rotate-1", children: "Our Mission: Career Mentorship for All" }),
        /* @__PURE__ */ jsx2(
          "img",
          {
            src: "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=700&q=80",
            alt: "Diverse group of college students in a career development tutoring session",
            class: "w-full h-48 object-cover rounded mb-4",
            style: "border-radius: 12px 20px 16px 24px"
          }
        ),
        /* @__PURE__ */ jsx2("p", { class: "text-lg font-handwritten leading-relaxed", children: "We believe every student deserves access to career counseling and professional mentoring from successful leaders. MentorMatch makes career guidance accessible by connecting students with executive coaches and industry mentors who help with career planning, professional development, and building a successful career path." })
      ] }) }),
      /* @__PURE__ */ jsxs2("footer", { class: "text-center border-t-2 border-black border-dashed pt-8", children: [
        /* @__PURE__ */ jsxs2("div", { class: "flex justify-center space-x-8 mb-4", children: [
          /* @__PURE__ */ jsx2("a", { href: "/about", class: "font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform", children: "About Us" }),
          /* @__PURE__ */ jsx2("a", { href: "#", class: "font-handwritten text-lg hover:underline transform hover:-rotate-1 transition-transform", children: "Contact" }),
          /* @__PURE__ */ jsx2("a", { href: "#", class: "font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform", children: "Privacy" })
        ] }),
        /* @__PURE__ */ jsx2("p", { class: "font-handwritten text-sm transform -rotate-1", children: "\xA9 2024 MentorMatch - Building bridges through conversation" })
      ] })
    ] })
  ] });
}

// src/pages/login.tsx
import { jsx as jsx3, jsxs as jsxs3 } from "hono/jsx/jsx-runtime";
function LoginPage() {
  return /* @__PURE__ */ jsxs3("div", { class: "min-h-screen bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs3("div", { class: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx3("svg", { class: "absolute top-10 left-10 w-32 h-32 opacity-10", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx3("path", { d: "M10,50 Q30,10 50,50 Q70,90 90,50", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-bounce-slow" }) }),
      /* @__PURE__ */ jsx3("svg", { class: "absolute bottom-20 right-20 w-24 h-24 opacity-10", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx3("circle", { cx: "50", cy: "50", r: "40", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-wiggle" }) })
    ] }),
    /* @__PURE__ */ jsxs3("div", { class: "relative z-10 container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxs3("div", { class: "text-center mb-12", children: [
        /* @__PURE__ */ jsx3("a", { href: "/", class: "inline-block scribble-border p-3 mb-8 hover:rotate-1 transition-transform", children: /* @__PURE__ */ jsx3("h1", { class: "text-3xl font-bold font-sketch", children: "MentorMatch" }) }),
        /* @__PURE__ */ jsxs3("div", { class: "scribble-border-large inline-block p-6", children: [
          /* @__PURE__ */ jsx3("h2", { class: "text-4xl md:text-5xl font-bold font-sketch mb-4 transform rotate-1", children: "Welcome Back! \u{1F44B}" }),
          /* @__PURE__ */ jsx3("p", { class: "text-xl font-handwritten max-w-2xl mx-auto", children: "Sign in to continue your career mentorship and professional development journey" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs3("div", { class: "max-w-md mx-auto", children: [
        /* @__PURE__ */ jsxs3("div", { class: "scribble-card-large p-8 bg-gray-50", children: [
          /* @__PURE__ */ jsxs3("form", { id: "loginForm", class: "space-y-6", children: [
            /* @__PURE__ */ jsxs3("div", { children: [
              /* @__PURE__ */ jsx3("label", { class: "block font-sketch text-lg mb-2", for: "email", children: "Email Address" }),
              /* @__PURE__ */ jsx3(
                "input",
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  required: true,
                  class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid focus:rotate-1 transition-transform",
                  placeholder: "your@email.com"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs3("div", { children: [
              /* @__PURE__ */ jsx3("label", { class: "block font-sketch text-lg mb-2", for: "password", children: "Password" }),
              /* @__PURE__ */ jsx3(
                "input",
                {
                  type: "password",
                  id: "password",
                  name: "password",
                  required: true,
                  class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid focus:rotate-1 transition-transform",
                  placeholder: "Enter your password"
                }
              )
            ] }),
            /* @__PURE__ */ jsx3("div", { id: "errorMessage", class: "hidden p-3 bg-red-100 border-2 border-red-400 border-dashed rounded-lg", children: /* @__PURE__ */ jsx3("p", { class: "font-handwritten text-red-700 text-sm" }) }),
            /* @__PURE__ */ jsxs3(
              "button",
              {
                type: "submit",
                id: "loginButton",
                class: "w-full scribble-button p-4 font-sketch text-xl hover:rotate-1 transition-transform bg-blue-200 hover:bg-blue-300",
                children: [
                  /* @__PURE__ */ jsx3("span", { id: "loginButtonText", children: "Sign In" }),
                  /* @__PURE__ */ jsxs3("span", { id: "loginLoader", class: "hidden", children: [
                    /* @__PURE__ */ jsx3("svg", { class: "animate-spin inline-block w-5 h-5 mr-2", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx3("circle", { cx: "50", cy: "50", r: "40", stroke: "black", "stroke-width": "4", fill: "none", "stroke-dasharray": "60 40" }) }),
                    "Signing in..."
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsx3("div", { class: "mt-6 text-center", children: /* @__PURE__ */ jsx3("a", { href: "#", class: "font-handwritten text-gray-600 hover:text-black hover:underline", children: "Forgot your password?" }) })
        ] }),
        /* @__PURE__ */ jsx3("div", { class: "text-center mt-8", children: /* @__PURE__ */ jsx3("div", { class: "scribble-border inline-block p-4", children: /* @__PURE__ */ jsxs3("p", { class: "font-handwritten", children: [
          "New to MentorMatch?",
          " ",
          /* @__PURE__ */ jsx3("a", { href: "/register", class: "font-sketch font-bold hover:underline transform hover:rotate-1 inline-block transition-transform", children: "Create an account" })
        ] }) }) }),
        /* @__PURE__ */ jsx3("div", { class: "mt-8", children: /* @__PURE__ */ jsxs3("div", { class: "scribble-card p-4 bg-yellow-50", children: [
          /* @__PURE__ */ jsx3("h3", { class: "font-sketch text-lg mb-3 text-center", children: "\u{1F9EA} Demo Accounts" }),
          /* @__PURE__ */ jsxs3("div", { class: "space-y-2 font-handwritten text-sm", children: [
            /* @__PURE__ */ jsxs3("p", { children: [
              /* @__PURE__ */ jsx3("strong", { children: "Student:" }),
              " student@demo.com / password123"
            ] }),
            /* @__PURE__ */ jsxs3("p", { children: [
              /* @__PURE__ */ jsx3("strong", { children: "CEO:" }),
              " ceo@demo.com / password123"
            ] })
          ] }),
          /* @__PURE__ */ jsxs3("div", { class: "flex space-x-2 mt-4", children: [
            /* @__PURE__ */ jsx3("button", { onclick: "loginAsDemo('student')", class: "flex-1 scribble-button p-2 font-sketch text-sm bg-green-100 hover:bg-green-200", children: "Login as Student" }),
            /* @__PURE__ */ jsx3("button", { onclick: "loginAsDemo('ceo')", class: "flex-1 scribble-button p-2 font-sketch text-sm bg-purple-100 hover:bg-purple-200", children: "Login as CEO" })
          ] })
        ] }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx3("script", { dangerouslySetInnerHTML: {
      __html: `
        document.getElementById('loginForm').addEventListener('submit', async function(e) {
          e.preventDefault()
          
          const email = document.getElementById('email').value
          const password = document.getElementById('password').value
          
          if (!email || !password) {
            showError('Please fill in all fields')
            return
          }
          
          setLoading(true)
          
          try {
            const response = await fetch('/api/auth/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({ email, password })
            })
            
            const data = await response.json()
            
            if (response.ok && data.success) {
              // Store token in localStorage and cookie
              localStorage.setItem('auth-token', data.token)
              document.cookie = 'auth-token=' + data.token + '; path=/; max-age=604800' // 7 days
              
              // Store user info
              localStorage.setItem('user', JSON.stringify(data.user))
              
              // Redirect to dashboard
              window.location.href = '/dashboard'
            } else {
              showError(data.error || 'Login failed')
            }
          } catch (error) {
            console.error('Login error:', error)
            showError('Network error. Please try again.')
          } finally {
            setLoading(false)
          }
        })
        
        function showError(message) {
          const errorDiv = document.getElementById('errorMessage')
          const errorText = errorDiv.querySelector('p')
          errorText.textContent = message
          errorDiv.classList.remove('hidden')
          
          // Hide after 5 seconds
          setTimeout(() => {
            errorDiv.classList.add('hidden')
          }, 5000)
        }
        
        function setLoading(loading) {
          const button = document.getElementById('loginButton')
          const buttonText = document.getElementById('loginButtonText')
          const loader = document.getElementById('loginLoader')
          
          if (loading) {
            button.disabled = true
            buttonText.classList.add('hidden')
            loader.classList.remove('hidden')
          } else {
            button.disabled = false
            buttonText.classList.remove('hidden')
            loader.classList.add('hidden')
          }
        }
        
        function loginAsDemo(role) {
          const email = role === 'student' ? 'student@demo.com' : 'ceo@demo.com'
          const password = 'password123'
          
          document.getElementById('email').value = email
          document.getElementById('password').value = password
          
          // Auto-submit
          document.getElementById('loginForm').dispatchEvent(new Event('submit'))
        }
        `
    } })
  ] });
}

// src/pages/register.tsx
import { jsx as jsx4, jsxs as jsxs4 } from "hono/jsx/jsx-runtime";
function RegisterPage() {
  return /* @__PURE__ */ jsxs4("div", { class: "min-h-screen bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs4("div", { class: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx4("svg", { class: "absolute top-16 right-16 w-40 h-40 opacity-10", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx4("path", { d: "M20,20 L80,20 L80,80 L20,80 Z", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-pulse", transform: "rotate(15)" }) }),
      /* @__PURE__ */ jsx4("svg", { class: "absolute bottom-20 left-20 w-32 h-32 opacity-10", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx4("path", { d: "M10,90 Q50,10 90,90", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-bounce-slow" }) })
    ] }),
    /* @__PURE__ */ jsxs4("div", { class: "relative z-10 container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxs4("div", { class: "text-center mb-12", children: [
        /* @__PURE__ */ jsx4("a", { href: "/", class: "inline-block scribble-border p-3 mb-8 hover:rotate-1 transition-transform", children: /* @__PURE__ */ jsx4("h1", { class: "text-3xl font-bold font-sketch", children: "MentorMatch" }) }),
        /* @__PURE__ */ jsxs4("div", { class: "scribble-border-large inline-block p-6", children: [
          /* @__PURE__ */ jsx4("h2", { class: "text-4xl md:text-5xl font-bold font-sketch mb-4 transform -rotate-1", children: "Join the Community! \u{1F680}" }),
          /* @__PURE__ */ jsx4("p", { class: "text-xl font-handwritten max-w-2xl mx-auto", children: "Create your account to get career advice, find a mentor, and start your professional development journey" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs4("div", { class: "max-w-2xl mx-auto", children: [
        /* @__PURE__ */ jsx4("div", { class: "scribble-card-large p-8 bg-gray-50", children: /* @__PURE__ */ jsxs4("form", { id: "registerForm", class: "space-y-6", children: [
          /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx4("label", { class: "block font-sketch text-lg mb-4", children: "I am a..." }),
            /* @__PURE__ */ jsxs4("div", { class: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs4("label", { class: "role-option cursor-pointer", children: [
                /* @__PURE__ */ jsx4("input", { type: "radio", name: "role", value: "student", class: "hidden", required: true }),
                /* @__PURE__ */ jsxs4("div", { class: "scribble-card p-4 text-center hover:bg-blue-50 transition-colors", children: [
                  /* @__PURE__ */ jsx4("div", { class: "text-3xl mb-2", children: "\u{1F393}" }),
                  /* @__PURE__ */ jsx4("span", { class: "font-sketch font-bold", children: "Student" }),
                  /* @__PURE__ */ jsx4("p", { class: "font-handwritten text-sm mt-1", children: "Seeking career advice, tutoring, and mentorship" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs4("label", { class: "role-option cursor-pointer", children: [
                /* @__PURE__ */ jsx4("input", { type: "radio", name: "role", value: "ceo", class: "hidden", required: true }),
                /* @__PURE__ */ jsxs4("div", { class: "scribble-card p-4 text-center hover:bg-purple-50 transition-colors", children: [
                  /* @__PURE__ */ jsx4("div", { class: "text-3xl mb-2", children: "\u{1F451}" }),
                  /* @__PURE__ */ jsx4("span", { class: "font-sketch font-bold", children: "CEO/Leader" }),
                  /* @__PURE__ */ jsx4("p", { class: "font-handwritten text-sm mt-1", children: "Ready to provide career coaching and mentoring" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs4("div", { class: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsx4("label", { class: "block font-sketch text-lg mb-2", for: "name", children: "Full Name *" }),
              /* @__PURE__ */ jsx4(
                "input",
                {
                  type: "text",
                  id: "name",
                  name: "name",
                  required: true,
                  class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid focus:rotate-1 transition-transform",
                  placeholder: "Your full name"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsx4("label", { class: "block font-sketch text-lg mb-2", for: "email", children: "Email Address *" }),
              /* @__PURE__ */ jsx4(
                "input",
                {
                  type: "email",
                  id: "email",
                  name: "email",
                  required: true,
                  class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid focus:rotate-1 transition-transform",
                  placeholder: "your@email.com"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs4("div", { children: [
            /* @__PURE__ */ jsx4("label", { class: "block font-sketch text-lg mb-2", for: "password", children: "Password *" }),
            /* @__PURE__ */ jsx4(
              "input",
              {
                type: "password",
                id: "password",
                name: "password",
                required: true,
                minLength: 8,
                class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid focus:rotate-1 transition-transform",
                placeholder: "At least 8 characters"
              }
            ),
            /* @__PURE__ */ jsx4("p", { class: "font-handwritten text-sm text-gray-600 mt-1", children: "Must be at least 8 characters long" })
          ] }),
          /* @__PURE__ */ jsxs4("div", { id: "studentFields", class: "hidden space-y-4", children: [
            /* @__PURE__ */ jsx4("h3", { class: "font-sketch text-xl mb-4 transform rotate-1", children: "\u{1F4DA} Student Details" }),
            /* @__PURE__ */ jsxs4("div", { class: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs4("div", { children: [
                /* @__PURE__ */ jsx4("label", { class: "block font-sketch mb-2", for: "university", children: "University" }),
                /* @__PURE__ */ jsx4(
                  "input",
                  {
                    type: "text",
                    id: "university",
                    name: "university",
                    class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid",
                    placeholder: "e.g., Stanford University"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs4("div", { children: [
                /* @__PURE__ */ jsx4("label", { class: "block font-sketch mb-2", for: "major", children: "Major/Field of Study" }),
                /* @__PURE__ */ jsx4(
                  "input",
                  {
                    type: "text",
                    id: "major",
                    name: "major",
                    class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid",
                    placeholder: "e.g., Computer Science"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs4("div", { children: [
              /* @__PURE__ */ jsx4("label", { class: "block font-sketch mb-2", for: "graduationYear", children: "Expected Graduation Year" }),
              /* @__PURE__ */ jsx4(
                "input",
                {
                  type: "number",
                  id: "graduationYear",
                  name: "graduationYear",
                  min: "2024",
                  max: "2030",
                  class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid",
                  placeholder: "e.g., 2025"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs4("div", { id: "ceoFields", class: "hidden space-y-4", children: [
            /* @__PURE__ */ jsx4("h3", { class: "font-sketch text-xl mb-4 transform -rotate-1", children: "\u{1F3E2} Professional Details" }),
            /* @__PURE__ */ jsxs4("div", { class: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs4("div", { children: [
                /* @__PURE__ */ jsx4("label", { class: "block font-sketch mb-2", for: "company", children: "Company *" }),
                /* @__PURE__ */ jsx4(
                  "input",
                  {
                    type: "text",
                    id: "company",
                    name: "company",
                    class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid",
                    placeholder: "e.g., Tech Innovations Inc."
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs4("div", { children: [
                /* @__PURE__ */ jsx4("label", { class: "block font-sketch mb-2", for: "position", children: "Position *" }),
                /* @__PURE__ */ jsx4(
                  "input",
                  {
                    type: "text",
                    id: "position",
                    name: "position",
                    class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid",
                    placeholder: "e.g., CEO, Founder, Director"
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs4("div", { class: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs4("div", { children: [
                /* @__PURE__ */ jsx4("label", { class: "block font-sketch mb-2", for: "industry", children: "Industry" }),
                /* @__PURE__ */ jsxs4(
                  "select",
                  {
                    id: "industry",
                    name: "industry",
                    class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid",
                    children: [
                      /* @__PURE__ */ jsx4("option", { value: "", children: "Select Industry" }),
                      /* @__PURE__ */ jsx4("option", { value: "technology", children: "Technology" }),
                      /* @__PURE__ */ jsx4("option", { value: "finance", children: "Finance" }),
                      /* @__PURE__ */ jsx4("option", { value: "healthcare", children: "Healthcare" }),
                      /* @__PURE__ */ jsx4("option", { value: "education", children: "Education" }),
                      /* @__PURE__ */ jsx4("option", { value: "retail", children: "Retail" }),
                      /* @__PURE__ */ jsx4("option", { value: "manufacturing", children: "Manufacturing" }),
                      /* @__PURE__ */ jsx4("option", { value: "media", children: "Media & Entertainment" }),
                      /* @__PURE__ */ jsx4("option", { value: "consulting", children: "Consulting" }),
                      /* @__PURE__ */ jsx4("option", { value: "nonprofit", children: "Non-Profit" }),
                      /* @__PURE__ */ jsx4("option", { value: "other", children: "Other" })
                    ]
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs4("div", { children: [
                /* @__PURE__ */ jsx4("label", { class: "block font-sketch mb-2", for: "experienceYears", children: "Years of Experience" }),
                /* @__PURE__ */ jsx4(
                  "input",
                  {
                    type: "number",
                    id: "experienceYears",
                    name: "experienceYears",
                    min: "0",
                    max: "50",
                    class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid",
                    placeholder: "e.g., 15"
                  }
                )
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsx4("div", { id: "errorMessage", class: "hidden p-3 bg-red-100 border-2 border-red-400 border-dashed rounded-lg", children: /* @__PURE__ */ jsx4("p", { class: "font-handwritten text-red-700 text-sm" }) }),
          /* @__PURE__ */ jsxs4("div", { class: "flex items-start space-x-3", children: [
            /* @__PURE__ */ jsx4(
              "input",
              {
                type: "checkbox",
                id: "terms",
                name: "terms",
                required: true,
                class: "mt-1"
              }
            ),
            /* @__PURE__ */ jsxs4("label", { for: "terms", class: "font-handwritten text-sm", children: [
              "I agree to the",
              " ",
              /* @__PURE__ */ jsx4("a", { href: "#", class: "underline hover:text-blue-600", children: "Terms of Service" }),
              " and",
              " ",
              /* @__PURE__ */ jsx4("a", { href: "#", class: "underline hover:text-blue-600", children: "Privacy Policy" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs4(
            "button",
            {
              type: "submit",
              id: "registerButton",
              class: "w-full scribble-button p-4 font-sketch text-xl hover:rotate-1 transition-transform bg-green-200 hover:bg-green-300",
              children: [
                /* @__PURE__ */ jsx4("span", { id: "registerButtonText", children: "Create Account" }),
                /* @__PURE__ */ jsxs4("span", { id: "registerLoader", class: "hidden", children: [
                  /* @__PURE__ */ jsx4("svg", { class: "animate-spin inline-block w-5 h-5 mr-2", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx4("circle", { cx: "50", cy: "50", r: "40", stroke: "black", "stroke-width": "4", fill: "none", "stroke-dasharray": "60 40" }) }),
                  "Creating account..."
                ] })
              ]
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx4("div", { class: "text-center mt-8", children: /* @__PURE__ */ jsx4("div", { class: "scribble-border inline-block p-4", children: /* @__PURE__ */ jsxs4("p", { class: "font-handwritten", children: [
          "Already have an account?",
          " ",
          /* @__PURE__ */ jsx4("a", { href: "/login", class: "font-sketch font-bold hover:underline transform hover:rotate-1 inline-block transition-transform", children: "Sign in here" })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx4("script", { dangerouslySetInnerHTML: {
      __html: `
        // Check for role parameter and pre-select
        const urlParams = new URLSearchParams(window.location.search)
        const preselectedRole = urlParams.get('role')
        if (preselectedRole && ['student', 'ceo'].includes(preselectedRole)) {
          const roleInput = document.querySelector('input[name="role"][value="' + preselectedRole + '"]')
          if (roleInput) {
            roleInput.checked = true
            roleInput.dispatchEvent(new Event('change'))
          }
        }

        // Role selection handling
        document.querySelectorAll('input[name="role"]').forEach(radio => {
          radio.addEventListener('change', function() {
            const studentFields = document.getElementById('studentFields')
            const ceoFields = document.getElementById('ceoFields')
            
            // Update visual selection
            document.querySelectorAll('.role-option .scribble-card').forEach(card => {
              card.classList.remove('bg-blue-100', 'bg-purple-100', 'border-blue-400', 'border-purple-400')
            })
            
            const selectedCard = this.closest('.role-option').querySelector('.scribble-card')
            
            if (this.value === 'student') {
              selectedCard.classList.add('bg-blue-100', 'border-blue-400')
              studentFields.classList.remove('hidden')
              ceoFields.classList.add('hidden')
              
              // Make company and position not required
              document.getElementById('company').removeAttribute('required')
              document.getElementById('position').removeAttribute('required')
            } else {
              selectedCard.classList.add('bg-purple-100', 'border-purple-400')
              ceoFields.classList.remove('hidden')
              studentFields.classList.add('hidden')
              
              // Make company and position required for CEOs
              document.getElementById('company').setAttribute('required', '')
              document.getElementById('position').setAttribute('required', '')
            }
          })
        })
        
        // Form submission
        document.getElementById('registerForm').addEventListener('submit', async function(e) {
          e.preventDefault()
          
          const formData = new FormData(this)
          const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            role: formData.get('role'),
            university: formData.get('university'),
            major: formData.get('major'),
            graduationYear: formData.get('graduationYear') ? parseInt(formData.get('graduationYear')) : undefined,
            company: formData.get('company'),
            position: formData.get('position'),
            industry: formData.get('industry'),
            experienceYears: formData.get('experienceYears') ? parseInt(formData.get('experienceYears')) : undefined
          }
          
          // Basic validation
          if (!data.name || !data.email || !data.password || !data.role) {
            showError('Please fill in all required fields')
            return
          }
          
          if (data.password.length < 8) {
            showError('Password must be at least 8 characters long')
            return
          }
          
          if (data.role === 'ceo' && (!data.company || !data.position)) {
            showError('Company and position are required for CEOs')
            return
          }
          
          if (!formData.get('terms')) {
            showError('Please accept the terms and conditions')
            return
          }
          
          setLoading(true)
          
          try {
            const response = await fetch('/api/auth/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(data)
            })
            
            const result = await response.json()
            
            if (response.ok && result.success) {
              // Store token in localStorage and cookie
              localStorage.setItem('auth-token', result.token)
              document.cookie = 'auth-token=' + result.token + '; path=/; max-age=604800' // 7 days
              
              // Store user info
              localStorage.setItem('user', JSON.stringify(result.user))
              
              // Show success message and redirect
              showSuccess('Account created successfully! Redirecting to your dashboard...')
              
              setTimeout(() => {
                window.location.href = '/dashboard'
              }, 2000)
            } else {
              if (result.issues) {
                showError(result.issues.map(issue => issue.message).join(', '))
              } else {
                showError(result.error || 'Registration failed')
              }
            }
          } catch (error) {
            console.error('Registration error:', error)
            showError('Network error. Please try again.')
          } finally {
            setLoading(false)
          }
        })
        
        function showError(message) {
          const errorDiv = document.getElementById('errorMessage')
          const errorText = errorDiv.querySelector('p')
          errorText.textContent = message
          errorDiv.classList.remove('hidden')
          errorDiv.className = errorDiv.className.replace('bg-green-100', 'bg-red-100').replace('border-green-400', 'border-red-400')
          
          // Hide after 7 seconds
          setTimeout(() => {
            errorDiv.classList.add('hidden')
          }, 7000)
        }
        
        function showSuccess(message) {
          const errorDiv = document.getElementById('errorMessage')
          const errorText = errorDiv.querySelector('p')
          errorText.textContent = message
          errorDiv.classList.remove('hidden')
          errorDiv.className = errorDiv.className.replace('bg-red-100', 'bg-green-100').replace('border-red-400', 'border-green-400')
        }
        
        function setLoading(loading) {
          const button = document.getElementById('registerButton')
          const buttonText = document.getElementById('registerButtonText')
          const loader = document.getElementById('registerLoader')
          
          if (loading) {
            button.disabled = true
            buttonText.classList.add('hidden')
            loader.classList.remove('hidden')
          } else {
            button.disabled = false
            buttonText.classList.remove('hidden')
            loader.classList.add('hidden')
          }
        }
        `
    } })
  ] });
}

// src/pages/profile.tsx
import { jsx as jsx5, jsxs as jsxs5 } from "hono/jsx/jsx-runtime";
function ProfilePage({ user }) {
  return /* @__PURE__ */ jsxs5("div", { class: "min-h-screen bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs5("div", { class: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx5("svg", { class: "absolute top-10 right-10 w-32 h-32 opacity-10", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx5("path", { d: "M50,10 L90,90 L10,90 Z", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-pulse" }) }),
      /* @__PURE__ */ jsx5("svg", { class: "absolute bottom-20 left-10 w-40 h-20 opacity-10", viewBox: "0 0 100 50", children: /* @__PURE__ */ jsx5("path", { d: "M10,25 Q30,5 50,25 Q70,45 90,25", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-bounce-slow" }) })
    ] }),
    /* @__PURE__ */ jsxs5("div", { class: "relative z-10 container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxs5("header", { class: "flex justify-between items-center mb-12", children: [
        /* @__PURE__ */ jsx5("div", { class: "scribble-border p-3 hover:rotate-1 transition-transform", children: /* @__PURE__ */ jsx5("h1", { class: "text-3xl font-bold font-sketch", children: "MentorMatch" }) }),
        /* @__PURE__ */ jsxs5("div", { class: "flex space-x-4", children: [
          /* @__PURE__ */ jsx5("a", { href: "/dashboard", class: "scribble-button px-6 py-3 font-sketch bg-gray-200 hover:bg-gray-300", children: "\u2190 Dashboard" }),
          /* @__PURE__ */ jsx5("button", { onclick: "logout()", class: "scribble-button px-4 py-2 font-sketch text-sm bg-red-200 hover:bg-red-300", children: "Logout" })
        ] })
      ] }),
      /* @__PURE__ */ jsx5("div", { class: "text-center mb-12", children: /* @__PURE__ */ jsx5("div", { class: "scribble-border-large inline-block p-6", children: /* @__PURE__ */ jsxs5("div", { class: "flex items-center justify-center space-x-6", children: [
        /* @__PURE__ */ jsx5("div", { class: "w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl", children: user.role === "student" ? "\u{1F393}" : "\u{1F451}" }),
        /* @__PURE__ */ jsxs5("div", { class: "text-left", children: [
          /* @__PURE__ */ jsx5("h2", { class: "text-3xl font-bold font-sketch transform rotate-1", children: user.name }),
          /* @__PURE__ */ jsx5("p", { class: "font-handwritten text-xl text-gray-600", children: user.role === "student" ? "\u{1F393} Student" : "\u{1F451} CEO/Leader" }),
          /* @__PURE__ */ jsx5("div", { class: "flex items-center mt-2", children: /* @__PURE__ */ jsxs5("span", { class: "font-handwritten text-sm", children: [
            "Status: ",
            user.verificationStatus === "verified" ? "\u2705 Verified" : "\u23F3 Pending Verification"
          ] }) })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxs5("div", { class: "max-w-4xl mx-auto", children: [
        /* @__PURE__ */ jsxs5("div", { class: "scribble-card-large p-8 bg-gray-50", children: [
          /* @__PURE__ */ jsx5("div", { id: "messageContainer", class: "mb-6" }),
          /* @__PURE__ */ jsxs5("form", { id: "profileForm", class: "space-y-8", children: [
            /* @__PURE__ */ jsxs5("div", { children: [
              /* @__PURE__ */ jsx5("h3", { class: "text-2xl font-bold font-sketch mb-6 transform -rotate-1", children: "\u{1F4DD} Basic Information" }),
              /* @__PURE__ */ jsxs5("div", { class: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch text-lg mb-2", for: "name", children: "Full Name *" }),
                  /* @__PURE__ */ jsx5(
                    "input",
                    {
                      type: "text",
                      id: "name",
                      name: "name",
                      value: user.name,
                      required: true,
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid focus:rotate-1 transition-transform"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch text-lg mb-2", for: "email", children: "Email Address" }),
                  /* @__PURE__ */ jsx5(
                    "input",
                    {
                      type: "email",
                      id: "email",
                      value: user.email,
                      disabled: true,
                      class: "w-full p-3 border-2 border-gray-400 border-dashed rounded-lg font-handwritten bg-gray-100 text-gray-600"
                    }
                  ),
                  /* @__PURE__ */ jsx5("p", { class: "font-handwritten text-xs text-gray-500 mt-1", children: "Email cannot be changed. Contact support if needed." })
                ] })
              ] }),
              /* @__PURE__ */ jsxs5("div", { class: "mt-6", children: [
                /* @__PURE__ */ jsx5("label", { class: "block font-sketch text-lg mb-2", for: "bio", children: "Bio" }),
                /* @__PURE__ */ jsx5(
                  "textarea",
                  {
                    id: "bio",
                    name: "bio",
                    rows: 4,
                    placeholder: "Tell others about yourself, your interests, and what you hope to gain from conversations...",
                    class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid resize-none",
                    children: user.bio || ""
                  }
                ),
                /* @__PURE__ */ jsx5("p", { class: "font-handwritten text-xs text-gray-500 mt-1", children: "A good bio helps others connect with you better!" })
              ] })
            ] }),
            user.role === "student" && /* @__PURE__ */ jsxs5("div", { children: [
              /* @__PURE__ */ jsx5("h3", { class: "text-2xl font-bold font-sketch mb-6 transform rotate-1", children: "\u{1F393} Student Information" }),
              /* @__PURE__ */ jsxs5("div", { class: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "university", children: "University/School" }),
                  /* @__PURE__ */ jsx5(
                    "input",
                    {
                      type: "text",
                      id: "university",
                      name: "university",
                      value: user.university || "",
                      placeholder: "e.g., Stanford University",
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "major", children: "Major/Field of Study" }),
                  /* @__PURE__ */ jsx5(
                    "input",
                    {
                      type: "text",
                      id: "major",
                      name: "major",
                      value: user.major || "",
                      placeholder: "e.g., Computer Science",
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs5("div", { class: "mt-6", children: [
                /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "graduationYear", children: "Expected Graduation Year" }),
                /* @__PURE__ */ jsx5(
                  "input",
                  {
                    type: "number",
                    id: "graduationYear",
                    name: "graduationYear",
                    value: user.graduationYear || "",
                    min: "2024",
                    max: "2035",
                    placeholder: "e.g., 2025",
                    class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid md:w-1/3"
                  }
                )
              ] })
            ] }),
            user.role === "ceo" && /* @__PURE__ */ jsxs5("div", { children: [
              /* @__PURE__ */ jsx5("h3", { class: "text-2xl font-bold font-sketch mb-6 transform -rotate-1", children: "\u{1F3E2} Professional Information" }),
              /* @__PURE__ */ jsxs5("div", { class: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "company", children: "Company *" }),
                  /* @__PURE__ */ jsx5(
                    "input",
                    {
                      type: "text",
                      id: "company",
                      name: "company",
                      value: user.company || "",
                      required: true,
                      placeholder: "e.g., Tech Innovations Inc.",
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "position", children: "Position *" }),
                  /* @__PURE__ */ jsx5(
                    "input",
                    {
                      type: "text",
                      id: "position",
                      name: "position",
                      value: user.position || "",
                      required: true,
                      placeholder: "e.g., CEO, Founder, Director",
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsxs5("div", { class: "grid md:grid-cols-2 gap-6 mt-6", children: [
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "industry", children: "Industry" }),
                  /* @__PURE__ */ jsxs5(
                    "select",
                    {
                      id: "industry",
                      name: "industry",
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid",
                      children: [
                        /* @__PURE__ */ jsx5("option", { value: "", children: "Select Industry" }),
                        /* @__PURE__ */ jsx5("option", { value: "technology", selected: user.industry === "technology", children: "Technology" }),
                        /* @__PURE__ */ jsx5("option", { value: "finance", selected: user.industry === "finance", children: "Finance" }),
                        /* @__PURE__ */ jsx5("option", { value: "healthcare", selected: user.industry === "healthcare", children: "Healthcare" }),
                        /* @__PURE__ */ jsx5("option", { value: "education", selected: user.industry === "education", children: "Education" }),
                        /* @__PURE__ */ jsx5("option", { value: "retail", selected: user.industry === "retail", children: "Retail" }),
                        /* @__PURE__ */ jsx5("option", { value: "manufacturing", selected: user.industry === "manufacturing", children: "Manufacturing" }),
                        /* @__PURE__ */ jsx5("option", { value: "media", selected: user.industry === "media", children: "Media & Entertainment" }),
                        /* @__PURE__ */ jsx5("option", { value: "consulting", selected: user.industry === "consulting", children: "Consulting" }),
                        /* @__PURE__ */ jsx5("option", { value: "nonprofit", selected: user.industry === "nonprofit", children: "Non-Profit" }),
                        /* @__PURE__ */ jsx5("option", { value: "other", selected: user.industry === "other", children: "Other" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "experienceYears", children: "Years of Experience" }),
                  /* @__PURE__ */ jsx5(
                    "input",
                    {
                      type: "number",
                      id: "experienceYears",
                      name: "experienceYears",
                      value: user.experienceYears || "",
                      min: "0",
                      max: "60",
                      placeholder: "e.g., 15",
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs5("div", { children: [
              /* @__PURE__ */ jsx5("h3", { class: "text-2xl font-bold font-sketch mb-6 transform rotate-1", children: "\u{1F517} Social Links" }),
              /* @__PURE__ */ jsxs5("div", { class: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "linkedinUrl", children: "LinkedIn Profile" }),
                  /* @__PURE__ */ jsx5(
                    "input",
                    {
                      type: "url",
                      id: "linkedinUrl",
                      name: "linkedinUrl",
                      value: user.linkedinUrl || "",
                      placeholder: "https://linkedin.com/in/yourprofile",
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "websiteUrl", children: "Website/Portfolio" }),
                  /* @__PURE__ */ jsx5(
                    "input",
                    {
                      type: "url",
                      id: "websiteUrl",
                      name: "websiteUrl",
                      value: user.websiteUrl || "",
                      placeholder: "https://yourwebsite.com",
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                    }
                  )
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs5("div", { children: [
              /* @__PURE__ */ jsx5("h3", { class: "text-2xl font-bold font-sketch mb-6 transform -rotate-1", children: "\u2699\uFE0F Preferences" }),
              /* @__PURE__ */ jsxs5("div", { class: "grid md:grid-cols-2 gap-6", children: [
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "timezone", children: "Timezone" }),
                  /* @__PURE__ */ jsxs5(
                    "select",
                    {
                      id: "timezone",
                      name: "timezone",
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid",
                      children: [
                        /* @__PURE__ */ jsx5("option", { value: "UTC", selected: user.timezone === "UTC", children: "UTC" }),
                        /* @__PURE__ */ jsx5("option", { value: "America/New_York", selected: user.timezone === "America/New_York", children: "Eastern Time (ET)" }),
                        /* @__PURE__ */ jsx5("option", { value: "America/Chicago", selected: user.timezone === "America/Chicago", children: "Central Time (CT)" }),
                        /* @__PURE__ */ jsx5("option", { value: "America/Denver", selected: user.timezone === "America/Denver", children: "Mountain Time (MT)" }),
                        /* @__PURE__ */ jsx5("option", { value: "America/Los_Angeles", selected: user.timezone === "America/Los_Angeles", children: "Pacific Time (PT)" }),
                        /* @__PURE__ */ jsx5("option", { value: "Europe/London", selected: user.timezone === "Europe/London", children: "London (GMT)" }),
                        /* @__PURE__ */ jsx5("option", { value: "Europe/Paris", selected: user.timezone === "Europe/Paris", children: "Central Europe (CET)" }),
                        /* @__PURE__ */ jsx5("option", { value: "Asia/Tokyo", selected: user.timezone === "Asia/Tokyo", children: "Tokyo (JST)" }),
                        /* @__PURE__ */ jsx5("option", { value: "Australia/Sydney", selected: user.timezone === "Australia/Sydney", children: "Sydney (AEST)" })
                      ]
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs5("div", { children: [
                  /* @__PURE__ */ jsx5("label", { class: "block font-sketch mb-2", for: "languages", children: "Languages Spoken" }),
                  /* @__PURE__ */ jsx5(
                    "input",
                    {
                      type: "text",
                      id: "languages",
                      name: "languages",
                      value: user.languages ? user.languages.join(", ") : "",
                      placeholder: "e.g., English, Spanish, French",
                      class: "w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                    }
                  ),
                  /* @__PURE__ */ jsx5("p", { class: "font-handwritten text-xs text-gray-500 mt-1", children: "Separate multiple languages with commas" })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxs5("div", { class: "flex justify-end space-x-4", children: [
              /* @__PURE__ */ jsx5(
                "button",
                {
                  type: "button",
                  onclick: "window.location.href='/dashboard'",
                  class: "scribble-button px-8 py-3 font-sketch text-lg bg-gray-200 hover:bg-gray-300",
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ jsxs5(
                "button",
                {
                  type: "submit",
                  id: "saveButton",
                  class: "scribble-button px-8 py-3 font-sketch text-lg bg-green-200 hover:bg-green-300",
                  children: [
                    /* @__PURE__ */ jsx5("span", { id: "saveButtonText", children: "\u{1F4BE} Save Profile" }),
                    /* @__PURE__ */ jsxs5("span", { id: "saveLoader", class: "hidden", children: [
                      /* @__PURE__ */ jsx5("svg", { class: "animate-spin inline-block w-5 h-5 mr-2", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx5("circle", { cx: "50", cy: "50", r: "40", stroke: "black", "stroke-width": "4", fill: "none", "stroke-dasharray": "60 40" }) }),
                      "Saving..."
                    ] })
                  ]
                }
              )
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxs5("div", { class: "mt-12 grid md:grid-cols-3 gap-6", children: [
          /* @__PURE__ */ jsxs5("div", { class: "scribble-card p-6 text-center", children: [
            /* @__PURE__ */ jsx5("div", { class: "text-3xl mb-2", children: "\u{1F4AC}" }),
            /* @__PURE__ */ jsx5("h4", { class: "font-sketch text-lg font-bold", children: user.totalConversations || 0 }),
            /* @__PURE__ */ jsx5("p", { class: "font-handwritten text-sm", children: "Total Conversations" })
          ] }),
          /* @__PURE__ */ jsxs5("div", { class: "scribble-card p-6 text-center", children: [
            /* @__PURE__ */ jsx5("div", { class: "text-3xl mb-2", children: "\u2B50" }),
            /* @__PURE__ */ jsxs5("h4", { class: "font-sketch text-lg font-bold", children: [
              user.averageRating || 0,
              "/5"
            ] }),
            /* @__PURE__ */ jsx5("p", { class: "font-handwritten text-sm", children: "Average Rating" })
          ] }),
          /* @__PURE__ */ jsxs5("div", { class: "scribble-card p-6 text-center", children: [
            /* @__PURE__ */ jsx5("div", { class: "text-3xl mb-2", children: "\u{1F4C5}" }),
            /* @__PURE__ */ jsx5("h4", { class: "font-sketch text-lg font-bold", children: new Date(user.createdAt).toLocaleDateString() }),
            /* @__PURE__ */ jsx5("p", { class: "font-handwritten text-sm", children: "Member Since" })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx5("script", { dangerouslySetInnerHTML: {
      __html: `
        document.getElementById('profileForm').addEventListener('submit', async function(e) {
          e.preventDefault()
          
          const token = localStorage.getItem('auth-token')
          if (!token) {
            window.location.href = '/login'
            return
          }
          
          setLoading(true)
          
          try {
            const formData = new FormData(this)
            
            // Prepare data
            const data = {
              name: formData.get('name'),
              bio: formData.get('bio'),
              university: formData.get('university'),
              major: formData.get('major'),
              graduationYear: formData.get('graduationYear') ? parseInt(formData.get('graduationYear')) : undefined,
              company: formData.get('company'),
              position: formData.get('position'),
              industry: formData.get('industry'),
              experienceYears: formData.get('experienceYears') ? parseInt(formData.get('experienceYears')) : undefined,
              linkedinUrl: formData.get('linkedinUrl'),
              websiteUrl: formData.get('websiteUrl'),
              timezone: formData.get('timezone'),
              languages: formData.get('languages') ? formData.get('languages').split(',').map(l => l.trim()).filter(l => l) : []
            }
            
            // Remove undefined values
            Object.keys(data).forEach(key => {
              if (data[key] === undefined || data[key] === '') {
                delete data[key]
              }
            })
            
            const response = await fetch('/api/profile', {
              method: 'PUT',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
              },
              body: JSON.stringify(data)
            })
            
            const result = await response.json()
            
            if (response.ok && result.success) {
              // Update stored user info
              localStorage.setItem('user', JSON.stringify(result.user))
              
              showMessage('Profile updated successfully! \u{1F389}', 'success')
              
              // Redirect to dashboard after delay
              setTimeout(() => {
                window.location.href = '/dashboard'
              }, 2000)
            } else {
              if (result.issues) {
                showMessage(result.issues.map(issue => issue.message).join(', '), 'error')
              } else {
                showMessage(result.error || 'Profile update failed', 'error')
              }
            }
          } catch (error) {
            console.error('Profile update error:', error)
            showMessage('Network error. Please try again.', 'error')
          } finally {
            setLoading(false)
          }
        })
        
        function showMessage(message, type) {
          const container = document.getElementById('messageContainer')
          const bgColor = type === 'success' ? 'bg-green-100 border-green-400' : 'bg-red-100 border-red-400'
          const textColor = type === 'success' ? 'text-green-700' : 'text-red-700'
          
          container.innerHTML = 
            '<div class="p-3 ' + bgColor + ' border-2 border-dashed rounded-lg">' +
            '<p class="font-handwritten ' + textColor + ' text-sm">' + message + '</p>' +
            '</div>'
          
          // Auto-hide after 5 seconds
          setTimeout(() => {
            container.innerHTML = ''
          }, 5000)
        }
        
        function setLoading(loading) {
          const button = document.getElementById('saveButton')
          const buttonText = document.getElementById('saveButtonText')
          const loader = document.getElementById('saveLoader')
          
          if (loading) {
            button.disabled = true
            buttonText.classList.add('hidden')
            loader.classList.remove('hidden')
          } else {
            button.disabled = false
            buttonText.classList.remove('hidden')
            loader.classList.add('hidden')
          }
        }
        
        async function logout() {
          const token = localStorage.getItem('auth-token')
          
          if (token) {
            try {
              await fetch('/api/auth/logout', {
                method: 'POST',
                headers: { 'Authorization': 'Bearer ' + token }
              })
            } catch (error) {
              console.error('Logout error:', error)
            }
          }
          
          localStorage.removeItem('auth-token')
          localStorage.removeItem('user')
          document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
          
          window.location.href = '/login'
        }
        `
    } })
  ] });
}

// src/pages/dashboard.tsx
import { Fragment, jsx as jsx6, jsxs as jsxs6 } from "hono/jsx/jsx-runtime";
function DashboardPage({ user }) {
  return /* @__PURE__ */ jsxs6("div", { class: "min-h-screen bg-white", children: [
    /* @__PURE__ */ jsxs6("nav", { class: "border-b-2 border-black border-dashed bg-gray-50 px-4 py-3", children: [
      /* @__PURE__ */ jsxs6("div", { class: "container mx-auto flex justify-between items-center", children: [
        /* @__PURE__ */ jsxs6("div", { class: "flex items-center space-x-6", children: [
          /* @__PURE__ */ jsx6("a", { href: "/", class: "scribble-border p-2 hover:rotate-1 transition-transform", children: /* @__PURE__ */ jsx6("span", { class: "text-xl font-bold font-sketch", children: "MentorMatch" }) }),
          /* @__PURE__ */ jsxs6("nav", { class: "hidden md:flex space-x-4", children: [
            /* @__PURE__ */ jsx6("button", { onclick: "switchSection('overview')", class: "nav-btn font-handwritten hover:underline", "data-section": "overview", children: "\u{1F4CA} Overview" }),
            /* @__PURE__ */ jsx6("button", { onclick: "switchSection('find-ceos')", class: "nav-btn font-handwritten hover:underline", "data-section": "find-ceos", children: "\u{1F50D} Find CEOs" }),
            /* @__PURE__ */ jsx6("button", { onclick: "switchSection('my-calls')", class: "nav-btn font-handwritten hover:underline", "data-section": "my-calls", children: "\u{1F4F9} My Calls" }),
            /* @__PURE__ */ jsx6("button", { onclick: "switchSection('profile')", class: "nav-btn font-handwritten hover:underline", "data-section": "profile", children: "\u{1F464} Profile" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs6("div", { class: "flex items-center space-x-4", children: [
          /* @__PURE__ */ jsxs6("div", { class: "text-right hidden md:block", children: [
            /* @__PURE__ */ jsx6("p", { class: "font-handwritten text-sm", children: "Welcome back," }),
            /* @__PURE__ */ jsx6("p", { class: "font-sketch font-bold", children: user.name }),
            /* @__PURE__ */ jsx6("span", { class: "text-xs bg-blue-100 px-2 py-1 rounded font-handwritten", children: user.role === "student" ? "\u{1F393} Student" : "\u{1F451} Leader" })
          ] }),
          /* @__PURE__ */ jsxs6("div", { class: "flex items-center space-x-2", children: [
            /* @__PURE__ */ jsx6("div", { class: "w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl", children: user.role === "student" ? "\u{1F393}" : "\u{1F451}" }),
            /* @__PURE__ */ jsxs6("div", { class: "relative", children: [
              /* @__PURE__ */ jsx6("button", { onclick: "toggleDropdown()", class: "scribble-button px-3 py-1 font-sketch text-sm bg-gray-200 hover:bg-gray-300", children: "\u22EE" }),
              /* @__PURE__ */ jsxs6("div", { id: "userDropdown", class: "hidden absolute right-0 mt-2 w-48 scribble-card bg-white shadow-lg z-50", children: [
                /* @__PURE__ */ jsx6("a", { href: "/profile", class: "block px-4 py-2 font-handwritten hover:bg-gray-100", children: "Edit Profile" }),
                /* @__PURE__ */ jsx6("button", { onclick: "logout()", class: "block w-full text-left px-4 py-2 font-handwritten hover:bg-gray-100 text-red-600", children: "Logout" })
              ] })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { class: "md:hidden mt-3 flex space-x-2 overflow-x-auto", children: [
        /* @__PURE__ */ jsx6("button", { onclick: "switchSection('overview')", class: "nav-btn whitespace-nowrap px-3 py-1 scribble-button font-sketch text-sm", "data-section": "overview", children: "\u{1F4CA} Overview" }),
        /* @__PURE__ */ jsx6("button", { onclick: "switchSection('find-ceos')", class: "nav-btn whitespace-nowrap px-3 py-1 scribble-button font-sketch text-sm", "data-section": "find-ceos", children: "\u{1F50D} Find CEOs" }),
        /* @__PURE__ */ jsx6("button", { onclick: "switchSection('my-calls')", class: "nav-btn whitespace-nowrap px-3 py-1 scribble-button font-sketch text-sm", "data-section": "my-calls", children: "\u{1F4F9} My Calls" }),
        /* @__PURE__ */ jsx6("button", { onclick: "switchSection('profile')", class: "nav-btn whitespace-nowrap px-3 py-1 scribble-button font-sketch text-sm", "data-section": "profile", children: "\u{1F464} Profile" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs6("div", { class: "container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxs6("div", { id: "overview-section", class: "dashboard-section", children: [
        /* @__PURE__ */ jsx6("div", { class: "text-center mb-8", children: /* @__PURE__ */ jsxs6("div", { class: "scribble-border-large inline-block p-6", children: [
          /* @__PURE__ */ jsx6("h1", { class: "text-4xl font-bold font-sketch mb-4 transform rotate-1", children: user.role === "student" ? "\u{1F393} Student Dashboard" : "\u{1F451} Leader Dashboard" }),
          /* @__PURE__ */ jsx6("p", { class: "text-xl font-handwritten", children: user.role === "student" ? "Ready to get career advice from mentors and start building a successful career?" : "Ready to provide career coaching and mentorship to the next generation?" })
        ] }) }),
        /* @__PURE__ */ jsxs6("div", { class: "grid md:grid-cols-4 gap-6 mb-8", children: [
          /* @__PURE__ */ jsxs6("div", { class: "scribble-card p-6 text-center transform hover:rotate-1 transition-transform", children: [
            /* @__PURE__ */ jsx6("div", { class: "text-3xl mb-2", children: "\u{1F4AC}" }),
            /* @__PURE__ */ jsx6("h3", { class: "text-2xl font-bold font-sketch", children: user.totalConversations || 0 }),
            /* @__PURE__ */ jsx6("p", { class: "font-handwritten text-sm", children: "Mentoring Sessions" })
          ] }),
          /* @__PURE__ */ jsxs6("div", { class: "scribble-card p-6 text-center transform hover:-rotate-1 transition-transform", children: [
            /* @__PURE__ */ jsx6("div", { class: "text-3xl mb-2", children: "\u2B50" }),
            /* @__PURE__ */ jsxs6("h3", { class: "text-2xl font-bold font-sketch", children: [
              user.averageRating || 0,
              "/5"
            ] }),
            /* @__PURE__ */ jsx6("p", { class: "font-handwritten text-sm", children: "Average Rating" })
          ] }),
          /* @__PURE__ */ jsxs6("div", { class: "scribble-card p-6 text-center transform hover:rotate-1 transition-transform", children: [
            /* @__PURE__ */ jsx6("div", { class: "text-3xl mb-2", children: "\u{1F3C6}" }),
            /* @__PURE__ */ jsx6("h3", { class: "text-2xl font-bold font-sketch", children: user.verificationStatus === "verified" ? "Verified" : "Pending" }),
            /* @__PURE__ */ jsx6("p", { class: "font-handwritten text-sm", children: "Profile Status" })
          ] }),
          /* @__PURE__ */ jsxs6("div", { class: "scribble-card p-6 text-center transform hover:-rotate-1 transition-transform", children: [
            /* @__PURE__ */ jsx6("div", { class: "text-3xl mb-2", children: "\u{1F3AF}" }),
            /* @__PURE__ */ jsx6("h3", { class: "text-2xl font-bold font-sketch", children: "3" }),
            /* @__PURE__ */ jsx6("p", { class: "font-handwritten text-sm", children: "Available Mentors" })
          ] })
        ] }),
        /* @__PURE__ */ jsx6("div", { class: "mb-8 max-w-4xl mx-auto", children: /* @__PURE__ */ jsx6("div", { class: "scribble-border-large overflow-hidden", children: /* @__PURE__ */ jsx6(
          "img",
          {
            src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&q=80",
            alt: "Student getting career coaching and one-on-one tutoring from a professional mentor",
            class: "w-full h-48 object-cover"
          }
        ) }) }),
        /* @__PURE__ */ jsx6("div", { class: "text-center mb-8", children: /* @__PURE__ */ jsxs6("div", { class: "scribble-border-large inline-block p-8 bg-gray-50", children: [
          /* @__PURE__ */ jsx6("h2", { class: "text-3xl font-bold font-sketch mb-6 transform -rotate-1", children: "\u{1F680} Quick Start" }),
          /* @__PURE__ */ jsxs6("div", { class: "flex flex-col md:flex-row gap-4 justify-center", children: [
            /* @__PURE__ */ jsx6("button", { onclick: "quickMatch()", class: "scribble-button text-xl font-bold font-sketch px-8 py-4 bg-blue-200 hover:bg-blue-300 transform hover:rotate-1 transition-all", children: "\u26A1 Quick Match" }),
            /* @__PURE__ */ jsx6("button", { onclick: "switchSection('find-ceos')", class: "scribble-button text-xl font-bold font-sketch px-8 py-4 bg-green-200 hover:bg-green-300 transform hover:-rotate-1 transition-all", children: "\u{1F50D} Browse CEOs" }),
            /* @__PURE__ */ jsx6("button", { onclick: "switchSection('my-calls')", class: "scribble-button text-xl font-bold font-sketch px-8 py-4 bg-purple-200 hover:bg-purple-300 transform hover:rotate-1 transition-all", children: "\u{1F4F9} View History" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx6("h2", { class: "text-2xl font-bold font-sketch mb-6 text-center transform rotate-1", children: "\u{1F4DA} Recent Activity" }),
          /* @__PURE__ */ jsx6("div", { id: "recentActivity", class: "space-y-4", children: /* @__PURE__ */ jsx6("div", { class: "scribble-card p-4 bg-yellow-50", children: /* @__PURE__ */ jsx6("p", { class: "font-handwritten", children: "Loading your recent activity..." }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs6("div", { id: "find-ceos-section", class: "dashboard-section hidden", children: [
        /* @__PURE__ */ jsx6("div", { class: "text-center mb-8", children: /* @__PURE__ */ jsx6("div", { class: "scribble-border inline-block p-4", children: /* @__PURE__ */ jsx6("h1", { class: "text-3xl font-bold font-sketch transform -rotate-1", children: "\u{1F50D} Find & Connect with Leaders" }) }) }),
        /* @__PURE__ */ jsx6("div", { class: "scribble-card p-6 mb-8 bg-gray-50", children: /* @__PURE__ */ jsxs6("div", { class: "grid md:grid-cols-4 gap-4", children: [
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Industry" }),
            /* @__PURE__ */ jsxs6("select", { id: "industryFilter", class: "w-full p-2 border-2 border-black border-dashed rounded font-handwritten", children: [
              /* @__PURE__ */ jsx6("option", { value: "", children: "All Industries" }),
              /* @__PURE__ */ jsx6("option", { value: "technology", children: "Technology" }),
              /* @__PURE__ */ jsx6("option", { value: "finance", children: "Finance" }),
              /* @__PURE__ */ jsx6("option", { value: "healthcare", children: "Healthcare" }),
              /* @__PURE__ */ jsx6("option", { value: "education", children: "Education" }),
              /* @__PURE__ */ jsx6("option", { value: "retail", children: "Retail" }),
              /* @__PURE__ */ jsx6("option", { value: "manufacturing", children: "Manufacturing" }),
              /* @__PURE__ */ jsx6("option", { value: "consulting", children: "Consulting" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Experience" }),
            /* @__PURE__ */ jsxs6("select", { id: "experienceFilter", class: "w-full p-2 border-2 border-black border-dashed rounded font-handwritten", children: [
              /* @__PURE__ */ jsx6("option", { value: "", children: "Any Experience" }),
              /* @__PURE__ */ jsx6("option", { value: "5", children: "5+ Years" }),
              /* @__PURE__ */ jsx6("option", { value: "10", children: "10+ Years" }),
              /* @__PURE__ */ jsx6("option", { value: "15", children: "15+ Years" }),
              /* @__PURE__ */ jsx6("option", { value: "20", children: "20+ Years" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Company Size" }),
            /* @__PURE__ */ jsxs6("select", { id: "companySizeFilter", class: "w-full p-2 border-2 border-black border-dashed rounded font-handwritten", children: [
              /* @__PURE__ */ jsx6("option", { value: "", children: "Any Size" }),
              /* @__PURE__ */ jsx6("option", { value: "startup", children: "Startup (1-50)" }),
              /* @__PURE__ */ jsx6("option", { value: "medium", children: "Medium (51-500)" }),
              /* @__PURE__ */ jsx6("option", { value: "large", children: "Large (500+)" })
            ] })
          ] }),
          /* @__PURE__ */ jsx6("div", { class: "flex items-end", children: /* @__PURE__ */ jsx6("button", { onclick: "searchCEOs()", class: "w-full scribble-button p-2 font-sketch bg-blue-200 hover:bg-blue-300", children: "\u{1F50D} Search" }) })
        ] }) }),
        /* @__PURE__ */ jsx6("div", { id: "ceoGrid", class: "grid md:grid-cols-2 lg:grid-cols-3 gap-6" })
      ] }),
      /* @__PURE__ */ jsxs6("div", { id: "my-calls-section", class: "dashboard-section hidden", children: [
        /* @__PURE__ */ jsx6("div", { class: "text-center mb-8", children: /* @__PURE__ */ jsx6("div", { class: "scribble-border inline-block p-4", children: /* @__PURE__ */ jsx6("h1", { class: "text-3xl font-bold font-sketch transform rotate-1", children: "\u{1F4F9} My Video Calls" }) }) }),
        /* @__PURE__ */ jsxs6("div", { class: "flex justify-center mb-8 space-x-4", children: [
          /* @__PURE__ */ jsx6("button", { onclick: "showCallTab('upcoming')", class: "call-tab-btn scribble-button px-6 py-3 font-sketch active", "data-tab": "upcoming", children: "\u{1F550} Upcoming" }),
          /* @__PURE__ */ jsx6("button", { onclick: "showCallTab('completed')", class: "call-tab-btn scribble-button px-6 py-3 font-sketch", "data-tab": "completed", children: "\u2705 Completed" }),
          /* @__PURE__ */ jsx6("button", { onclick: "showCallTab('cancelled')", class: "call-tab-btn scribble-button px-6 py-3 font-sketch", "data-tab": "cancelled", children: "\u274C Cancelled" })
        ] }),
        /* @__PURE__ */ jsx6("div", { id: "upcomingCalls", class: "call-tab-content", children: /* @__PURE__ */ jsx6("div", { class: "text-center py-8", children: /* @__PURE__ */ jsxs6("div", { class: "scribble-card p-8 bg-blue-50 max-w-md mx-auto", children: [
          /* @__PURE__ */ jsx6(
            "img",
            {
              src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80",
              alt: "Student preparing for a career mentorship and online tutoring session",
              class: "w-full h-40 object-cover rounded mb-4",
              style: "border-radius: 10px 18px 14px 20px"
            }
          ),
          /* @__PURE__ */ jsx6("h3", { class: "text-xl font-bold font-sketch mb-4", children: "No Upcoming Calls" }),
          /* @__PURE__ */ jsx6("p", { class: "font-handwritten mb-6", children: "You don't have any scheduled mentoring sessions yet. Ready to get career advice from industry leaders?" }),
          /* @__PURE__ */ jsx6("button", { onclick: "switchSection('find-ceos')", class: "scribble-button px-6 py-3 font-sketch bg-blue-200 hover:bg-blue-300", children: "\u{1F50D} Find a Mentor" })
        ] }) }) }),
        /* @__PURE__ */ jsx6("div", { id: "completedCalls", class: "call-tab-content hidden", children: /* @__PURE__ */ jsx6("div", { id: "completedCallsList", children: /* @__PURE__ */ jsx6("div", { class: "text-center py-8", children: /* @__PURE__ */ jsx6("p", { class: "font-handwritten text-gray-600", children: "Loading your call history..." }) }) }) }),
        /* @__PURE__ */ jsx6("div", { id: "cancelledCalls", class: "call-tab-content hidden", children: /* @__PURE__ */ jsx6("div", { class: "text-center py-8", children: /* @__PURE__ */ jsx6("p", { class: "font-handwritten text-gray-600", children: "No cancelled calls" }) }) })
      ] }),
      /* @__PURE__ */ jsxs6("div", { id: "profile-section", class: "dashboard-section hidden", children: [
        /* @__PURE__ */ jsx6("div", { class: "text-center mb-8", children: /* @__PURE__ */ jsx6("div", { class: "scribble-border inline-block p-4", children: /* @__PURE__ */ jsx6("h1", { class: "text-3xl font-bold font-sketch transform -rotate-1", children: "\u{1F464} My Profile" }) }) }),
        /* @__PURE__ */ jsx6("div", { class: "max-w-2xl mx-auto", children: /* @__PURE__ */ jsx6("div", { class: "scribble-card p-8 bg-gray-50", children: /* @__PURE__ */ jsxs6("form", { id: "profileForm", class: "space-y-6", children: [
          /* @__PURE__ */ jsxs6("div", { class: "text-center mb-6", children: [
            /* @__PURE__ */ jsx6("div", { class: "w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl mx-auto mb-4", children: user.role === "student" ? "\u{1F393}" : "\u{1F451}" }),
            /* @__PURE__ */ jsx6("h2", { class: "text-2xl font-bold font-sketch", children: user.name }),
            /* @__PURE__ */ jsx6("p", { class: "font-handwritten text-gray-600", children: user.email })
          ] }),
          /* @__PURE__ */ jsxs6("div", { class: "grid md:grid-cols-2 gap-4", children: [
            /* @__PURE__ */ jsxs6("div", { children: [
              /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Full Name" }),
              /* @__PURE__ */ jsx6("input", { type: "text", id: "profileName", value: "{user.name}", class: "w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" })
            ] }),
            /* @__PURE__ */ jsxs6("div", { children: [
              /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Email" }),
              /* @__PURE__ */ jsx6("input", { type: "email", id: "profileEmail", value: "{user.email}", disabled: true, class: "w-full p-3 border-2 border-gray-400 border-dashed rounded font-handwritten bg-gray-100" })
            ] })
          ] }),
          user.role === "student" ? /* @__PURE__ */ jsxs6(Fragment, { children: [
            /* @__PURE__ */ jsxs6("div", { class: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs6("div", { children: [
                /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "University" }),
                /* @__PURE__ */ jsx6("input", { type: "text", id: "profileUniversity", value: "{user.university || ''}", class: "w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" })
              ] }),
              /* @__PURE__ */ jsxs6("div", { children: [
                /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Major" }),
                /* @__PURE__ */ jsx6("input", { type: "text", id: "profileMajor", value: "{user.major || ''}", class: "w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs6("div", { children: [
              /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Graduation Year" }),
              /* @__PURE__ */ jsx6("input", { type: "number", id: "profileGradYear", value: "{user.graduationYear || ''}", class: "w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" })
            ] })
          ] }) : /* @__PURE__ */ jsxs6(Fragment, { children: [
            /* @__PURE__ */ jsxs6("div", { class: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs6("div", { children: [
                /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Company" }),
                /* @__PURE__ */ jsx6("input", { type: "text", id: "profileCompany", value: "{user.company || ''}", class: "w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" })
              ] }),
              /* @__PURE__ */ jsxs6("div", { children: [
                /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Position" }),
                /* @__PURE__ */ jsx6("input", { type: "text", id: "profilePosition", value: "{user.position || ''}", class: "w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs6("div", { class: "grid md:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs6("div", { children: [
                /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Industry" }),
                /* @__PURE__ */ jsxs6("select", { id: "profileIndustry", class: "w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid", children: [
                  /* @__PURE__ */ jsx6("option", { value: "", children: "Select Industry" }),
                  /* @__PURE__ */ jsx6("option", { value: "technology", children: "Technology" }),
                  /* @__PURE__ */ jsx6("option", { value: "finance", children: "Finance" }),
                  /* @__PURE__ */ jsx6("option", { value: "healthcare", children: "Healthcare" }),
                  /* @__PURE__ */ jsx6("option", { value: "education", children: "Education" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs6("div", { children: [
                /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Years of Experience" }),
                /* @__PURE__ */ jsx6("input", { type: "number", id: "profileExperience", value: "{user.experienceYears || ''}", class: "w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs6("div", { children: [
            /* @__PURE__ */ jsx6("label", { class: "block font-sketch mb-2", children: "Bio" }),
            /* @__PURE__ */ jsx6("textarea", { id: "profileBio", rows: 4, class: "w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid", placeholder: "Tell us about yourself...", children: user.bio || "" })
          ] }),
          /* @__PURE__ */ jsx6("button", { type: "submit", class: "w-full scribble-button p-4 font-sketch text-xl bg-green-200 hover:bg-green-300", children: "\u{1F4BE} Update Profile" })
        ] }) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsx6("div", { id: "videoCallModal", class: "fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50", children: /* @__PURE__ */ jsx6("div", { class: "bg-white max-w-md mx-4 relative", children: /* @__PURE__ */ jsxs6("div", { class: "scribble-border-large p-8 text-center", children: [
      /* @__PURE__ */ jsx6("div", { class: "text-6xl mb-4", children: "\u{1F4F9}" }),
      /* @__PURE__ */ jsx6("h3", { class: "text-2xl font-bold font-sketch mb-4", children: "Start Video Call?" }),
      /* @__PURE__ */ jsx6("div", { id: "callPartnerInfo", class: "mb-6" }),
      /* @__PURE__ */ jsxs6("div", { class: "flex space-x-4", children: [
        /* @__PURE__ */ jsx6("button", { onclick: "startVideoCall()", class: "scribble-button px-6 py-3 font-sketch bg-green-200 hover:bg-green-300", children: "\u{1F4F9} Start Call" }),
        /* @__PURE__ */ jsx6("button", { onclick: "closeVideoCallModal()", class: "scribble-button px-6 py-3 font-sketch bg-gray-200 hover:bg-gray-300", children: "Cancel" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx6("script", { dangerouslySetInnerHTML: {
      __html: `
        let currentPartner = null;
        let activeSection = 'overview';
        
        // Initialize dashboard
        document.addEventListener('DOMContentLoaded', function() {
          loadCEOs();
          loadRecentActivity();
          loadCompletedCalls();
        });
        
        // Section switching
        function switchSection(sectionName) {
          // Hide all sections
          document.querySelectorAll('.dashboard-section').forEach(section => {
            section.classList.add('hidden');
          });
          
          // Show selected section
          document.getElementById(sectionName + '-section').classList.remove('hidden');
          
          // Update nav buttons
          document.querySelectorAll('.nav-btn').forEach(btn => {
            btn.classList.remove('active', 'bg-blue-200');
          });
          document.querySelectorAll('[data-section="' + sectionName + '"]').forEach(btn => {
            btn.classList.add('active', 'bg-blue-200');
          });
          
          activeSection = sectionName;
        }
        
        // Load mock CEO data
        function loadCEOs() {
          const mockCEOs = [
            {
              id: 1,
              name: "Sarah Chen",
              company: "TechVision Inc",
              position: "CEO & Founder",
              industry: "technology",
              experience: 15,
              rating: 4.9,
              bio: "Serial entrepreneur passionate about AI and mentoring young talent.",
              image: "\u{1F469}\u200D\u{1F4BC}"
            },
            {
              id: 2,
              name: "Marcus Johnson", 
              company: "FinanceForward",
              position: "Chief Executive Officer",
              industry: "finance",
              experience: 20,
              rating: 4.8,
              bio: "Former Wall Street veteran now leading innovative fintech solutions.",
              image: "\u{1F468}\u200D\u{1F4BC}"
            },
            {
              id: 3,
              name: "Dr. Amanda Rodriguez",
              company: "HealthTech Solutions",
              position: "CEO",
              industry: "healthcare",
              experience: 12,
              rating: 4.9,
              bio: "Medical doctor turned entrepreneur revolutionizing healthcare delivery.",
              image: "\u{1F469}\u200D\u2695\uFE0F"
            },
            {
              id: 4,
              name: "David Kim",
              company: "EcoInnovate",
              position: "Founder & CEO",
              industry: "manufacturing",
              experience: 18,
              rating: 4.7,
              bio: "Sustainability expert building the future of green manufacturing.",
              image: "\u{1F468}\u200D\u{1F52C}"
            },
            {
              id: 5,
              name: "Lisa Thompson",
              company: "EduTech Global",
              position: "Chief Executive",
              industry: "education",
              experience: 14,
              rating: 4.8,
              bio: "Former teacher passionate about transforming education through technology.",
              image: "\u{1F469}\u200D\u{1F3EB}"
            },
            {
              id: 6,
              name: "Robert Martinez",
              company: "RetailRevolution",
              position: "CEO",
              industry: "retail",
              experience: 22,
              rating: 4.6,
              bio: "Retail innovator connecting brands with conscious consumers.",
              image: "\u{1F468}\u200D\u{1F4BC}"
            }
          ];
          
          renderCEOGrid(mockCEOs);
        }
        
        // Render CEO grid
        function renderCEOGrid(ceos) {
          const grid = document.getElementById('ceoGrid');
          grid.innerHTML = ceos.map(ceo => 
            '<div class="scribble-card p-6 transform hover:rotate-1 transition-transform">' +
              '<div class="text-center mb-4">' +
                '<div class="text-4xl mb-2">' + ceo.image + '</div>' +
                '<h3 class="text-xl font-bold font-sketch">' + ceo.name + '</h3>' +
                '<p class="font-handwritten text-gray-600">' + ceo.position + '</p>' +
                '<p class="font-handwritten text-sm">' + ceo.company + '</p>' +
              '</div>' +
              '<div class="space-y-2 mb-4">' +
                '<div class="flex justify-between text-sm font-handwritten">' +
                  '<span>Industry:</span>' +
                  '<span>' + ceo.industry.charAt(0).toUpperCase() + ceo.industry.slice(1) + '</span>' +
                '</div>' +
                '<div class="flex justify-between text-sm font-handwritten">' +
                  '<span>Experience:</span>' +
                  '<span>' + ceo.experience + ' years</span>' +
                '</div>' +
                '<div class="flex justify-between text-sm font-handwritten">' +
                  '<span>Rating:</span>' +
                  '<span>\u2B50 ' + ceo.rating + '/5</span>' +
                '</div>' +
              '</div>' +
              '<p class="font-handwritten text-sm text-gray-700 mb-4">' + ceo.bio + '</p>' +
              '<button onclick="requestVideoCall(' + ceo.id + ')" class="w-full scribble-button p-3 font-sketch bg-blue-200 hover:bg-blue-300">' +
                '\u{1F4F9} Request Video Call' +
              '</button>' +
            '</div>'
          ).join('');
        }
        
        // Search CEOs
        function searchCEOs() {
          const industry = document.getElementById('industryFilter').value;
          const experience = document.getElementById('experienceFilter').value;
          const companySize = document.getElementById('companySizeFilter').value;
          
          // This would normally make an API call
          console.log('Searching CEOs with filters:', { industry, experience, companySize });
          // For now, just reload all CEOs
          loadCEOs();
        }
        
        // Request video call
        function requestVideoCall(ceoId) {
          // Find CEO details (mock data)
          const mockCEOs = [
            { id: 1, name: "Sarah Chen", company: "TechVision Inc", image: "\u{1F469}\u200D\u{1F4BC}" },
            { id: 2, name: "Marcus Johnson", company: "FinanceForward", image: "\u{1F468}\u200D\u{1F4BC}" },
            { id: 3, name: "Dr. Amanda Rodriguez", company: "HealthTech Solutions", image: "\u{1F469}\u200D\u2695\uFE0F" },
            { id: 4, name: "David Kim", company: "EcoInnovate", image: "\u{1F468}\u200D\u{1F52C}" },
            { id: 5, name: "Lisa Thompson", company: "EduTech Global", image: "\u{1F469}\u200D\u{1F3EB}" },
            { id: 6, name: "Robert Martinez", company: "RetailRevolution", image: "\u{1F468}\u200D\u{1F4BC}" }
          ];
          
          currentPartner = mockCEOs.find(ceo => ceo.id === ceoId);
          
          if (currentPartner) {
            document.getElementById('callPartnerInfo').innerHTML = 
              '<div class="text-4xl mb-2">' + currentPartner.image + '</div>' +
              '<h4 class="font-sketch text-lg font-bold">' + currentPartner.name + '</h4>' +
              '<p class="font-handwritten text-sm text-gray-600">' + currentPartner.company + '</p>' +
              '<p class="font-handwritten text-sm mt-2">Ready to start your video conversation?</p>';
            
            document.getElementById('videoCallModal').classList.remove('hidden');
          }
        }
        
        // Start video call
        function startVideoCall() {
          if (currentPartner) {
            // Generate room ID
            const roomId = 'room_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
            
            // Close modal
            closeVideoCallModal();
            
            // Navigate to video call page
            window.location.href = '/video-call/' + roomId + '?partner=' + encodeURIComponent(currentPartner.name);
          }
        }
        
        // Close video call modal
        function closeVideoCallModal() {
          document.getElementById('videoCallModal').classList.add('hidden');
          currentPartner = null;
        }
        
        // Quick match
        function quickMatch() {
          // Simulate quick matching
          const loadingMsg = document.createElement('div');
          loadingMsg.className = 'fixed top-4 right-4 scribble-card p-4 bg-blue-50 z-50';
          loadingMsg.innerHTML = 
            '<div class="flex items-center space-x-2">' +
              '<svg class="animate-spin w-5 h-5" viewBox="0 0 100 100">' +
                '<circle cx="50" cy="50" r="40" stroke="black" stroke-width="4" fill="none" stroke-dasharray="60 40" />' +
              '</svg>' +
              '<span class="font-handwritten">Finding your perfect match...</span>' +
            '</div>';
          document.body.appendChild(loadingMsg);
          
          setTimeout(() => {
            document.body.removeChild(loadingMsg);
            // Randomly select a CEO for quick match
            const randomCeoId = Math.floor(Math.random() * 6) + 1;
            requestVideoCall(randomCeoId);
          }, 3000);
        }
        
        // Call tab switching
        function showCallTab(tabName) {
          // Hide all call contents
          document.querySelectorAll('.call-tab-content').forEach(content => {
            content.classList.add('hidden');
          });
          
          // Show selected tab
          document.getElementById(tabName + 'Calls').classList.remove('hidden');
          
          // Update tab buttons
          document.querySelectorAll('.call-tab-btn').forEach(btn => {
            btn.classList.remove('active', 'bg-blue-200');
          });
          document.querySelector('[data-tab="' + tabName + '"]').classList.add('active', 'bg-blue-200');
        }
        
        // Load recent activity
        function loadRecentActivity() {
          setTimeout(() => {
            const activities = [
              "\u{1F3AF} Profile viewed by 3 CEOs in the last week",
              "\u{1F4C8} Your profile completion score: 85%", 
              "\u2B50 Received 5-star rating from last conversation",
              "\u{1F525} You're in the top 10% of active students this month"
            ];
            
            document.getElementById('recentActivity').innerHTML = activities.map(activity =>
              '<div class="scribble-card p-4">' +
                '<p class="font-handwritten">' + activity + '</p>' +
              '</div>'
            ).join('');
          }, 1000);
        }
        
        // Load completed calls
        function loadCompletedCalls() {
          setTimeout(() => {
            const calls = [
              {
                partner: "Sarah Chen",
                company: "TechVision Inc", 
                date: "2025-09-20",
                duration: "45 min",
                rating: 5,
                notes: "Amazing insights about AI industry!"
              },
              {
                partner: "Marcus Johnson",
                company: "FinanceForward",
                date: "2025-09-18", 
                duration: "30 min",
                rating: 5,
                notes: "Great career advice for finance."
              }
            ];
            
            document.getElementById('completedCallsList').innerHTML = calls.map(call =>
              '<div class="scribble-card p-4 mb-4">' +
                '<div class="flex justify-between items-start">' +
                  '<div class="flex-1">' +
                    '<h4 class="font-sketch text-lg font-bold">' + call.partner + '</h4>' +
                    '<p class="font-handwritten text-sm text-gray-600">' + call.company + '</p>' +
                    '<p class="font-handwritten text-xs text-gray-500">' + call.date + ' \u2022 ' + call.duration + '</p>' +
                    '<p class="font-handwritten text-sm mt-2">' + call.notes + '</p>' +
                  '</div>' +
                  '<div class="text-right">' +
                    '<div class="text-yellow-500">\u2B50'.repeat(call.rating) + '</div>' +
                  '</div>' +
                '</div>' +
              '</div>'
            ).join('');
          }, 1500);
        }
        
        // Dropdown toggle
        function toggleDropdown() {
          document.getElementById('userDropdown').classList.toggle('hidden');
        }
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
          if (!e.target.closest('.relative')) {
            document.getElementById('userDropdown').classList.add('hidden');
          }
        });
        
        // Profile form handling
        document.getElementById('profileForm').addEventListener('submit', function(e) {
          e.preventDefault();
          
          // Get form data
          const formData = {
            name: document.getElementById('profileName').value,
            bio: document.getElementById('profileBio').value
          };
          
          // Add role-specific fields
          const user = JSON.parse(localStorage.getItem('user') || '{}');
          if (user.role === 'student') {
            formData.university = document.getElementById('profileUniversity').value;
            formData.major = document.getElementById('profileMajor').value;
            formData.graduationYear = parseInt(document.getElementById('profileGradYear').value);
          } else {
            formData.company = document.getElementById('profileCompany').value;
            formData.position = document.getElementById('profilePosition').value;
            formData.industry = document.getElementById('profileIndustry').value;
            formData.experienceYears = parseInt(document.getElementById('profileExperience').value);
          }
          
          // Mock API call (replace with real API)
          console.log('Updating profile:', formData);
          
          // Show success message
          const successMsg = document.createElement('div');
          successMsg.className = 'fixed top-4 right-4 scribble-card p-4 bg-green-50 z-50';
          successMsg.innerHTML = '<p class="font-handwritten text-green-700">\u2705 Profile updated successfully!</p>';
          document.body.appendChild(successMsg);
          
          setTimeout(() => {
            document.body.removeChild(successMsg);
          }, 3000);
        });
        
        // Logout function
        async function logout() {
          const token = localStorage.getItem('auth-token');
          
          if (token) {
            try {
              await fetch('/api/auth/logout', {
                method: 'POST',
                headers: { 'Authorization': 'Bearer ' + token }
              });
            } catch (error) {
              console.error('Logout error:', error);
            }
          }
          
          localStorage.removeItem('auth-token');
          localStorage.removeItem('user');
          document.cookie = 'auth-token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
          
          window.location.href = '/login';
        }
        `
    } })
  ] });
}

// src/pages/video-call.tsx
import { jsx as jsx7, jsxs as jsxs7 } from "hono/jsx/jsx-runtime";
function VideoCallPage({ user, roomId }) {
  return /* @__PURE__ */ jsxs7("div", { class: "min-h-screen bg-gray-900 text-white relative", children: [
    /* @__PURE__ */ jsx7("header", { class: "bg-black p-4 border-b-2 border-white", children: /* @__PURE__ */ jsxs7("div", { class: "flex justify-between items-center max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsx7("div", { class: "scribble-border-white p-2", children: /* @__PURE__ */ jsx7("h1", { class: "text-xl font-sketch", children: "MentorMatch" }) }),
      /* @__PURE__ */ jsxs7("div", { class: "flex space-x-4", children: [
        /* @__PURE__ */ jsx7(
          "button",
          {
            onclick: "nextConversation()",
            class: "scribble-button-white px-4 py-2 font-sketch hover:bg-white hover:text-black transition-colors",
            children: "Next \u2192"
          }
        ),
        /* @__PURE__ */ jsx7(
          "button",
          {
            onclick: "endCall()",
            class: "scribble-button-white px-4 py-2 font-sketch bg-red-600 hover:bg-red-500",
            children: "End Call"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs7("div", { class: "flex h-screen pt-16", children: [
      /* @__PURE__ */ jsxs7("div", { class: "flex-1 p-4", children: [
        /* @__PURE__ */ jsxs7("div", { class: "grid grid-cols-1 md:grid-cols-2 gap-4 h-full", children: [
          /* @__PURE__ */ jsx7("div", { class: "relative", children: /* @__PURE__ */ jsxs7("div", { class: "scribble-border-white h-full bg-gray-800 rounded-lg overflow-hidden relative", children: [
            /* @__PURE__ */ jsx7("video", { id: "partnerVideo", class: "w-full h-full object-cover", autoplay: true, playsinline: true }),
            /* @__PURE__ */ jsx7("div", { class: "absolute top-4 left-4 scribble-border-white p-2 bg-black bg-opacity-75", children: /* @__PURE__ */ jsx7("span", { id: "partnerRole", class: "font-sketch text-sm", children: "CEO" }) }),
            /* @__PURE__ */ jsx7("div", { id: "mockPartnerVideo", class: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900", children: /* @__PURE__ */ jsxs7("div", { class: "text-center", children: [
              /* @__PURE__ */ jsx7("div", { class: "text-6xl mb-4", children: "\u{1F464}" }),
              /* @__PURE__ */ jsx7("p", { class: "font-sketch text-xl", children: "Connecting..." })
            ] }) })
          ] }) }),
          /* @__PURE__ */ jsx7("div", { class: "relative", children: /* @__PURE__ */ jsxs7("div", { class: "scribble-border-white h-full bg-gray-800 rounded-lg overflow-hidden relative", children: [
            /* @__PURE__ */ jsx7("video", { id: "localVideo", class: "w-full h-full object-cover", autoplay: true, muted: true, playsinline: true }),
            /* @__PURE__ */ jsx7("div", { class: "absolute top-4 left-4 scribble-border-white p-2 bg-black bg-opacity-75", children: /* @__PURE__ */ jsx7("span", { id: "userRole", class: "font-sketch text-sm", children: "Student" }) }),
            /* @__PURE__ */ jsx7("div", { id: "mockLocalVideo", class: "absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900", children: /* @__PURE__ */ jsxs7("div", { class: "text-center", children: [
              /* @__PURE__ */ jsx7("div", { class: "text-6xl mb-4", children: "\u{1F393}" }),
              /* @__PURE__ */ jsx7("p", { class: "font-sketch text-xl", children: "You" })
            ] }) })
          ] }) })
        ] }),
        /* @__PURE__ */ jsxs7("div", { class: "flex justify-center mt-4 space-x-4", children: [
          /* @__PURE__ */ jsx7(
            "button",
            {
              onclick: "toggleMute()",
              class: "scribble-button-white p-3 rounded-full hover:bg-gray-700 transition-colors",
              children: /* @__PURE__ */ jsx7("span", { id: "muteIcon", children: "\u{1F3A4}" })
            }
          ),
          /* @__PURE__ */ jsx7(
            "button",
            {
              onclick: "toggleVideo()",
              class: "scribble-button-white p-3 rounded-full hover:bg-gray-700 transition-colors",
              children: /* @__PURE__ */ jsx7("span", { id: "videoIcon", children: "\u{1F4F9}" })
            }
          ),
          /* @__PURE__ */ jsx7(
            "button",
            {
              onclick: "shareScreen()",
              class: "scribble-button-white p-3 rounded-full hover:bg-gray-700 transition-colors",
              children: /* @__PURE__ */ jsx7("span", { children: "\u{1F4FA}" })
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs7("div", { class: "w-80 bg-black border-l-2 border-white p-4 flex flex-col", children: [
        /* @__PURE__ */ jsx7("div", { class: "scribble-border-white p-3 mb-4", children: /* @__PURE__ */ jsx7("h3", { class: "font-sketch text-lg text-center", children: "Chat" }) }),
        /* @__PURE__ */ jsx7("div", { id: "chatMessages", class: "flex-1 overflow-y-auto mb-4 space-y-3", children: /* @__PURE__ */ jsxs7("div", { class: "bg-gray-800 p-3 rounded border border-gray-600", children: [
          /* @__PURE__ */ jsx7("span", { class: "font-sketch text-sm text-gray-300", children: "System:" }),
          /* @__PURE__ */ jsx7("p", { class: "font-handwritten text-sm mt-1", children: "You're now connected! Say hello \u{1F44B}" })
        ] }) }),
        /* @__PURE__ */ jsxs7("div", { class: "flex space-x-2", children: [
          /* @__PURE__ */ jsx7(
            "input",
            {
              type: "text",
              id: "chatInput",
              placeholder: "Type a message...",
              class: "flex-1 p-2 bg-gray-800 border border-gray-600 rounded font-handwritten text-sm focus:outline-none focus:border-white",
              onkeypress: "handleChatEnter(event)"
            }
          ),
          /* @__PURE__ */ jsx7(
            "button",
            {
              onclick: "sendMessage()",
              class: "scribble-button-white px-4 py-2 font-sketch text-sm hover:bg-gray-700 transition-colors",
              children: "Send"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs7("div", { class: "mt-4 scribble-border-white p-3", children: [
          /* @__PURE__ */ jsx7("h4", { class: "font-sketch text-sm mb-2", children: "Connection Info" }),
          /* @__PURE__ */ jsxs7("div", { class: "text-xs font-handwritten space-y-1 text-gray-300", children: [
            /* @__PURE__ */ jsxs7("p", { children: [
              "Status: ",
              /* @__PURE__ */ jsx7("span", { class: "text-green-400", children: "Connected" })
            ] }),
            /* @__PURE__ */ jsxs7("p", { children: [
              "Duration: ",
              /* @__PURE__ */ jsx7("span", { id: "callDuration", children: "00:00" })
            ] }),
            /* @__PURE__ */ jsxs7("p", { children: [
              "Quality: ",
              /* @__PURE__ */ jsx7("span", { class: "text-green-400", children: "Good" })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx7("script", { src: "/static/webrtc.js" }),
    /* @__PURE__ */ jsx7("script", { dangerouslySetInnerHTML: {
      __html: `
        // Initialize real WebRTC when page loads
        document.addEventListener('DOMContentLoaded', function() {
          // Get user and room info from props
          const user = ${JSON.stringify(user)};
          const roomId = '${roomId}';
          
          // Check authentication
          const token = localStorage.getItem('auth-token');
          if (!token) {
            window.location.href = '/login';
            return;
          }
          
          // Initialize real WebRTC
          initializeWebRTC(roomId, user);
          
          console.log('\u{1F3A5} Video call initialized for:', user.name, 'in room:', roomId);
        });
        
        // Auth check function
        async function checkAuth() {
          const token = localStorage.getItem('auth-token');
          if (!token) {
            window.location.href = '/login';
            return false;
          }
          
          try {
            const response = await fetch('/api/auth/me', {
              headers: { 'Authorization': 'Bearer ' + token }
            });
            
            if (!response.ok) {
              localStorage.removeItem('auth-token');
              localStorage.removeItem('user');
              window.location.href = '/login';
              return false;
            }
            
            return true;
          } catch (error) {
            console.error('Auth check failed:', error);
            return false;
          }
        }
        
        // Call auth check
        checkAuth();
        `
    } })
  ] });
}

// src/pages/donation.tsx
import { jsx as jsx8, jsxs as jsxs8 } from "hono/jsx/jsx-runtime";
function DonationPage() {
  return /* @__PURE__ */ jsxs8("div", { class: "min-h-screen bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs8("div", { class: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx8("svg", { class: "absolute top-10 right-10 w-32 h-32 opacity-10", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx8("path", { d: "M50,10 L90,90 L10,90 Z", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-pulse" }) }),
      /* @__PURE__ */ jsx8("svg", { class: "absolute bottom-20 left-10 w-40 h-20 opacity-10", viewBox: "0 0 100 50", children: /* @__PURE__ */ jsx8("path", { d: "M10,25 Q30,5 50,25 Q70,45 90,25", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-bounce-slow" }) }),
      /* @__PURE__ */ jsx8("svg", { class: "absolute top-1/2 left-1/4 w-24 h-24 opacity-10", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx8("circle", { cx: "50", cy: "50", r: "40", stroke: "black", "stroke-width": "2", fill: "none", "stroke-dasharray": "10 5" }) })
    ] }),
    /* @__PURE__ */ jsxs8("div", { class: "relative z-10 container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxs8("div", { class: "text-center mb-12", children: [
        /* @__PURE__ */ jsx8("div", { class: "scribble-border inline-block p-4 mb-6", children: /* @__PURE__ */ jsx8("h1", { class: "text-3xl font-bold font-sketch", children: "MentorMatch" }) }),
        /* @__PURE__ */ jsxs8("div", { class: "scribble-border-large inline-block p-6", children: [
          /* @__PURE__ */ jsx8("h2", { class: "text-4xl md:text-5xl font-bold font-sketch mb-4 transform -rotate-1", children: "Thanks for connecting! \u{1F4AB}" }),
          /* @__PURE__ */ jsx8("p", { class: "text-xl font-handwritten max-w-2xl mx-auto", children: "Help us keep these meaningful conversations flowing" })
        ] })
      ] }),
      /* @__PURE__ */ jsx8("div", { class: "text-center mb-12", children: /* @__PURE__ */ jsxs8("div", { class: "scribble-border inline-block p-6 max-w-xl bg-gray-50", children: [
        /* @__PURE__ */ jsx8("h3", { class: "text-2xl font-bold font-sketch mb-4 transform rotate-1", children: "Your Conversation" }),
        /* @__PURE__ */ jsxs8("div", { class: "space-y-2 font-handwritten text-lg", children: [
          /* @__PURE__ */ jsxs8("p", { children: [
            "Duration: ",
            /* @__PURE__ */ jsx8("span", { id: "callDuration", class: "font-bold", children: "5 minutes" })
          ] }),
          /* @__PURE__ */ jsxs8("p", { children: [
            "Connected with: ",
            /* @__PURE__ */ jsx8("span", { id: "partnerType", class: "font-bold", children: "A successful CEO" })
          ] }),
          /* @__PURE__ */ jsx8("p", { children: "Rating: \u2B50\u2B50\u2B50\u2B50\u2B50" })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx8("div", { class: "text-center mb-12", children: /* @__PURE__ */ jsxs8("div", { class: "scribble-border-large inline-block p-8 max-w-2xl", children: [
        /* @__PURE__ */ jsx8("h3", { class: "text-3xl font-bold font-sketch mb-6 transform -rotate-1", children: "Support Our Mission \u{1F680}" }),
        /* @__PURE__ */ jsx8("p", { class: "text-lg font-handwritten mb-8 leading-relaxed", children: "Every donation helps us connect more students with inspiring leaders. Your support makes these life-changing conversations possible!" }),
        /* @__PURE__ */ jsxs8("div", { class: "grid grid-cols-2 md:grid-cols-4 gap-4 mb-8", children: [
          /* @__PURE__ */ jsxs8(
            "button",
            {
              onclick: "donate(1)",
              class: "donation-btn scribble-button p-4 font-sketch text-lg hover:scale-105 hover:rotate-1 transition-all duration-300 bg-green-100 hover:bg-green-200",
              children: [
                "$1",
                /* @__PURE__ */ jsx8("div", { class: "text-sm font-handwritten", children: "Coffee Fund" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs8(
            "button",
            {
              onclick: "donate(5)",
              class: "donation-btn scribble-button p-4 font-sketch text-lg hover:scale-105 hover:-rotate-1 transition-all duration-300 bg-blue-100 hover:bg-blue-200",
              children: [
                "$5",
                /* @__PURE__ */ jsx8("div", { class: "text-sm font-handwritten", children: "Popular Choice" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs8(
            "button",
            {
              onclick: "donate(10)",
              class: "donation-btn scribble-button p-4 font-sketch text-lg hover:scale-105 hover:rotate-1 transition-all duration-300 bg-purple-100 hover:bg-purple-200",
              children: [
                "$10",
                /* @__PURE__ */ jsx8("div", { class: "text-sm font-handwritten", children: "Super Supporter" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs8(
            "button",
            {
              onclick: "showCustomAmount()",
              class: "donation-btn scribble-button p-4 font-sketch text-lg hover:scale-105 hover:-rotate-1 transition-all duration-300 bg-yellow-100 hover:bg-yellow-200",
              children: [
                "Other",
                /* @__PURE__ */ jsx8("div", { class: "text-sm font-handwritten", children: "Choose Amount" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx8("div", { id: "customAmountSection", class: "hidden mb-6", children: /* @__PURE__ */ jsxs8("div", { class: "scribble-border inline-block p-4", children: [
          /* @__PURE__ */ jsx8(
            "input",
            {
              type: "number",
              id: "customAmount",
              placeholder: "Enter amount",
              class: "p-2 border-2 border-black border-dashed font-handwritten text-center w-32 mr-4",
              min: "1",
              max: "1000"
            }
          ),
          /* @__PURE__ */ jsx8(
            "button",
            {
              onclick: "donateCustom()",
              class: "scribble-button px-4 py-2 font-sketch bg-green-200 hover:bg-green-300",
              children: "Donate"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsx8("div", { class: "text-center", children: /* @__PURE__ */ jsx8(
          "button",
          {
            onclick: "skipDonation()",
            class: "font-handwritten text-gray-600 hover:text-black underline transform hover:rotate-1 transition-all",
            children: "Skip for now (but we'd love your support next time!)"
          }
        ) })
      ] }) }),
      /* @__PURE__ */ jsx8("div", { class: "text-center mb-12", children: /* @__PURE__ */ jsxs8("div", { class: "scribble-border inline-block p-6 max-w-2xl", children: [
        /* @__PURE__ */ jsx8("h4", { class: "text-xl font-bold font-sketch mb-4 transform rotate-1", children: "Your Impact" }),
        /* @__PURE__ */ jsxs8("div", { class: "grid md:grid-cols-3 gap-6 font-handwritten", children: [
          /* @__PURE__ */ jsxs8("div", { class: "text-center", children: [
            /* @__PURE__ */ jsx8("div", { class: "text-2xl mb-2", children: "\u{1F4A1}" }),
            /* @__PURE__ */ jsx8("p", { class: "text-sm", children: "1,247 students inspired this month" })
          ] }),
          /* @__PURE__ */ jsxs8("div", { class: "text-center", children: [
            /* @__PURE__ */ jsx8("div", { class: "text-2xl mb-2", children: "\u{1F91D}" }),
            /* @__PURE__ */ jsx8("p", { class: "text-sm", children: "563 meaningful connections made" })
          ] }),
          /* @__PURE__ */ jsxs8("div", { class: "text-center", children: [
            /* @__PURE__ */ jsx8("div", { class: "text-2xl mb-2", children: "\u{1F3AF}" }),
            /* @__PURE__ */ jsx8("p", { class: "text-sm", children: "89% report career clarity" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs8("div", { class: "text-center space-x-4", children: [
        /* @__PURE__ */ jsx8(
          "button",
          {
            onclick: "startNewConversation()",
            class: "scribble-button px-6 py-3 font-sketch text-lg hover:rotate-1 transition-transform bg-blue-200 hover:bg-blue-300",
            children: "Start Another Conversation"
          }
        ),
        /* @__PURE__ */ jsx8(
          "a",
          {
            href: "/",
            class: "scribble-button inline-block px-6 py-3 font-sketch text-lg hover:-rotate-1 transition-transform bg-gray-200 hover:bg-gray-300",
            children: "Back to Home"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx8("div", { id: "donationModal", class: "fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50", children: /* @__PURE__ */ jsx8("div", { class: "bg-white p-8 max-w-md mx-4 relative", children: /* @__PURE__ */ jsxs8("div", { class: "scribble-border-large p-6 text-center", children: [
      /* @__PURE__ */ jsx8("div", { class: "text-6xl mb-4", children: "\u{1F389}" }),
      /* @__PURE__ */ jsx8("h3", { class: "text-2xl font-bold font-sketch mb-4 transform -rotate-1", children: "Thanks for your support!" }),
      /* @__PURE__ */ jsxs8("p", { class: "font-handwritten text-lg mb-6", children: [
        "Your ",
        /* @__PURE__ */ jsx8("span", { id: "donatedAmount", class: "font-bold", children: "$5" }),
        " donation helps us connect more students with amazing leaders like the one you just spoke with!"
      ] }),
      /* @__PURE__ */ jsxs8("div", { class: "space-y-3 font-handwritten text-sm mb-6", children: [
        /* @__PURE__ */ jsx8("p", { children: "\u2705 Transaction completed successfully" }),
        /* @__PURE__ */ jsx8("p", { children: "\u2705 Receipt sent to your email" }),
        /* @__PURE__ */ jsx8("p", { children: "\u2705 You're making a difference!" })
      ] }),
      /* @__PURE__ */ jsx8(
        "button",
        {
          onclick: "closeDonationModal()",
          class: "scribble-button px-6 py-3 font-sketch bg-green-200 hover:bg-green-300",
          children: "Continue"
        }
      )
    ] }) }) }),
    /* @__PURE__ */ jsx8("script", { dangerouslySetInnerHTML: {
      __html: `
        // Set user info from previous session
        document.addEventListener('DOMContentLoaded', function() {
          const userRole = sessionStorage.getItem('userRole') || 'student';
          const partnerType = userRole === 'student' ? 'A successful CEO' : 'An ambitious student';
          document.getElementById('partnerType').textContent = partnerType;
        });

        function donate(amount) {
          showDonationSuccess(amount);
        }

        function showCustomAmount() {
          document.getElementById('customAmountSection').classList.remove('hidden');
        }

        function donateCustom() {
          const amount = parseInt(document.getElementById('customAmount').value);
          if (amount && amount > 0) {
            showDonationSuccess(amount);
          } else {
            alert('Please enter a valid amount');
          }
        }

        function showDonationSuccess(amount) {
          document.getElementById('donatedAmount').textContent = '$' + amount;
          document.getElementById('donationModal').classList.remove('hidden');
          
          // Add some celebration effects
          document.querySelectorAll('.donation-btn').forEach(btn => {
            btn.style.pointerEvents = 'none';
            btn.style.opacity = '0.6';
          });
        }

        function closeDonationModal() {
          document.getElementById('donationModal').classList.add('hidden');
        }

        function skipDonation() {
          if (confirm('Are you sure you want to skip? Your support really helps us keep this platform free for students!')) {
            // Maybe show a gentle reminder or alternative way to help
            alert('No worries! Consider sharing MentorMatch with friends who might benefit from it. \u{1F60A}');
          }
        }

        function startNewConversation() {
          window.location.href = '/role-select';
        }

        // Add some random motivational messages
        const motivationalMessages = [
          "Every conversation has the power to change a life! \u{1F31F}",
          "You just participated in something amazing! \u{1F4AB}",
          "Great conversations create great futures! \u{1F680}",
          "Thank you for being part of our community! \u{1F917}"
        ];

        setTimeout(() => {
          const randomMessage = motivationalMessages[Math.floor(Math.random() * motivationalMessages.length)];
          const messageDiv = document.createElement('div');
          messageDiv.className = 'fixed bottom-4 right-4 bg-yellow-100 p-4 scribble-border font-handwritten text-sm max-w-xs transform rotate-2 transition-opacity duration-500';
          messageDiv.textContent = randomMessage;
          document.body.appendChild(messageDiv);
          
          setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => messageDiv.remove(), 500);
          }, 4000);
        }, 2000);
        `
    } })
  ] });
}

// src/pages/about.tsx
import { jsx as jsx9, jsxs as jsxs9 } from "hono/jsx/jsx-runtime";
function AboutPage() {
  return /* @__PURE__ */ jsxs9("div", { class: "min-h-screen bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs9("div", { class: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx9("svg", { class: "absolute top-16 left-16 w-48 h-48 opacity-5", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx9("path", { d: "M10,10 Q50,50 90,10 Q50,50 10,90 Q50,50 90,90 Q50,50 10,10", stroke: "black", "stroke-width": "1", fill: "none", class: "animate-pulse" }) }),
      /* @__PURE__ */ jsx9("svg", { class: "absolute top-32 right-16 w-32 h-32 opacity-5", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx9("circle", { cx: "50", cy: "50", r: "40", stroke: "black", "stroke-width": "1", fill: "none", "stroke-dasharray": "5 5", class: "animate-spin" }) }),
      /* @__PURE__ */ jsx9("svg", { class: "absolute bottom-16 left-1/4 w-40 h-40 opacity-5", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx9("path", { d: "M20,20 L80,80 M80,20 L20,80 M50,10 L50,90 M10,50 L90,50", stroke: "black", "stroke-width": "1" }) })
    ] }),
    /* @__PURE__ */ jsxs9("div", { class: "relative z-10 container mx-auto px-4 py-8", children: [
      /* @__PURE__ */ jsxs9("div", { class: "text-center mb-16", children: [
        /* @__PURE__ */ jsx9("a", { href: "/", class: "inline-block scribble-border p-3 mb-8 hover:rotate-1 transition-transform", children: /* @__PURE__ */ jsx9("h1", { class: "text-3xl font-bold font-sketch", children: "MentorMatch" }) }),
        /* @__PURE__ */ jsxs9("div", { class: "scribble-border-large inline-block p-6", children: [
          /* @__PURE__ */ jsx9("h2", { class: "text-4xl md:text-6xl font-bold font-sketch mb-4 transform -rotate-1", children: "Our Story \u{1F4D6}" }),
          /* @__PURE__ */ jsx9("p", { class: "text-xl font-handwritten max-w-3xl mx-auto", children: "Free career advice, professional mentorship, and one-on-one tutoring from industry leaders" })
        ] })
      ] }),
      /* @__PURE__ */ jsx9("div", { class: "mb-16", children: /* @__PURE__ */ jsxs9("div", { class: "scribble-border-large p-8 max-w-4xl mx-auto bg-gray-50", children: [
        /* @__PURE__ */ jsx9("h3", { class: "text-3xl font-bold font-sketch mb-6 text-center transform rotate-1", children: "\u{1F3AF} Our Mission" }),
        /* @__PURE__ */ jsx9(
          "img",
          {
            src: "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80",
            alt: "Student receiving career coaching and professional development guidance from a mentor",
            class: "w-full h-56 object-cover rounded mb-6",
            style: "border-radius: 12px 20px 16px 24px"
          }
        ),
        /* @__PURE__ */ jsx9("p", { class: "text-lg font-handwritten leading-relaxed mb-6", children: "At MentorMatch, we believe that every college student deserves access to career advice, career guidance, and professional mentoring from successful leaders and entrepreneurs. Too often, these valuable mentorship opportunities are limited by geography, network size, or social barriers." }),
        /* @__PURE__ */ jsx9("p", { class: "text-lg font-handwritten leading-relaxed", children: "We're breaking down those walls by creating a mentorship platform where career coaching and tutoring sessions can happen instantly and authentically - connecting students with executive coaches and industry leaders for the career counseling that drives long-term career success." })
      ] }) }),
      /* @__PURE__ */ jsx9("div", { class: "mb-16", children: /* @__PURE__ */ jsxs9("div", { class: "scribble-border p-6 max-w-3xl mx-auto transform rotate-1", children: [
        /* @__PURE__ */ jsx9("h3", { class: "text-2xl font-bold font-sketch mb-4 text-center", children: "\u{1F4A1} How It All Started" }),
        /* @__PURE__ */ jsx9(
          "img",
          {
            src: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=700&q=80",
            alt: "Students networking with professionals for career advice and mentorship opportunities",
            class: "w-full h-48 object-cover rounded mb-4",
            style: "border-radius: 10px 18px 14px 20px"
          }
        ),
        /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-lg leading-relaxed", children: "The idea came from a simple observation: the best career advice often comes by chance. A student sitting next to a CEO on a plane. A chance meeting with a mentor at a coffee shop. A random networking encounter at a conference. These moments of career guidance can change entire career trajectories - but they're too rare and too dependent on luck. We built MentorMatch so finding a mentor is just one click away." })
      ] }) }),
      /* @__PURE__ */ jsxs9("div", { class: "mb-16", children: [
        /* @__PURE__ */ jsx9("h3", { class: "text-3xl font-bold font-sketch text-center mb-8 transform -rotate-1", children: "\u{1F31F} What We Stand For" }),
        /* @__PURE__ */ jsxs9("div", { class: "grid md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
          /* @__PURE__ */ jsxs9("div", { class: "scribble-card p-6 text-center transform hover:rotate-2 transition-transform", children: [
            /* @__PURE__ */ jsx9("div", { class: "text-4xl mb-4", children: "\u{1F91D}" }),
            /* @__PURE__ */ jsx9("h4", { class: "font-bold font-sketch text-lg mb-3", children: "One-on-One Mentoring" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-sm", children: "Real career coaching conversations with real professionals, no scripts or agendas." })
          ] }),
          /* @__PURE__ */ jsxs9("div", { class: "scribble-card p-6 text-center transform hover:-rotate-2 transition-transform", children: [
            /* @__PURE__ */ jsx9("div", { class: "text-4xl mb-4", children: "\u{1F3B2}" }),
            /* @__PURE__ */ jsx9("h4", { class: "font-bold font-sketch text-lg mb-3", children: "Serendipity" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-sm", children: "Embracing the magic of unexpected encounters and random wisdom." })
          ] }),
          /* @__PURE__ */ jsxs9("div", { class: "scribble-card p-6 text-center transform hover:rotate-2 transition-transform", children: [
            /* @__PURE__ */ jsx9("div", { class: "text-4xl mb-4", children: "\u{1F680}" }),
            /* @__PURE__ */ jsx9("h4", { class: "font-bold font-sketch text-lg mb-3", children: "Career Growth" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-sm", children: "Every mentoring session is an opportunity for professional development and career advancement." })
          ] }),
          /* @__PURE__ */ jsxs9("div", { class: "scribble-card p-6 text-center transform hover:-rotate-2 transition-transform", children: [
            /* @__PURE__ */ jsx9("div", { class: "text-4xl mb-4", children: "\u{1F30D}" }),
            /* @__PURE__ */ jsx9("h4", { class: "font-bold font-sketch text-lg mb-3", children: "Free Career Advice" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-sm", children: "Breaking down barriers to career counseling, tutoring, and professional mentorship." })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx9("div", { class: "mb-16", children: /* @__PURE__ */ jsxs9("div", { class: "scribble-border-large p-8 max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx9("h3", { class: "text-3xl font-bold font-sketch mb-8 transform rotate-1", children: "\u{1F4CA} Our Impact (So Far!)" }),
        /* @__PURE__ */ jsx9(
          "img",
          {
            src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
            alt: "Professional career coaching and tutoring in a one-on-one mentorship setting",
            class: "w-full h-48 object-cover rounded mb-8",
            style: "border-radius: 12px 20px 16px 24px"
          }
        ),
        /* @__PURE__ */ jsxs9("div", { class: "grid md:grid-cols-3 gap-8", children: [
          /* @__PURE__ */ jsxs9("div", { class: "transform hover:scale-105 transition-transform", children: [
            /* @__PURE__ */ jsx9("div", { class: "text-4xl font-bold font-sketch text-blue-600 mb-2", children: "2,847" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten", children: "Conversations facilitated" })
          ] }),
          /* @__PURE__ */ jsxs9("div", { class: "transform hover:scale-105 transition-transform", children: [
            /* @__PURE__ */ jsx9("div", { class: "text-4xl font-bold font-sketch text-green-600 mb-2", children: "89%" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten", children: "Report career success and clarity" })
          ] }),
          /* @__PURE__ */ jsxs9("div", { class: "transform hover:scale-105 transition-transform", children: [
            /* @__PURE__ */ jsx9("div", { class: "text-4xl font-bold font-sketch text-purple-600 mb-2", children: "156" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten", children: "Job offers from career mentorship connections" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs9("div", { class: "mb-16", children: [
        /* @__PURE__ */ jsx9("h3", { class: "text-3xl font-bold font-sketch text-center mb-8 transform -rotate-1", children: "\u{1F465} The Dream Team" }),
        /* @__PURE__ */ jsxs9("div", { class: "grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto", children: [
          /* @__PURE__ */ jsxs9("div", { class: "scribble-card p-6 text-center transform hover:rotate-1 transition-transform", children: [
            /* @__PURE__ */ jsx9("div", { class: "text-5xl mb-4", children: "\u{1F469}\u200D\u{1F4BB}" }),
            /* @__PURE__ */ jsx9("h4", { class: "font-bold font-sketch text-lg mb-2", children: "Sarah Chen" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-sm text-gray-600 mb-3", children: "Founder & CEO" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-xs", children: '"Former student who got her break through a random coffee chat"' })
          ] }),
          /* @__PURE__ */ jsxs9("div", { class: "scribble-card p-6 text-center transform hover:-rotate-1 transition-transform", children: [
            /* @__PURE__ */ jsx9("div", { class: "text-5xl mb-4", children: "\u{1F468}\u200D\u{1F52C}" }),
            /* @__PURE__ */ jsx9("h4", { class: "font-bold font-sketch text-lg mb-2", children: "Marcus Rodriguez" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-sm text-gray-600 mb-3", children: "Head of Technology" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-xs", children: '"Making sure the tech never gets in the way of human connection"' })
          ] }),
          /* @__PURE__ */ jsxs9("div", { class: "scribble-card p-6 text-center transform hover:rotate-1 transition-transform", children: [
            /* @__PURE__ */ jsx9("div", { class: "text-5xl mb-4", children: "\u{1F469}\u200D\u{1F3A8}" }),
            /* @__PURE__ */ jsx9("h4", { class: "font-bold font-sketch text-lg mb-2", children: "Zoe Williams" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-sm text-gray-600 mb-3", children: "Community Manager" }),
            /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-xs", children: '"Creating magic moments and keeping the community safe"' })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsx9("div", { class: "mb-16", children: /* @__PURE__ */ jsxs9("div", { class: "scribble-border-large p-8 max-w-4xl mx-auto bg-yellow-50", children: [
        /* @__PURE__ */ jsx9("h3", { class: "text-3xl font-bold font-sketch mb-6 text-center transform -rotate-1", children: "\u{1F52E} What's Next?" }),
        /* @__PURE__ */ jsxs9("div", { class: "space-y-4 font-handwritten text-lg", children: [
          /* @__PURE__ */ jsxs9("p", { children: [
            "\u2022 ",
            /* @__PURE__ */ jsx9("strong", { children: "Global Mentorship Network:" }),
            " Career advice and tutoring from leaders across all continents"
          ] }),
          /* @__PURE__ */ jsxs9("p", { children: [
            "\u2022 ",
            /* @__PURE__ */ jsx9("strong", { children: "Industry-Specific Career Coaching:" }),
            " Find a mentor in your exact field of interest"
          ] }),
          /* @__PURE__ */ jsxs9("p", { children: [
            "\u2022 ",
            /* @__PURE__ */ jsx9("strong", { children: "Long-Term Mentorship:" }),
            " Build ongoing professional mentoring relationships beyond the first session"
          ] }),
          /* @__PURE__ */ jsxs9("p", { children: [
            "\u2022 ",
            /* @__PURE__ */ jsx9("strong", { children: "Career Success Tracking:" }),
            " See real career growth outcomes from mentorship connections"
          ] }),
          /* @__PURE__ */ jsxs9("p", { children: [
            "\u2022 ",
            /* @__PURE__ */ jsx9("strong", { children: "Mobile Career Guidance:" }),
            " Access career counseling and professional development anywhere"
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx9("div", { class: "text-center mb-16", children: /* @__PURE__ */ jsxs9("div", { class: "scribble-border-large inline-block p-8", children: [
        /* @__PURE__ */ jsx9("h3", { class: "text-3xl font-bold font-sketch mb-6 transform rotate-1", children: "Join Our Movement! \u{1F680}" }),
        /* @__PURE__ */ jsx9("p", { class: "text-lg font-handwritten mb-8 max-w-2xl", children: "Whether you're a college student looking for career advice or an executive ready to mentor, join a mentorship program that's helping people build successful careers through professional guidance." }),
        /* @__PURE__ */ jsxs9("div", { class: "space-y-4", children: [
          /* @__PURE__ */ jsx9(
            "a",
            {
              href: "/role-select",
              class: "scribble-button inline-block px-8 py-4 font-sketch text-xl hover:rotate-1 transition-transform bg-blue-200 hover:bg-blue-300 mr-4",
              children: "Start Connecting"
            }
          ),
          /* @__PURE__ */ jsx9(
            "a",
            {
              href: "mailto:hello@mentormatch.com",
              class: "scribble-button inline-block px-8 py-4 font-sketch text-xl hover:-rotate-1 transition-transform bg-green-200 hover:bg-green-300",
              children: "Get In Touch"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ jsxs9("footer", { class: "text-center border-t-2 border-black border-dashed pt-8", children: [
        /* @__PURE__ */ jsxs9("div", { class: "flex justify-center space-x-8 mb-4", children: [
          /* @__PURE__ */ jsx9("a", { href: "/", class: "font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform", children: "Home" }),
          /* @__PURE__ */ jsx9("a", { href: "#", class: "font-handwritten text-lg hover:underline transform hover:-rotate-1 transition-transform", children: "Contact" }),
          /* @__PURE__ */ jsx9("a", { href: "#", class: "font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform", children: "Privacy" }),
          /* @__PURE__ */ jsx9("a", { href: "#", class: "font-handwritten text-lg hover:underline transform hover:-rotate-1 transition-transform", children: "Terms" })
        ] }),
        /* @__PURE__ */ jsx9("p", { class: "font-handwritten text-sm transform rotate-1", children: "\xA9 2024 MentorMatch - Where conversations change lives" })
      ] })
    ] })
  ] });
}

// src/pages/role-select.tsx
import { jsx as jsx10, jsxs as jsxs10 } from "hono/jsx/jsx-runtime";
function RoleSelectPage() {
  return /* @__PURE__ */ jsxs10("div", { class: "min-h-screen bg-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsxs10("div", { class: "absolute inset-0 pointer-events-none", children: [
      /* @__PURE__ */ jsx10("svg", { class: "absolute top-16 left-16 w-24 h-24 opacity-10", viewBox: "0 0 100 100", children: /* @__PURE__ */ jsx10("path", { d: "M20,20 Q40,10 60,30 Q80,50 60,70 Q40,90 20,70 Q10,50 20,20", stroke: "black", "stroke-width": "2", fill: "none" }) }),
      /* @__PURE__ */ jsx10("svg", { class: "absolute top-32 right-32 w-32 h-20 opacity-10", viewBox: "0 0 100 50", children: /* @__PURE__ */ jsx10("path", { d: "M10,25 Q30,5 50,25 Q70,45 90,25", stroke: "black", "stroke-width": "2", fill: "none", class: "animate-wiggle" }) }),
      /* @__PURE__ */ jsxs10("svg", { class: "absolute bottom-32 left-1/3 w-28 h-28 opacity-10", viewBox: "0 0 100 100", children: [
        /* @__PURE__ */ jsx10("circle", { cx: "50", cy: "50", r: "35", stroke: "black", "stroke-width": "2", fill: "none" }),
        /* @__PURE__ */ jsx10("circle", { cx: "50", cy: "50", r: "20", stroke: "black", "stroke-width": "1", fill: "none" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs10("div", { class: "relative z-10 container mx-auto px-4 py-8 max-w-4xl", children: [
      /* @__PURE__ */ jsxs10("div", { class: "text-center mb-12", children: [
        /* @__PURE__ */ jsx10("div", { class: "scribble-border inline-block p-4 mb-6", children: /* @__PURE__ */ jsx10("h1", { class: "text-4xl md:text-5xl font-bold font-sketch transform rotate-1", children: "Choose Your Role" }) }),
        /* @__PURE__ */ jsx10("p", { class: "text-lg md:text-xl font-handwritten max-w-2xl mx-auto transform -rotate-1", children: "Are you a student seeking career advice and mentorship, or a leader ready to coach? Select your role to start your career development journey." })
      ] }),
      /* @__PURE__ */ jsxs10("div", { class: "grid md:grid-cols-2 gap-8 mb-12", children: [
        /* @__PURE__ */ jsxs10("div", { class: "scribble-card p-8 text-center transform hover:scale-105 transition-all duration-300", children: [
          /* @__PURE__ */ jsx10(
            "img",
            {
              src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80",
              alt: "College students getting career advice and online tutoring together",
              class: "w-full h-44 object-cover rounded mb-4",
              style: "border-radius: 10px 18px 14px 20px"
            }
          ),
          /* @__PURE__ */ jsx10("h2", { class: "text-2xl md:text-3xl font-bold font-sketch mb-4 transform rotate-1", children: "I'm a Student" }),
          /* @__PURE__ */ jsx10("p", { class: "font-handwritten text-lg mb-6 leading-relaxed", children: "Find a mentor among industry leaders, successful entrepreneurs, and career coaches. Get career advice, professional guidance, and one-on-one tutoring to build a successful career." }),
          /* @__PURE__ */ jsxs10("div", { class: "mb-6", children: [
            /* @__PURE__ */ jsx10("h3", { class: "font-bold font-sketch mb-2", children: "Perfect for:" }),
            /* @__PURE__ */ jsxs10("ul", { class: "font-handwritten text-sm text-left space-y-1", children: [
              /* @__PURE__ */ jsx10("li", { children: "\u2022 College students seeking career guidance" }),
              /* @__PURE__ */ jsx10("li", { children: "\u2022 Recent graduates planning career paths" }),
              /* @__PURE__ */ jsx10("li", { children: "\u2022 Professionals looking for career change advice" }),
              /* @__PURE__ */ jsx10("li", { children: "\u2022 Aspiring entrepreneurs needing mentorship" })
            ] })
          ] }),
          /* @__PURE__ */ jsx10(
            "button",
            {
              onclick: "selectRole('student')",
              class: "scribble-button text-xl font-bold font-sketch px-8 py-4 w-full bg-blue-600 text-white hover:bg-blue-700 transform hover:rotate-1 transition-all duration-300",
              children: "Join as Student"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs10("div", { class: "scribble-card p-8 text-center transform hover:scale-105 transition-all duration-300", children: [
          /* @__PURE__ */ jsx10(
            "img",
            {
              src: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
              alt: "Executive coach and business leader ready for career mentoring and leadership coaching",
              class: "w-full h-44 object-cover rounded mb-4",
              style: "border-radius: 10px 18px 14px 20px"
            }
          ),
          /* @__PURE__ */ jsx10("h2", { class: "text-2xl md:text-3xl font-bold font-sketch mb-4 transform -rotate-1", children: "I'm a Leader" }),
          /* @__PURE__ */ jsx10("p", { class: "font-handwritten text-lg mb-6 leading-relaxed", children: "Provide career coaching and professional mentorship to the next generation. Share career advice and make a lasting impact through executive mentoring sessions." }),
          /* @__PURE__ */ jsxs10("div", { class: "mb-6", children: [
            /* @__PURE__ */ jsx10("h3", { class: "font-bold font-sketch mb-2", children: "Perfect for:" }),
            /* @__PURE__ */ jsxs10("ul", { class: "font-handwritten text-sm text-left space-y-1", children: [
              /* @__PURE__ */ jsx10("li", { children: "\u2022 CEOs & executive coaches" }),
              /* @__PURE__ */ jsx10("li", { children: "\u2022 Successful career professionals" }),
              /* @__PURE__ */ jsx10("li", { children: "\u2022 Industry leaders & mentors" }),
              /* @__PURE__ */ jsx10("li", { children: "\u2022 Leadership coaching experts" })
            ] })
          ] }),
          /* @__PURE__ */ jsx10(
            "button",
            {
              onclick: "selectRole('ceo')",
              class: "scribble-button text-xl font-bold font-sketch px-8 py-4 w-full bg-green-600 text-white hover:bg-green-700 transform hover:-rotate-1 transition-all duration-300",
              children: "Join as Leader"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsx10("div", { class: "text-center", children: /* @__PURE__ */ jsxs10("div", { class: "scribble-border inline-block p-6 bg-gray-50", children: [
        /* @__PURE__ */ jsx10("p", { class: "font-handwritten text-lg mb-4", children: "New to MentorMatch?" }),
        /* @__PURE__ */ jsx10(
          "a",
          {
            href: "/register",
            class: "scribble-button text-lg font-bold font-sketch px-6 py-3 bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 mr-4",
            children: "Create Account"
          }
        ),
        /* @__PURE__ */ jsx10(
          "a",
          {
            href: "/login",
            class: "font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform",
            children: "Already have an account? Login"
          }
        )
      ] }) }),
      /* @__PURE__ */ jsx10("div", { class: "text-center mt-8", children: /* @__PURE__ */ jsx10(
        "a",
        {
          href: "/",
          class: "font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform",
          children: "\u2190 Back to Home"
        }
      ) })
    ] })
  ] });
}

// src/lib/auth.ts
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { z } from "zod";
var RegisterSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  role: z.enum(["student", "ceo"], {
    errorMap: () => ({ message: "Role must be either student or ceo" })
  }),
  // Role-specific fields
  company: z.string().optional(),
  position: z.string().optional(),
  university: z.string().optional(),
  major: z.string().optional(),
  graduationYear: z.number().optional(),
  industry: z.string().optional(),
  experienceYears: z.number().optional()
});
var LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(1, "Password is required")
});
var UpdateProfileSchema = z.object({
  name: z.string().min(2).optional(),
  bio: z.string().optional(),
  company: z.string().optional(),
  position: z.string().optional(),
  industry: z.string().optional(),
  experienceYears: z.number().optional(),
  university: z.string().optional(),
  major: z.string().optional(),
  graduationYear: z.number().optional(),
  linkedinUrl: z.string().url().optional().or(z.literal("")),
  websiteUrl: z.string().url().optional().or(z.literal("")),
  companySize: z.enum(["startup", "small", "medium", "large", "enterprise"]).optional(),
  timezone: z.string().optional(),
  languages: z.array(z.string()).optional()
});
async function hashPassword(password) {
  const saltRounds = 12;
  return await bcrypt.hash(password, saltRounds);
}
function generateToken(payload, secret, expiresIn = "7d") {
  return jwt.sign(payload, secret, { expiresIn });
}
function verifyToken(token, secret) {
  try {
    return jwt.verify(token, secret);
  } catch (error) {
    return null;
  }
}
function generateId() {
  return crypto.randomUUID().replace(/-/g, "");
}
function extractBearerToken(authHeader) {
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return null;
  }
  return authHeader.substring(7);
}
var UserService = class {
  constructor(db) {
    this.db = db;
  }
  async createUser(userData) {
    const userId = generateId();
    const passwordHash = await hashPassword(userData.password);
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
    ).first();
    if (!user) {
      throw new Error("Failed to create user");
    }
    const { password_hash, ...userWithoutPassword } = user;
    return this.formatUser(userWithoutPassword);
  }
  async findUserByEmail(email) {
    const user = await this.db.prepare(`
      SELECT * FROM users WHERE email = ? AND is_active = 1
    `).bind(email.toLowerCase()).first();
    if (!user) return null;
    const { password_hash, ...userWithoutPassword } = user;
    return {
      ...this.formatUser(userWithoutPassword),
      passwordHash: password_hash
    };
  }
  async findUserById(id) {
    const user = await this.db.prepare(`
      SELECT * FROM users WHERE id = ? AND is_active = 1
    `).bind(id).first();
    if (!user) return null;
    const { password_hash, ...userWithoutPassword } = user;
    return this.formatUser(userWithoutPassword);
  }
  async updateUser(id, updates) {
    const updateFields = [];
    const values = [];
    for (const [key, value] of Object.entries(updates)) {
      if (value !== void 0) {
        const dbKey = this.camelToSnake(key);
        updateFields.push(`${dbKey} = ?`);
        values.push(value);
      }
    }
    if (updateFields.length === 0) {
      return this.findUserById(id);
    }
    updateFields.push("updated_at = CURRENT_TIMESTAMP");
    values.push(id);
    await this.db.prepare(`
      UPDATE users SET ${updateFields.join(", ")} WHERE id = ?
    `).bind(...values).run();
    return this.findUserById(id);
  }
  async updateUserStatus(id, isOnline) {
    await this.db.prepare(`
      UPDATE users SET is_online = ?, last_seen = CURRENT_TIMESTAMP WHERE id = ?
    `).bind(isOnline, id).run();
  }
  async searchUsers(role, filters) {
    let query = 'SELECT * FROM users WHERE role = ? AND is_active = 1 AND verification_status = "verified"';
    const params = [role];
    if (filters?.industry) {
      query += " AND industry = ?";
      params.push(filters.industry);
    }
    if (filters?.experienceYears !== void 0) {
      query += " AND experience_years >= ?";
      params.push(filters.experienceYears);
    }
    if (filters?.isOnline) {
      query += " AND is_online = 1";
    }
    query += " ORDER BY last_seen DESC LIMIT 50";
    const users = await this.db.prepare(query).bind(...params).all();
    return users.results.map((user) => {
      const { password_hash, ...userWithoutPassword } = user;
      return this.formatUser(userWithoutPassword);
    });
  }
  formatUser(user) {
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
    };
  }
  camelToSnake(str) {
    return str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  }
};
var SessionService = class {
  constructor(db, jwtSecret) {
    this.db = db;
    this.jwtSecret = jwtSecret;
  }
  async createSession(userId, ipAddress, userAgent) {
    const sessionId = generateId();
    const secret = this.jwtSecret || "convoconnect-fallback-secret";
    const token = generateToken({ sessionId, userId }, secret);
    const tokenHash = await hashPassword(token);
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1e3);
    await this.db.prepare(`
      INSERT INTO user_sessions (id, user_id, token_hash, expires_at, ip_address, user_agent)
      VALUES (?, ?, ?, ?, ?, ?)
    `).bind(sessionId, userId, tokenHash, expiresAt.toISOString(), ipAddress, userAgent).run();
    return token;
  }
  async validateSession(token) {
    const secret = this.jwtSecret || "convoconnect-fallback-secret";
    const payload = verifyToken(token, secret);
    if (!payload || !payload.sessionId) {
      return null;
    }
    const session = await this.db.prepare(`
      SELECT * FROM user_sessions WHERE id = ? AND expires_at > CURRENT_TIMESTAMP
    `).bind(payload.sessionId).first();
    if (!session) {
      return null;
    }
    await this.db.prepare(`
      UPDATE user_sessions SET last_used_at = CURRENT_TIMESTAMP WHERE id = ?
    `).bind(payload.sessionId).run();
    const userService = new UserService(this.db);
    return userService.findUserById(session.user_id);
  }
  async deleteSession(sessionId) {
    await this.db.prepare(`
      DELETE FROM user_sessions WHERE id = ?
    `).bind(sessionId).run();
  }
  async deleteAllUserSessions(userId) {
    await this.db.prepare(`
      DELETE FROM user_sessions WHERE user_id = ?
    `).bind(userId).run();
  }
  async cleanupExpiredSessions() {
    await this.db.prepare(`
      DELETE FROM user_sessions WHERE expires_at < CURRENT_TIMESTAMP
    `).run();
  }
};

// src/lib/signaling.ts
var MatchingQueue = class {
  studentQueue = [];
  ceoQueue = [];
  async join(userId, userName, role, preferences) {
    const entry = {
      userId,
      userName,
      preferences: preferences || {},
      joinedAt: Date.now()
    };
    if (role === "student") {
      if (this.ceoQueue.length > 0) {
        const ceo = this.ceoQueue.shift();
        return this.createMatch(entry, ceo);
      }
      this.studentQueue.push(entry);
      return {
        status: "queued",
        position: this.studentQueue.length,
        queueType: "student"
      };
    } else {
      if (this.studentQueue.length > 0) {
        const student = this.studentQueue.shift();
        return this.createMatch(student, entry);
      }
      this.ceoQueue.push(entry);
      return {
        status: "queued",
        position: this.ceoQueue.length,
        queueType: "ceo"
      };
    }
  }
  async leave(userId) {
    this.studentQueue = this.studentQueue.filter((u) => u.userId !== userId);
    this.ceoQueue = this.ceoQueue.filter((u) => u.userId !== userId);
    return { status: "left" };
  }
  getStatus() {
    return {
      studentsInQueue: this.studentQueue.length,
      ceosInQueue: this.ceoQueue.length
    };
  }
  createMatch(student, ceo) {
    const roomId = crypto.randomUUID();
    return {
      status: "matched",
      match: {
        roomId,
        matchType: "student-ceo",
        student: { userId: student.userId, userName: student.userName },
        ceo: { userId: ceo.userId, userName: ceo.userName },
        createdAt: (/* @__PURE__ */ new Date()).toISOString()
      }
    };
  }
};
var matchingQueue = new MatchingQueue();

// src/index.tsx
import { jsx as jsx11 } from "hono/jsx/jsx-runtime";
var app = new Hono();
app.use("/api/*", cors({
  origin: "*",
  allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowHeaders: ["Content-Type", "Authorization"]
}));
app.use("/ws/*", cors({
  origin: "*",
  allowMethods: ["GET"],
  allowHeaders: ["Upgrade", "Connection", "Sec-WebSocket-Key", "Sec-WebSocket-Version"]
}));
app.use(renderer);
var authMiddleware = async (c, next) => {
  try {
    const token = extractBearerToken(c.req.header("Authorization"));
    if (!token) {
      return c.json({ error: "Authentication required" }, 401);
    }
    if (!c.env.DB) {
      console.error("Database not available in authMiddleware");
      return c.json({ error: "Database connection error" }, 500);
    }
    const sessionService = new SessionService(c.env.DB, c.env.JWT_SECRET);
    const user = await sessionService.validateSession(token);
    if (!user) {
      return c.json({ error: "Invalid or expired session" }, 401);
    }
    c.set("user", user);
    await next();
  } catch (error) {
    console.error("Authentication error in authMiddleware:", error);
    return c.json({ error: "Authentication failed", details: error.message }, 500);
  }
};
var pageAuthMiddleware = async (c, next) => {
  try {
    const token = getCookie(c, "auth-token") || extractBearerToken(c.req.header("Authorization"));
    if (!token) {
      return c.redirect("/login");
    }
    if (!c.env.DB) {
      console.error("Database not available in pageAuthMiddleware");
      return c.redirect("/login");
    }
    const sessionService = new SessionService(c.env.DB, c.env.JWT_SECRET);
    const user = await sessionService.validateSession(token);
    if (!user) {
      return c.redirect("/login");
    }
    c.set("user", user);
    await next();
  } catch (error) {
    console.error("Authentication error in pageAuthMiddleware:", error);
    return c.redirect("/login");
  }
};
app.get("/", (c) => {
  return c.render(/* @__PURE__ */ jsx11(LandingPage, {}));
});
app.get("/login", (c) => {
  return c.render(/* @__PURE__ */ jsx11(LoginPage, {}));
});
app.get("/register", (c) => {
  return c.render(/* @__PURE__ */ jsx11(RegisterPage, {}));
});
app.get("/about", (c) => {
  return c.render(/* @__PURE__ */ jsx11(AboutPage, {}));
});
app.get("/role-select", (c) => {
  return c.render(/* @__PURE__ */ jsx11(RoleSelectPage, {}));
});
app.get("/dashboard", pageAuthMiddleware, (c) => {
  const user = c.get("user");
  return c.render(/* @__PURE__ */ jsx11(DashboardPage, { user }));
});
app.get("/profile", pageAuthMiddleware, (c) => {
  const user = c.get("user");
  return c.render(/* @__PURE__ */ jsx11(ProfilePage, { user }));
});
app.get("/video-call/:roomId", pageAuthMiddleware, (c) => {
  const user = c.get("user");
  const roomId = c.req.param("roomId");
  return c.render(/* @__PURE__ */ jsx11(VideoCallPage, { user, roomId }));
});
app.get("/donation", pageAuthMiddleware, (c) => {
  const user = c.get("user");
  return c.render(/* @__PURE__ */ jsx11(DonationPage, {}));
});
app.post("/api/auth/register", async (c) => {
  try {
    const body = await c.req.json();
    const userData = RegisterSchema.parse(body);
    const userService = new UserService(c.env.DB);
    const existingUser = await userService.findUserByEmail(userData.email);
    if (existingUser) {
      return c.json({ error: "Email already registered" }, 400);
    }
    const user = await userService.createUser(userData);
    const sessionService = new SessionService(c.env.DB, c.env.JWT_SECRET);
    const token = await sessionService.createSession(
      user.id,
      c.req.header("x-forwarded-for"),
      c.req.header("User-Agent")
    );
    return c.json({
      success: true,
      user,
      token
    });
  } catch (error) {
    console.error("Registration error:", error);
    if (error.issues) {
      return c.json({
        error: "Validation failed",
        issues: error.issues
      }, 400);
    }
    return c.json({
      error: "Registration failed",
      message: error.message
    }, 500);
  }
});
app.post("/api/auth/login", async (c) => {
  try {
    const body = await c.req.json();
    const loginData = LoginSchema.parse(body);
    const userService = new UserService(c.env.DB);
    const userWithPassword = await userService.findUserByEmail(loginData.email);
    if (!userWithPassword) {
      return c.json({ error: "Invalid email or password" }, 401);
    }
    const bcrypt2 = await import("bcryptjs");
    const isValidPassword = await bcrypt2.compare(loginData.password, userWithPassword.passwordHash);
    if (!isValidPassword) {
      return c.json({ error: "Invalid email or password" }, 401);
    }
    await userService.updateUserStatus(userWithPassword.id, true);
    const sessionService = new SessionService(c.env.DB, c.env.JWT_SECRET);
    const token = await sessionService.createSession(
      userWithPassword.id,
      c.req.header("x-forwarded-for"),
      c.req.header("User-Agent")
    );
    const { passwordHash, ...user } = userWithPassword;
    return c.json({
      success: true,
      user,
      token
    });
  } catch (error) {
    console.error("Login error:", error);
    if (error.issues) {
      return c.json({
        error: "Validation failed",
        issues: error.issues
      }, 400);
    }
    return c.json({
      error: "Login failed",
      message: error.message
    }, 500);
  }
});
app.post("/api/auth/logout", authMiddleware, async (c) => {
  const user = c.get("user");
  const userService = new UserService(c.env.DB);
  await userService.updateUserStatus(user.id, false);
  return c.json({ success: true });
});
app.get("/api/auth/me", authMiddleware, async (c) => {
  const user = c.get("user");
  return c.json({ user });
});
app.get("/api/auth/debug", (c) => {
  const cookieHeader = c.req.header("Cookie");
  const authHeader = c.req.header("Authorization");
  const cookieToken = getCookie(c, "auth-token");
  return c.json({
    cookieHeader,
    authHeader,
    cookieToken,
    hasDB: !!c.env.DB,
    hasJWTSecret: !!c.env.JWT_SECRET
  });
});
app.put("/api/profile", authMiddleware, async (c) => {
  try {
    const user = c.get("user");
    const body = await c.req.json();
    const updates = UpdateProfileSchema.parse(body);
    const userService = new UserService(c.env.DB);
    const updatedUser = await userService.updateUser(user.id, updates);
    if (!updatedUser) {
      return c.json({ error: "User not found" }, 404);
    }
    return c.json({ success: true, user: updatedUser });
  } catch (error) {
    console.error("Profile update error:", error);
    if (error.issues) {
      return c.json({
        error: "Validation failed",
        issues: error.issues
      }, 400);
    }
    return c.json({
      error: "Profile update failed",
      message: error.message
    }, 500);
  }
});
app.post("/api/matching/join", authMiddleware, async (c) => {
  try {
    const user = c.get("user");
    const { preferences } = await c.req.json();
    const result = await matchingQueue.join(
      user.id,
      user.name,
      user.role,
      preferences || {}
    );
    return c.json(result);
  } catch (error) {
    console.error("Matching error:", error);
    return c.json({
      error: "Failed to join queue",
      message: error.message
    }, 500);
  }
});
app.post("/api/matching/leave", authMiddleware, async (c) => {
  try {
    const user = c.get("user");
    const result = await matchingQueue.leave(user.id);
    return c.json(result);
  } catch (error) {
    console.error("Leave queue error:", error);
    return c.json({
      error: "Failed to leave queue",
      message: error.message
    }, 500);
  }
});
app.get("/api/matching/status", async (c) => {
  try {
    return c.json(matchingQueue.getStatus());
  } catch (error) {
    console.error("Queue status error:", error);
    return c.json({
      error: "Failed to get queue status",
      message: error.message
    }, 500);
  }
});
app.get("/ws/signaling/:roomId", (c) => {
  return c.json({ error: "WebSocket connections are not supported in serverless mode" }, 501);
});
app.get("/ws/matching", (c) => {
  return c.json({ error: "WebSocket connections are not supported in serverless mode" }, 501);
});
app.post("/api/conversations/start", authMiddleware, async (c) => {
  try {
    const user = c.get("user");
    const { partnerId, roomId } = await c.req.json();
    const conversationId = crypto.randomUUID();
    const studentId = user.role === "student" ? user.id : partnerId;
    const ceoId = user.role === "ceo" ? user.id : partnerId;
    await c.env.DB.prepare(`
      INSERT INTO conversations (id, student_id, ceo_id, room_id, status)
      VALUES (?, ?, ?, ?, 'active')
    `).bind(conversationId, studentId, ceoId, roomId).run();
    return c.json({
      success: true,
      conversationId,
      roomId
    });
  } catch (error) {
    console.error("Start conversation error:", error);
    return c.json({
      error: "Failed to start conversation",
      message: error.message
    }, 500);
  }
});
app.post("/api/conversations/:id/end", authMiddleware, async (c) => {
  try {
    const conversationId = c.req.param("id");
    const user = c.get("user");
    const { duration, rating, feedback } = await c.req.json();
    const updateField = user.role === "student" ? "rating_student" : "rating_ceo";
    const feedbackField = user.role === "student" ? "feedback_student" : "feedback_ceo";
    await c.env.DB.prepare(`
      UPDATE conversations 
      SET ended_at = CURRENT_TIMESTAMP, 
          duration_seconds = ?, 
          ${updateField} = ?, 
          ${feedbackField} = ?,
          status = 'ended'
      WHERE id = ? AND (student_id = ? OR ceo_id = ?)
    `).bind(duration, rating, feedback, conversationId, user.id, user.id).run();
    return c.json({ success: true });
  } catch (error) {
    console.error("End conversation error:", error);
    return c.json({
      error: "Failed to end conversation",
      message: error.message
    }, 500);
  }
});
app.get("/api/conversations", authMiddleware, async (c) => {
  try {
    const user = c.get("user");
    const limit = parseInt(c.req.query("limit") || "20");
    const offset = parseInt(c.req.query("offset") || "0");
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
    `).bind(user.id, user.id, limit, offset).all();
    return c.json({ conversations: conversations.results });
  } catch (error) {
    console.error("Get conversations error:", error);
    return c.json({
      error: "Failed to get conversations",
      message: error.message
    }, 500);
  }
});
app.post("/api/donate", authMiddleware, async (c) => {
  try {
    const user = c.get("user");
    const { amount } = await c.req.json();
    return c.json({
      success: true,
      message: `Thank you ${user.name} for your $${amount} donation!`,
      transactionId: `mock-${Date.now()}`,
      user: user.name
    });
  } catch (error) {
    console.error("Donation error:", error);
    return c.json({
      error: "Donation failed",
      message: error.message
    }, 500);
  }
});
app.use(async (c, next) => {
  if (c.env.DB) {
    try {
      await c.env.DB.exec(`
        CREATE TABLE IF NOT EXISTS _migrations (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT UNIQUE,
          executed_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
      const migrationExists = await c.env.DB.prepare(`
        SELECT 1 FROM _migrations WHERE name = ?
      `).bind("0001_initial_schema").first();
      if (!migrationExists) {
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
        `;
        await c.env.DB.exec(migrationSQL);
        await c.env.DB.prepare(`
          INSERT INTO _migrations (name) VALUES (?)
        `).bind("0001_initial_schema").run();
        console.log("Database initialized successfully");
      }
    } catch (error) {
      console.error("Database initialization error:", error);
    }
  }
  await next();
});
var index_default = app;

// src/server-entry.ts
var config = {
  api: {
    bodyParser: false
  }
};
var server_entry_default = handle(index_default);
export {
  config,
  server_entry_default as default
};
