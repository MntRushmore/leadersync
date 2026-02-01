export function RoleSelectPage() {
  return (
    <div class="min-h-screen bg-white relative overflow-hidden">
      {/* Hand-drawn background elements */}
      <div class="absolute inset-0 pointer-events-none">
        <svg class="absolute top-16 left-16 w-24 h-24 opacity-10" viewBox="0 0 100 100">
          <path d="M20,20 Q40,10 60,30 Q80,50 60,70 Q40,90 20,70 Q10,50 20,20" stroke="black" stroke-width="2" fill="none" />
        </svg>
        <svg class="absolute top-32 right-32 w-32 h-20 opacity-10" viewBox="0 0 100 50">
          <path d="M10,25 Q30,5 50,25 Q70,45 90,25" stroke="black" stroke-width="2" fill="none" class="animate-wiggle" />
        </svg>
        <svg class="absolute bottom-32 left-1/3 w-28 h-28 opacity-10" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="35" stroke="black" stroke-width="2" fill="none" />
          <circle cx="50" cy="50" r="20" stroke="black" stroke-width="1" fill="none" />
        </svg>
      </div>

      {/* Main Content */}
      <div class="relative z-10 container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div class="text-center mb-12">
          <div class="scribble-border inline-block p-4 mb-6">
            <h1 class="text-4xl md:text-5xl font-bold font-sketch transform rotate-1">
              Choose Your Role
            </h1>
          </div>
          <p class="text-lg md:text-xl font-handwritten max-w-2xl mx-auto transform -rotate-1">
            Are you a student seeking career advice and mentorship, or a leader ready to coach?
            Select your role to start your career development journey.
          </p>
        </div>

        {/* Role Selection Cards */}
        <div class="grid md:grid-cols-2 gap-8 mb-12">
          {/* Student Card */}
          <div class="scribble-card p-8 text-center transform hover:scale-105 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&q=80"
              alt="College students getting career advice and online tutoring together"
              class="w-full h-44 object-cover rounded mb-4"
              style="border-radius: 10px 18px 14px 20px"
            />
            <h2 class="text-2xl md:text-3xl font-bold font-sketch mb-4 transform rotate-1">
              I'm a Student
            </h2>
            <p class="font-handwritten text-lg mb-6 leading-relaxed">
              Find a mentor among industry leaders, successful entrepreneurs, and career coaches.
              Get career advice, professional guidance, and one-on-one tutoring to build a successful career.
            </p>
            <div class="mb-6">
              <h3 class="font-bold font-sketch mb-2">Perfect for:</h3>
              <ul class="font-handwritten text-sm text-left space-y-1">
                <li>• College students seeking career guidance</li>
                <li>• Recent graduates planning career paths</li>
                <li>• Professionals looking for career change advice</li>
                <li>• Aspiring entrepreneurs needing mentorship</li>
              </ul>
            </div>
            <button 
              onclick="selectRole('student')"
              class="scribble-button text-xl font-bold font-sketch px-8 py-4 w-full bg-blue-600 text-white hover:bg-blue-700 transform hover:rotate-1 transition-all duration-300"
            >
              Join as Student
            </button>
          </div>

          {/* CEO/Leader Card */}
          <div class="scribble-card p-8 text-center transform hover:scale-105 transition-all duration-300">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80"
              alt="Executive coach and business leader ready for career mentoring and leadership coaching"
              class="w-full h-44 object-cover rounded mb-4"
              style="border-radius: 10px 18px 14px 20px"
            />
            <h2 class="text-2xl md:text-3xl font-bold font-sketch mb-4 transform -rotate-1">
              I'm a Leader
            </h2>
            <p class="font-handwritten text-lg mb-6 leading-relaxed">
              Provide career coaching and professional mentorship to the next generation.
              Share career advice and make a lasting impact through executive mentoring sessions.
            </p>
            <div class="mb-6">
              <h3 class="font-bold font-sketch mb-2">Perfect for:</h3>
              <ul class="font-handwritten text-sm text-left space-y-1">
                <li>• CEOs & executive coaches</li>
                <li>• Successful career professionals</li>
                <li>• Industry leaders & mentors</li>
                <li>• Leadership coaching experts</li>
              </ul>
            </div>
            <button 
              onclick="selectRole('ceo')"
              class="scribble-button text-xl font-bold font-sketch px-8 py-4 w-full bg-green-600 text-white hover:bg-green-700 transform hover:-rotate-1 transition-all duration-300"
            >
              Join as Leader
            </button>
          </div>
        </div>

        {/* Bottom CTA */}
        <div class="text-center">
          <div class="scribble-border inline-block p-6 bg-gray-50">
            <p class="font-handwritten text-lg mb-4">
              New to MentorMatch?
            </p>
            <a 
              href="/register" 
              class="scribble-button text-lg font-bold font-sketch px-6 py-3 bg-black text-white hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 mr-4"
            >
              Create Account
            </a>
            <a 
              href="/login" 
              class="font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform"
            >
              Already have an account? Login
            </a>
          </div>
        </div>

        {/* Back to Home */}
        <div class="text-center mt-8">
          <a 
            href="/" 
            class="font-handwritten text-lg hover:underline transform hover:rotate-1 transition-transform"
          >
            ← Back to Home
          </a>
        </div>
      </div>
    </div>
  )
}