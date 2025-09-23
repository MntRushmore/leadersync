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
            Connecting students with leaders through real conversations
          </p>
        </header>

        {/* Main CTA Section */}
        <div class="text-center mb-16">
          <div class="scribble-border-large inline-block p-8 mb-8 bg-gray-50">
            <h2 class="text-3xl md:text-4xl font-bold font-sketch mb-6 transform rotate-1">
              Ready to have a life-changing conversation?
            </h2>
            <p class="text-lg font-handwritten mb-8 max-w-xl mx-auto">
              Whether you're a student seeking guidance or a leader wanting to inspire, 
              your next meaningful conversation is just one click away.
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
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-bold font-sketch mb-3">Perfect Matches</h3>
            <p class="font-handwritten">Smart pairing of students with industry leaders and inspirational figures.</p>
          </div>
          
          <div class="scribble-card p-6 text-center transform hover:-rotate-1 transition-transform duration-300">
            <div class="text-4xl mb-4">📹</div>
            <h3 class="text-xl font-bold font-sketch mb-3">Face-to-Face</h3>
            <p class="font-handwritten">Real video conversations that build genuine connections and trust.</p>
          </div>
          
          <div class="scribble-card p-6 text-center transform hover:rotate-1 transition-transform duration-300">
            <div class="text-4xl mb-4">💡</div>
            <h3 class="text-xl font-bold font-sketch mb-3">Real Impact</h3>
            <p class="font-handwritten">Meaningful exchanges that inspire growth and open new possibilities.</p>
          </div>
        </div>

        {/* Mission Statement */}
        <div class="text-center mb-16">
          <div class="scribble-border inline-block p-6 max-w-3xl">
            <h2 class="text-2xl font-bold font-sketch mb-4 transform -rotate-1">Our Mission</h2>
            <p class="text-lg font-handwritten leading-relaxed">
              We believe that every student deserves access to mentorship and inspiration from successful leaders. 
              ConvoConnect breaks down barriers and creates opportunities for meaningful conversations that can 
              change lives and shape futures.
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