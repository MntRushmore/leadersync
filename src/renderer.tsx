import { jsxRenderer } from 'hono/jsx-renderer'

export const renderer = jsxRenderer(({ children }) => {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MentorMatch - Career Advice & Mentorship for Students | Find a Mentor</title>
        <meta name="description" content="Get free career advice and professional mentorship from CEOs and industry leaders. MentorMatch connects college students with mentors for one-on-one video tutoring, career guidance, and professional development." />
        <meta name="keywords" content="career advice, find a mentor, career guidance, student mentorship, professional development, career coaching, online tutoring, career success, talk to a CEO, mentorship program, career growth, career planning, leadership coaching, career advice for college students, building a successful career, one on one mentoring, virtual mentoring, career counseling, professional mentoring, executive coaching" />
        
        {/* Google Fonts for handwritten style */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&family=Architects+Daughter&display=swap" rel="stylesheet" />
        
        {/* TailwindCSS */}
        <script src="https://cdn.tailwindcss.com"></script>
        
        {/* Custom Styles */}
        <link href="/static/style.css" rel="stylesheet" />
        
        {/* TailwindCSS Configuration */}
        <script dangerouslySetInnerHTML={{
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
        }} />
      </head>
      <body class="bg-white text-black font-handwritten overflow-x-hidden">
        {children}
        
        {/* Main App JavaScript */}
        <script src="/static/app.js"></script>
      </body>
    </html>
  )
})
