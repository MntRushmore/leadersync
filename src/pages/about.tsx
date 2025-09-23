export function AboutPage() {
  return (
    <div class="min-h-screen bg-white relative overflow-hidden">
      {/* Hand-drawn background elements */}
      <div class="absolute inset-0 pointer-events-none">
        <svg class="absolute top-16 left-16 w-48 h-48 opacity-5" viewBox="0 0 100 100">
          <path d="M10,10 Q50,50 90,10 Q50,50 10,90 Q50,50 90,90 Q50,50 10,10" stroke="black" stroke-width="1" fill="none" class="animate-pulse" />
        </svg>
        <svg class="absolute top-32 right-16 w-32 h-32 opacity-5" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="40" stroke="black" stroke-width="1" fill="none" stroke-dasharray="5 5" class="animate-spin" />
        </svg>
        <svg class="absolute bottom-16 left-1/4 w-40 h-40 opacity-5" viewBox="0 0 100 100">
          <path d="M20,20 L80,80 M80,20 L20,80 M50,10 L50,90 M10,50 L90,50" stroke="black" stroke-width="1" />
        </svg>
      </div>

      <div class="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div class="text-center mb-16">
          <a href="/" class="inline-block scribble-border p-3 mb-8 hover:rotate-1 transition-transform">
            <h1 class="text-3xl font-bold font-sketch">ConvoConnect</h1>
          </a>
          <div class="scribble-border-large inline-block p-6">
            <h2 class="text-4xl md:text-6xl font-bold font-sketch mb-4 transform -rotate-1">
              Our Story 📖
            </h2>
            <p class="text-xl font-handwritten max-w-3xl mx-auto">
              Building bridges between ambition and experience, one conversation at a time
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div class="mb-16">
          <div class="scribble-border-large p-8 max-w-4xl mx-auto bg-gray-50">
            <h3 class="text-3xl font-bold font-sketch mb-6 text-center transform rotate-1">
              🎯 Our Mission
            </h3>
            <p class="text-lg font-handwritten leading-relaxed mb-6">
              At ConvoConnect, we believe that every student deserves access to the wisdom, 
              guidance, and inspiration that comes from successful leaders and entrepreneurs. 
              Too often, these valuable connections are limited by geography, network size, 
              or social barriers.
            </p>
            <p class="text-lg font-handwritten leading-relaxed">
              We're breaking down those walls by creating a platform where meaningful 
              conversations can happen instantly, randomly, and authentically - just like 
              the chance encounters that often change lives forever.
            </p>
          </div>
        </div>

        {/* How It Started */}
        <div class="mb-16">
          <div class="scribble-border p-6 max-w-3xl mx-auto transform rotate-1">
            <h3 class="text-2xl font-bold font-sketch mb-4 text-center">
              💡 How It All Started
            </h3>
            <p class="font-handwritten text-lg leading-relaxed">
              The idea came from a simple observation: the most impactful conversations often 
              happen by chance. A student sitting next to a CEO on a plane. A chance meeting 
              at a coffee shop. A random encounter at a conference. These serendipitous moments 
              can change entire career trajectories - but they're too rare and too dependent on luck.
            </p>
          </div>
        </div>

        {/* Values */}
        <div class="mb-16">
          <h3 class="text-3xl font-bold font-sketch text-center mb-8 transform -rotate-1">
            🌟 What We Stand For
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="scribble-card p-6 text-center transform hover:rotate-2 transition-transform">
              <div class="text-4xl mb-4">🤝</div>
              <h4 class="font-bold font-sketch text-lg mb-3">Authentic Connection</h4>
              <p class="font-handwritten text-sm">Real conversations with real people, no scripts or agendas.</p>
            </div>
            
            <div class="scribble-card p-6 text-center transform hover:-rotate-2 transition-transform">
              <div class="text-4xl mb-4">🎲</div>
              <h4 class="font-bold font-sketch text-lg mb-3">Serendipity</h4>
              <p class="font-handwritten text-sm">Embracing the magic of unexpected encounters and random wisdom.</p>
            </div>
            
            <div class="scribble-card p-6 text-center transform hover:rotate-2 transition-transform">
              <div class="text-4xl mb-4">🚀</div>
              <h4 class="font-bold font-sketch text-lg mb-3">Growth Mindset</h4>
              <p class="font-handwritten text-sm">Every conversation is an opportunity to learn and grow.</p>
            </div>
            
            <div class="scribble-card p-6 text-center transform hover:-rotate-2 transition-transform">
              <div class="text-4xl mb-4">🌍</div>
              <h4 class="font-bold font-sketch text-lg mb-3">Accessibility</h4>
              <p class="font-handwritten text-sm">Breaking down barriers to mentorship and inspiration.</p>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div class="mb-16">
          <div class="scribble-border-large p-8 max-w-4xl mx-auto text-center">
            <h3 class="text-3xl font-bold font-sketch mb-8 transform rotate-1">
              📊 Our Impact (So Far!)
            </h3>
            <div class="grid md:grid-cols-3 gap-8">
              <div class="transform hover:scale-105 transition-transform">
                <div class="text-4xl font-bold font-sketch text-blue-600 mb-2">2,847</div>
                <p class="font-handwritten">Conversations facilitated</p>
              </div>
              <div class="transform hover:scale-105 transition-transform">
                <div class="text-4xl font-bold font-sketch text-green-600 mb-2">89%</div>
                <p class="font-handwritten">Report gaining career clarity</p>
              </div>
              <div class="transform hover:scale-105 transition-transform">
                <div class="text-4xl font-bold font-sketch text-purple-600 mb-2">156</div>
                <p class="font-handwritten">Job offers attributed to connections</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div class="mb-16">
          <h3 class="text-3xl font-bold font-sketch text-center mb-8 transform -rotate-1">
            👥 The Dream Team
          </h3>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div class="scribble-card p-6 text-center transform hover:rotate-1 transition-transform">
              <div class="text-5xl mb-4">👩‍💻</div>
              <h4 class="font-bold font-sketch text-lg mb-2">Sarah Chen</h4>
              <p class="font-handwritten text-sm text-gray-600 mb-3">Founder & CEO</p>
              <p class="font-handwritten text-xs">"Former student who got her break through a random coffee chat"</p>
            </div>
            
            <div class="scribble-card p-6 text-center transform hover:-rotate-1 transition-transform">
              <div class="text-5xl mb-4">👨‍🔬</div>
              <h4 class="font-bold font-sketch text-lg mb-2">Marcus Rodriguez</h4>
              <p class="font-handwritten text-sm text-gray-600 mb-3">Head of Technology</p>
              <p class="font-handwritten text-xs">"Making sure the tech never gets in the way of human connection"</p>
            </div>
            
            <div class="scribble-card p-6 text-center transform hover:rotate-1 transition-transform">
              <div class="text-5xl mb-4">👩‍🎨</div>
              <h4 class="font-bold font-sketch text-lg mb-2">Zoe Williams</h4>
              <p class="font-handwritten text-sm text-gray-600 mb-3">Community Manager</p>
              <p class="font-handwritten text-xs">"Creating magic moments and keeping the community safe"</p>
            </div>
          </div>
        </div>

        {/* Future Vision */}
        <div class="mb-16">
          <div class="scribble-border-large p-8 max-w-4xl mx-auto bg-yellow-50">
            <h3 class="text-3xl font-bold font-sketch mb-6 text-center transform -rotate-1">
              🔮 What's Next?
            </h3>
            <div class="space-y-4 font-handwritten text-lg">
              <p>• <strong>Global Expansion:</strong> Connecting students and leaders across all continents</p>
              <p>• <strong>Industry Matching:</strong> Specialized conversations by field and interest</p>
              <p>• <strong>Follow-up Tools:</strong> Help maintain valuable connections beyond the first chat</p>
              <p>• <strong>Impact Tracking:</strong> See the real career outcomes from these conversations</p>
              <p>• <strong>Mobile App:</strong> Take meaningful conversations anywhere</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div class="text-center mb-16">
          <div class="scribble-border-large inline-block p-8">
            <h3 class="text-3xl font-bold font-sketch mb-6 transform rotate-1">
              Join Our Movement! 🚀
            </h3>
            <p class="text-lg font-handwritten mb-8 max-w-2xl">
              Whether you're a student seeking guidance or a leader ready to inspire, 
              you can be part of something that's changing how knowledge and wisdom are shared.
            </p>
            <div class="space-y-4">
              <a href="/role-select" 
                 class="scribble-button inline-block px-8 py-4 font-sketch text-xl hover:rotate-1 transition-transform bg-blue-200 hover:bg-blue-300 mr-4">
                Start Connecting
              </a>
              <a href="mailto:hello@convoconnect.com" 
                 class="scribble-button inline-block px-8 py-4 font-sketch text-xl hover:-rotate-1 transition-transform bg-green-200 hover:bg-green-300">
                Get In Touch
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer class="text-center border-t-2 border-black border-dashed pt-8">
          <div class="flex justify-center space-x-8 mb-4">
            <a href="/" class="font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform">
              Home
            </a>
            <a href="#" class="font-handwritten text-lg hover:underline transform hover:-rotate-1 transition-transform">
              Contact
            </a>
            <a href="#" class="font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform">
              Privacy
            </a>
            <a href="#" class="font-handwritten text-lg hover:underline transform hover:-rotate-1 transition-transform">
              Terms
            </a>
          </div>
          <p class="font-handwritten text-sm transform rotate-1">
            © 2024 ConvoConnect - Where conversations change lives
          </p>
        </footer>
      </div>
    </div>
  )
}