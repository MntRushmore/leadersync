export function RoleSelectPage() {
  return (
    <div class="min-h-screen bg-white relative overflow-hidden">
      {/* Hand-drawn background elements */}
      <div class="absolute inset-0 pointer-events-none">
        <svg class="absolute top-20 left-20 w-40 h-40 opacity-10" viewBox="0 0 100 100">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="black" stroke-width="2" fill="none" class="animate-pulse" transform="rotate(15)" />
        </svg>
        <svg class="absolute bottom-20 right-20 w-32 h-32 opacity-10" viewBox="0 0 100 100">
          <path d="M10,90 Q50,10 90,90" stroke="black" stroke-width="2" fill="none" class="animate-bounce-slow" />
        </svg>
      </div>

      <div class="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
        <div class="text-center mb-12">
          <a href="/" class="inline-block scribble-border p-3 mb-8 hover:rotate-1 transition-transform">
            <h1 class="text-3xl font-bold font-sketch">ConvoConnect</h1>
          </a>
          <div class="scribble-border-large inline-block p-6">
            <h2 class="text-4xl md:text-5xl font-bold font-sketch mb-4 transform rotate-1">
              Who are you today?
            </h2>
            <p class="text-xl font-handwritten max-w-2xl mx-auto">
              Choose your role to get matched with the perfect conversation partner
            </p>
          </div>
        </div>

        {/* Role Selection Cards */}
        <div class="flex flex-col md:flex-row justify-center items-center gap-12 mb-16">
          
          {/* Student Card */}
          <div class="role-card group cursor-pointer transform hover:scale-105 hover:rotate-2 transition-all duration-300" 
               onclick="selectRole('student')">
            <div class="scribble-card-large p-8 text-center bg-gray-50 hover:bg-gray-100">
              <div class="text-6xl mb-6 group-hover:animate-bounce">🎓</div>
              <h3 class="text-3xl font-bold font-sketch mb-4 transform group-hover:rotate-1">
                I'm a Student
              </h3>
              <p class="text-lg font-handwritten mb-6 leading-relaxed">
                Seeking guidance, inspiration, and insights from experienced leaders and successful professionals.
              </p>
              <div class="scribble-border inline-block p-3">
                <span class="font-sketch text-lg">Click to Connect</span>
              </div>
            </div>
          </div>

          {/* VS Divider */}
          <div class="text-center">
            <div class="scribble-border p-4 transform rotate-45 hover:rotate-0 transition-transform duration-500">
              <span class="text-2xl font-bold font-sketch">VS</span>
            </div>
          </div>

          {/* CEO/Leader Card */}
          <div class="role-card group cursor-pointer transform hover:scale-105 hover:-rotate-2 transition-all duration-300" 
               onclick="selectRole('ceo')">
            <div class="scribble-card-large p-8 text-center bg-gray-50 hover:bg-gray-100">
              <div class="text-6xl mb-6 group-hover:animate-bounce">👑</div>
              <h3 class="text-3xl font-bold font-sketch mb-4 transform group-hover:-rotate-1">
                I'm a CEO/Leader
              </h3>
              <p class="text-lg font-handwritten mb-6 leading-relaxed">
                Ready to inspire, mentor, and share knowledge with the next generation of changemakers.
              </p>
              <div class="scribble-border inline-block p-3">
                <span class="font-sketch text-lg">Click to Inspire</span>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div class="text-center mb-8">
          <div class="scribble-border inline-block p-6 max-w-2xl">
            <h4 class="text-xl font-bold font-sketch mb-3 transform -rotate-1">How it works</h4>
            <div class="space-y-3 font-handwritten">
              <p>1. Choose your role above</p>
              <p>2. We'll match you with someone complementary</p>
              <p>3. Have a real conversation via video call</p>
              <p>4. Support the mission with a small donation</p>
            </div>
          </div>
        </div>

        {/* Loading Animation (Hidden by default) */}
        <div id="loading" class="text-center hidden">
          <div class="scribble-border inline-block p-6">
            <div class="animate-spin inline-block w-8 h-8 mb-4">
              <svg viewBox="0 0 100 100" class="w-full h-full">
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="4" fill="none" stroke-dasharray="60 40" />
              </svg>
            </div>
            <p class="font-sketch text-xl">Finding your perfect match...</p>
          </div>
        </div>

        {/* Back Button */}
        <div class="text-center">
          <a href="/" class="scribble-button inline-block px-6 py-3 font-sketch text-lg hover:rotate-1 transition-transform bg-gray-200 hover:bg-gray-300">
            ← Back to Home
          </a>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
        function selectRole(role) {
          // Show loading animation
          document.getElementById('loading').classList.remove('hidden');
          
          // Hide role cards
          document.querySelectorAll('.role-card').forEach(card => {
            card.style.opacity = '0.5';
            card.style.pointerEvents = 'none';
          });

          // Simulate matching process
          setTimeout(() => {
            // Store role in sessionStorage for the video call page
            sessionStorage.setItem('userRole', role);
            
            // Navigate to video call page
            window.location.href = '/video-call';
          }, 2000);
        }
        `
      }} />
    </div>
  )
}