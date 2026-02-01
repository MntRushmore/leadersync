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
            <h1 class="text-3xl font-bold font-sketch">MentorMatch</h1>
          </a>
          <div class="scribble-border-large inline-block p-6">
            <h2 class="text-4xl md:text-6xl font-bold font-sketch mb-4 transform -rotate-1">
              Our Story 📖
            </h2>
            <p class="text-xl font-handwritten max-w-3xl mx-auto">
              Free career advice, professional mentorship, and one-on-one tutoring from industry leaders
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div class="mb-16">
          <div class="scribble-border-large p-8 max-w-4xl mx-auto bg-gray-50">
            <h3 class="text-3xl font-bold font-sketch mb-6 text-center transform rotate-1">
              🎯 Our Mission
            </h3>
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&q=80"
              alt="Student receiving career coaching and professional development guidance from a mentor"
              class="w-full h-56 object-cover rounded mb-6"
              style="border-radius: 12px 20px 16px 24px"
            />
            <p class="text-lg font-handwritten leading-relaxed mb-6">
              At MentorMatch, we believe that every college student deserves access to career advice,
              career guidance, and professional mentoring from successful leaders and entrepreneurs.
              Too often, these valuable mentorship opportunities are limited by geography, network size,
              or social barriers.
            </p>
            <p class="text-lg font-handwritten leading-relaxed">
              We're breaking down those walls by creating a mentorship platform where career coaching
              and tutoring sessions can happen instantly and authentically - connecting students
              with executive coaches and industry leaders for the career counseling that drives
              long-term career success.
            </p>
          </div>
        </div>

        {/* How It Started */}
        <div class="mb-16">
          <div class="scribble-border p-6 max-w-3xl mx-auto transform rotate-1">
            <h3 class="text-2xl font-bold font-sketch mb-4 text-center">
              💡 How It All Started
            </h3>
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=700&q=80"
              alt="Students networking with professionals for career advice and mentorship opportunities"
              class="w-full h-48 object-cover rounded mb-4"
              style="border-radius: 10px 18px 14px 20px"
            />
            <p class="font-handwritten text-lg leading-relaxed">
              The idea came from a simple observation: the best career advice often comes
              by chance. A student sitting next to a CEO on a plane. A chance meeting with a mentor
              at a coffee shop. A random networking encounter at a conference. These moments of
              career guidance can change entire career trajectories - but they're too rare
              and too dependent on luck. We built MentorMatch so finding a mentor is just one click away.
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
              <h4 class="font-bold font-sketch text-lg mb-3">One-on-One Mentoring</h4>
              <p class="font-handwritten text-sm">Real career coaching conversations with real professionals, no scripts or agendas.</p>
            </div>
            
            <div class="scribble-card p-6 text-center transform hover:-rotate-2 transition-transform">
              <div class="text-4xl mb-4">🎲</div>
              <h4 class="font-bold font-sketch text-lg mb-3">Serendipity</h4>
              <p class="font-handwritten text-sm">Embracing the magic of unexpected encounters and random wisdom.</p>
            </div>
            
            <div class="scribble-card p-6 text-center transform hover:rotate-2 transition-transform">
              <div class="text-4xl mb-4">🚀</div>
              <h4 class="font-bold font-sketch text-lg mb-3">Career Growth</h4>
              <p class="font-handwritten text-sm">Every mentoring session is an opportunity for professional development and career advancement.</p>
            </div>
            
            <div class="scribble-card p-6 text-center transform hover:-rotate-2 transition-transform">
              <div class="text-4xl mb-4">🌍</div>
              <h4 class="font-bold font-sketch text-lg mb-3">Free Career Advice</h4>
              <p class="font-handwritten text-sm">Breaking down barriers to career counseling, tutoring, and professional mentorship.</p>
            </div>
          </div>
        </div>

        {/* Impact Stats */}
        <div class="mb-16">
          <div class="scribble-border-large p-8 max-w-4xl mx-auto text-center">
            <h3 class="text-3xl font-bold font-sketch mb-8 transform rotate-1">
              📊 Our Impact (So Far!)
            </h3>
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80"
              alt="Professional career coaching and tutoring in a one-on-one mentorship setting"
              class="w-full h-48 object-cover rounded mb-8"
              style="border-radius: 12px 20px 16px 24px"
            />
            <div class="grid md:grid-cols-3 gap-8">
              <div class="transform hover:scale-105 transition-transform">
                <div class="text-4xl font-bold font-sketch text-blue-600 mb-2">2,847</div>
                <p class="font-handwritten">Conversations facilitated</p>
              </div>
              <div class="transform hover:scale-105 transition-transform">
                <div class="text-4xl font-bold font-sketch text-green-600 mb-2">89%</div>
                <p class="font-handwritten">Report career success and clarity</p>
              </div>
              <div class="transform hover:scale-105 transition-transform">
                <div class="text-4xl font-bold font-sketch text-purple-600 mb-2">156</div>
                <p class="font-handwritten">Job offers from career mentorship connections</p>
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
              <p>• <strong>Global Mentorship Network:</strong> Career advice and tutoring from leaders across all continents</p>
              <p>• <strong>Industry-Specific Career Coaching:</strong> Find a mentor in your exact field of interest</p>
              <p>• <strong>Long-Term Mentorship:</strong> Build ongoing professional mentoring relationships beyond the first session</p>
              <p>• <strong>Career Success Tracking:</strong> See real career growth outcomes from mentorship connections</p>
              <p>• <strong>Mobile Career Guidance:</strong> Access career counseling and professional development anywhere</p>
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
              Whether you're a college student looking for career advice or an executive ready to mentor,
              join a mentorship program that's helping people build successful careers through professional guidance.
            </p>
            <div class="space-y-4">
              <a href="/role-select" 
                 class="scribble-button inline-block px-8 py-4 font-sketch text-xl hover:rotate-1 transition-transform bg-blue-200 hover:bg-blue-300 mr-4">
                Start Connecting
              </a>
              <a href="mailto:hello@mentormatch.com" 
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
            © 2024 MentorMatch - Where conversations change lives
          </p>
        </footer>
      </div>
    </div>
  )
}