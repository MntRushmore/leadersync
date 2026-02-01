export function LandingPage() {
  return (
    <div class="min-h-screen bg-white relative overflow-hidden">
      {/* Hand-drawn background elements */}
      <div class="absolute inset-0 pointer-events-none">
        <svg class="absolute top-10 left-10 w-32 h-32 opacity-10" viewBox="0 0 100 100">
          <path d="M10,50 Q30,10 50,50 Q70,90 90,50" stroke="black" stroke-width="2" fill="none" class="animate-bounce-slow" />
        </svg>
        <svg class="absolute top-32 right-20 w-24 h-24 opacity-10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="2" fill="none" class="animate-wiggle" />
        </svg>
        <svg class="absolute bottom-20 left-1/4 w-40 h-20 opacity-10" viewBox="0 0 100 50">
          <path d="M5,25 Q25,5 45,25 Q65,45 85,25" stroke="black" stroke-width="2" fill="none" />
        </svg>
      </div>

      {/* Main Content */}
      <div class="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <header class="text-center mb-16">
          <div class="scribble-border inline-block p-6 mb-8">
            <h1 class="text-5xl md:text-7xl font-bold font-sketch transform rotate-1 hover:rotate-0 transition-transform duration-300">
              ConvoConnect
            </h1>
          </div>
          <p class="text-xl md:text-2xl font-handwritten max-w-2xl mx-auto transform -rotate-1 hover:rotate-0 transition-transform duration-300">
            Free career advice and mentorship from CEOs and industry leaders
          </p>
        </header>

        {/* Hero Image Section */}
        <div class="mb-12 max-w-4xl mx-auto">
          <div class="scribble-border-large overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=80"
              alt="Students getting career advice and tutoring from a professional mentor"
              class="w-full h-64 md:h-80 object-cover"
            />
          </div>
          <p class="text-center font-handwritten text-sm text-gray-500 mt-2 transform -rotate-1">
            One-on-one career coaching and mentorship that drives real career success.
          </p>
        </div>

        {/* Main CTA Section */}
        <div class="text-center mb-16">
          <div class="scribble-border-large inline-block p-8 mb-8 bg-gray-50">
            <h2 class="text-3xl md:text-4xl font-bold font-sketch mb-6 transform rotate-1">
              Get career guidance from real industry leaders
            </h2>
            <p class="text-lg font-handwritten mb-8 max-w-xl mx-auto">
              Whether you're a college student seeking career advice or a leader ready to mentor,
              start building a successful career through one-on-one professional mentorship.
            </p>

            {/* Big CTA Button */}
            <button
              onclick="window.location.href='/role-select'"
              class="scribble-button text-2xl md:text-3xl font-bold font-sketch px-12 py-6 transform hover:scale-105 hover:rotate-1 transition-all duration-300 bg-black text-white hover:bg-gray-800"
            >
              Start a Conversation
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div class="scribble-card p-6 text-center transform hover:rotate-1 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80"
              alt="One-on-one career coaching session between a mentor and student"
              class="w-full h-40 object-cover rounded mb-4"
              style="border-radius: 10px 18px 14px 20px"
            />
            <h3 class="text-xl font-bold font-sketch mb-3">Find a Mentor</h3>
            <p class="font-handwritten">Smart mentor matching pairs college students with CEOs and industry leaders for career guidance.</p>
          </div>

          <div class="scribble-card p-6 text-center transform hover:-rotate-1 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=400&q=80"
              alt="Student in an online video tutoring and career coaching session"
              class="w-full h-40 object-cover rounded mb-4"
              style="border-radius: 10px 18px 14px 20px"
            />
            <h3 class="text-xl font-bold font-sketch mb-3">Video Mentoring</h3>
            <p class="font-handwritten">Live one-on-one video tutoring sessions for career advice and professional development.</p>
          </div>

          <div class="scribble-card p-6 text-center transform hover:rotate-1 transition-transform duration-300">
            <img
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&q=80"
              alt="Students achieving career success through professional mentorship and tutoring"
              class="w-full h-40 object-cover rounded mb-4"
              style="border-radius: 10px 18px 14px 20px"
            />
            <h3 class="text-xl font-bold font-sketch mb-3">Career Growth</h3>
            <p class="font-handwritten">Build a successful career with mentorship that drives long-term career growth and professional success.</p>
          </div>
        </div>

        {/* Mission Statement */}
        <div class="text-center mb-16">
          <div class="scribble-border inline-block p-6 max-w-3xl">
            <h2 class="text-2xl font-bold font-sketch mb-4 transform -rotate-1">Our Mission: Career Mentorship for All</h2>
            <img
              src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=700&q=80"
              alt="Diverse group of college students in a career development tutoring session"
              class="w-full h-48 object-cover rounded mb-4"
              style="border-radius: 12px 20px 16px 24px"
            />
            <p class="text-lg font-handwritten leading-relaxed">
              We believe every student deserves access to career counseling and professional mentoring from successful leaders.
              ConvoConnect makes career guidance accessible by connecting students with executive coaches and industry mentors
              who help with career planning, professional development, and building a successful career path.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer class="text-center border-t-2 border-black border-dashed pt-8">
          <div class="flex justify-center space-x-8 mb-4">
            <a href="/about" class="font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform">
              About Us
            </a>
            <a href="#" class="font-handwritten text-lg hover:underline transform hover:-rotate-1 transition-transform">
              Contact
            </a>
            <a href="#" class="font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform">
              Privacy
            </a>
          </div>
          <p class="font-handwritten text-sm transform -rotate-1">
            © 2024 ConvoConnect - Building bridges through conversation
          </p>
        </footer>
      </div>
    </div>
  )
}