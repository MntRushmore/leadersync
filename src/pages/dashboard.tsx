interface DashboardPageProps {
  user: any
}

export function DashboardPage({ user }: DashboardPageProps) {
  return (
    <div class="min-h-screen bg-white">
      {/* Navigation Header */}
      <nav class="border-b-2 border-black border-dashed bg-gray-50 px-4 py-3">
        <div class="container mx-auto flex justify-between items-center">
          <div class="flex items-center space-x-6">
            <a href="/" class="scribble-border p-2 hover:rotate-1 transition-transform">
              <span class="text-xl font-bold font-sketch">ConvoConnect</span>
            </a>
            <nav class="hidden md:flex space-x-4">
              <button onclick="switchSection('overview')" class="nav-btn font-handwritten hover:underline" data-section="overview">
                📊 Overview
              </button>
              <button onclick="switchSection('find-ceos')" class="nav-btn font-handwritten hover:underline" data-section="find-ceos">
                🔍 Find CEOs
              </button>
              <button onclick="switchSection('my-calls')" class="nav-btn font-handwritten hover:underline" data-section="my-calls">
                📹 My Calls
              </button>
              <button onclick="switchSection('profile')" class="nav-btn font-handwritten hover:underline" data-section="profile">
                👤 Profile
              </button>
            </nav>
          </div>
          
          <div class="flex items-center space-x-4">
            <div class="text-right hidden md:block">
              <p class="font-handwritten text-sm">Welcome back,</p>
              <p class="font-sketch font-bold">{user.name}</p>
              <span class="text-xs bg-blue-100 px-2 py-1 rounded font-handwritten">
                {user.role === 'student' ? '🎓 Student' : '👑 Leader'}
              </span>
            </div>
            
            <div class="flex items-center space-x-2">
              <div class="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center text-xl">
                {user.role === 'student' ? '🎓' : '👑'}
              </div>
              
              <div class="relative">
                <button onclick="toggleDropdown()" class="scribble-button px-3 py-1 font-sketch text-sm bg-gray-200 hover:bg-gray-300">
                  ⋮
                </button>
                <div id="userDropdown" class="hidden absolute right-0 mt-2 w-48 scribble-card bg-white shadow-lg z-50">
                  <a href="/profile" class="block px-4 py-2 font-handwritten hover:bg-gray-100">Edit Profile</a>
                  <button onclick="logout()" class="block w-full text-left px-4 py-2 font-handwritten hover:bg-gray-100 text-red-600">
                    Logout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <div class="md:hidden mt-3 flex space-x-2 overflow-x-auto">
          <button onclick="switchSection('overview')" class="nav-btn whitespace-nowrap px-3 py-1 scribble-button font-sketch text-sm" data-section="overview">
            📊 Overview
          </button>
          <button onclick="switchSection('find-ceos')" class="nav-btn whitespace-nowrap px-3 py-1 scribble-button font-sketch text-sm" data-section="find-ceos">
            🔍 Find CEOs
          </button>
          <button onclick="switchSection('my-calls')" class="nav-btn whitespace-nowrap px-3 py-1 scribble-button font-sketch text-sm" data-section="my-calls">
            📹 My Calls
          </button>
          <button onclick="switchSection('profile')" class="nav-btn whitespace-nowrap px-3 py-1 scribble-button font-sketch text-sm" data-section="profile">
            👤 Profile
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div class="container mx-auto px-4 py-8">
        
        {/* Overview Section */}
        <div id="overview-section" class="dashboard-section">
          <div class="text-center mb-8">
            <div class="scribble-border-large inline-block p-6">
              <h1 class="text-4xl font-bold font-sketch mb-4 transform rotate-1">
                {user.role === 'student' ? '🎓 Student Dashboard' : '👑 Leader Dashboard'}
              </h1>
              <p class="text-xl font-handwritten">
                {user.role === 'student'
                  ? 'Ready to get career advice from mentors and start building a successful career?'
                  : 'Ready to provide career coaching and mentorship to the next generation?'}
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div class="grid md:grid-cols-4 gap-6 mb-8">
            <div class="scribble-card p-6 text-center transform hover:rotate-1 transition-transform">
              <div class="text-3xl mb-2">💬</div>
              <h3 class="text-2xl font-bold font-sketch">{user.totalConversations || 0}</h3>
              <p class="font-handwritten text-sm">Mentoring Sessions</p>
            </div>
            
            <div class="scribble-card p-6 text-center transform hover:-rotate-1 transition-transform">
              <div class="text-3xl mb-2">⭐</div>
              <h3 class="text-2xl font-bold font-sketch">{user.averageRating || 0}/5</h3>
              <p class="font-handwritten text-sm">Average Rating</p>
            </div>
            
            <div class="scribble-card p-6 text-center transform hover:rotate-1 transition-transform">
              <div class="text-3xl mb-2">🏆</div>
              <h3 class="text-2xl font-bold font-sketch">
                {user.verificationStatus === 'verified' ? 'Verified' : 'Pending'}
              </h3>
              <p class="font-handwritten text-sm">Profile Status</p>
            </div>

            <div class="scribble-card p-6 text-center transform hover:-rotate-1 transition-transform">
              <div class="text-3xl mb-2">🎯</div>
              <h3 class="text-2xl font-bold font-sketch">3</h3>
              <p class="font-handwritten text-sm">Available Mentors</p>
            </div>
          </div>

          {/* Tutoring Banner */}
          <div class="mb-8 max-w-4xl mx-auto">
            <div class="scribble-border-large overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?w=900&q=80"
                alt="Student getting career coaching and one-on-one tutoring from a professional mentor"
                class="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div class="text-center mb-8">
            <div class="scribble-border-large inline-block p-8 bg-gray-50">
              <h2 class="text-3xl font-bold font-sketch mb-6 transform -rotate-1">
                🚀 Quick Start
              </h2>
              <div class="flex flex-col md:flex-row gap-4 justify-center">
                <button onclick="quickMatch()" class="scribble-button text-xl font-bold font-sketch px-8 py-4 bg-blue-200 hover:bg-blue-300 transform hover:rotate-1 transition-all">
                  ⚡ Quick Match
                </button>
                <button onclick="switchSection('find-ceos')" class="scribble-button text-xl font-bold font-sketch px-8 py-4 bg-green-200 hover:bg-green-300 transform hover:-rotate-1 transition-all">
                  🔍 Browse CEOs
                </button>
                <button onclick="switchSection('my-calls')" class="scribble-button text-xl font-bold font-sketch px-8 py-4 bg-purple-200 hover:bg-purple-300 transform hover:rotate-1 transition-all">
                  📹 View History
                </button>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div>
            <h2 class="text-2xl font-bold font-sketch mb-6 text-center transform rotate-1">
              📚 Recent Activity
            </h2>
            <div id="recentActivity" class="space-y-4">
              <div class="scribble-card p-4 bg-yellow-50">
                <p class="font-handwritten">Loading your recent activity...</p>
              </div>
            </div>
          </div>
        </div>

        {/* Find CEOs Section */}
        <div id="find-ceos-section" class="dashboard-section hidden">
          <div class="text-center mb-8">
            <div class="scribble-border inline-block p-4">
              <h1 class="text-3xl font-bold font-sketch transform -rotate-1">
                🔍 Find & Connect with Leaders
              </h1>
            </div>
          </div>

          {/* Search and Filters */}
          <div class="scribble-card p-6 mb-8 bg-gray-50">
            <div class="grid md:grid-cols-4 gap-4">
              <div>
                <label class="block font-sketch mb-2">Industry</label>
                <select id="industryFilter" class="w-full p-2 border-2 border-black border-dashed rounded font-handwritten">
                  <option value="">All Industries</option>
                  <option value="technology">Technology</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="education">Education</option>
                  <option value="retail">Retail</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="consulting">Consulting</option>
                </select>
              </div>
              
              <div>
                <label class="block font-sketch mb-2">Experience</label>
                <select id="experienceFilter" class="w-full p-2 border-2 border-black border-dashed rounded font-handwritten">
                  <option value="">Any Experience</option>
                  <option value="5">5+ Years</option>
                  <option value="10">10+ Years</option>
                  <option value="15">15+ Years</option>
                  <option value="20">20+ Years</option>
                </select>
              </div>
              
              <div>
                <label class="block font-sketch mb-2">Company Size</label>
                <select id="companySizeFilter" class="w-full p-2 border-2 border-black border-dashed rounded font-handwritten">
                  <option value="">Any Size</option>
                  <option value="startup">Startup (1-50)</option>
                  <option value="medium">Medium (51-500)</option>
                  <option value="large">Large (500+)</option>
                </select>
              </div>
              
              <div class="flex items-end">
                <button onclick="searchCEOs()" class="w-full scribble-button p-2 font-sketch bg-blue-200 hover:bg-blue-300">
                  🔍 Search
                </button>
              </div>
            </div>
          </div>

          {/* CEO Grid */}
          <div id="ceoGrid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* CEO cards will be populated by JavaScript */}
          </div>
        </div>

        {/* My Calls Section */}
        <div id="my-calls-section" class="dashboard-section hidden">
          <div class="text-center mb-8">
            <div class="scribble-border inline-block p-4">
              <h1 class="text-3xl font-bold font-sketch transform rotate-1">
                📹 My Video Calls
              </h1>
            </div>
          </div>

          {/* Call Status Tabs */}
          <div class="flex justify-center mb-8 space-x-4">
            <button onclick="showCallTab('upcoming')" class="call-tab-btn scribble-button px-6 py-3 font-sketch active" data-tab="upcoming">
              🕐 Upcoming
            </button>
            <button onclick="showCallTab('completed')" class="call-tab-btn scribble-button px-6 py-3 font-sketch" data-tab="completed">
              ✅ Completed
            </button>
            <button onclick="showCallTab('cancelled')" class="call-tab-btn scribble-button px-6 py-3 font-sketch" data-tab="cancelled">
              ❌ Cancelled
            </button>
          </div>

          {/* Call Lists */}
          <div id="upcomingCalls" class="call-tab-content">
            <div class="text-center py-8">
              <div class="scribble-card p-8 bg-blue-50 max-w-md mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&q=80"
                alt="Student preparing for a career mentorship and online tutoring session"
                  class="w-full h-40 object-cover rounded mb-4"
                  style="border-radius: 10px 18px 14px 20px"
                />
                <h3 class="text-xl font-bold font-sketch mb-4">No Upcoming Calls</h3>
                <p class="font-handwritten mb-6">You don't have any scheduled mentoring sessions yet. Ready to get career advice from industry leaders?</p>
                <button onclick="switchSection('find-ceos')" class="scribble-button px-6 py-3 font-sketch bg-blue-200 hover:bg-blue-300">
                  🔍 Find a Mentor
                </button>
              </div>
            </div>
          </div>

          <div id="completedCalls" class="call-tab-content hidden">
            <div id="completedCallsList">
              <div class="text-center py-8">
                <p class="font-handwritten text-gray-600">Loading your call history...</p>
              </div>
            </div>
          </div>

          <div id="cancelledCalls" class="call-tab-content hidden">
            <div class="text-center py-8">
              <p class="font-handwritten text-gray-600">No cancelled calls</p>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div id="profile-section" class="dashboard-section hidden">
          <div class="text-center mb-8">
            <div class="scribble-border inline-block p-4">
              <h1 class="text-3xl font-bold font-sketch transform -rotate-1">
                👤 My Profile
              </h1>
            </div>
          </div>

          <div class="max-w-2xl mx-auto">
            <div class="scribble-card p-8 bg-gray-50">
              <form id="profileForm" class="space-y-6">
                <div class="text-center mb-6">
                  <div class="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center text-4xl mx-auto mb-4">
                    {user.role === 'student' ? '🎓' : '👑'}
                  </div>
                  <h2 class="text-2xl font-bold font-sketch">{user.name}</h2>
                  <p class="font-handwritten text-gray-600">{user.email}</p>
                </div>

                {/* Basic Info */}
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block font-sketch mb-2">Full Name</label>
                    <input type="text" id="profileName" value="{user.name}" class="w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" />
                  </div>
                  <div>
                    <label class="block font-sketch mb-2">Email</label>
                    <input type="email" id="profileEmail" value="{user.email}" disabled class="w-full p-3 border-2 border-gray-400 border-dashed rounded font-handwritten bg-gray-100" />
                  </div>
                </div>

                {user.role === 'student' ? (
                  <>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div>
                        <label class="block font-sketch mb-2">University</label>
                        <input type="text" id="profileUniversity" value="{user.university || ''}" class="w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" />
                      </div>
                      <div>
                        <label class="block font-sketch mb-2">Major</label>
                        <input type="text" id="profileMajor" value="{user.major || ''}" class="w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" />
                      </div>
                    </div>
                    <div>
                      <label class="block font-sketch mb-2">Graduation Year</label>
                      <input type="number" id="profileGradYear" value="{user.graduationYear || ''}" class="w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" />
                    </div>
                  </>
                ) : (
                  <>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div>
                        <label class="block font-sketch mb-2">Company</label>
                        <input type="text" id="profileCompany" value="{user.company || ''}" class="w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" />
                      </div>
                      <div>
                        <label class="block font-sketch mb-2">Position</label>
                        <input type="text" id="profilePosition" value="{user.position || ''}" class="w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" />
                      </div>
                    </div>
                    <div class="grid md:grid-cols-2 gap-4">
                      <div>
                        <label class="block font-sketch mb-2">Industry</label>
                        <select id="profileIndustry" class="w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid">
                          <option value="">Select Industry</option>
                          <option value="technology">Technology</option>
                          <option value="finance">Finance</option>
                          <option value="healthcare">Healthcare</option>
                          <option value="education">Education</option>
                        </select>
                      </div>
                      <div>
                        <label class="block font-sketch mb-2">Years of Experience</label>
                        <input type="number" id="profileExperience" value="{user.experienceYears || ''}" class="w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" />
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <label class="block font-sketch mb-2">Bio</label>
                  <textarea id="profileBio" rows="4" class="w-full p-3 border-2 border-black border-dashed rounded font-handwritten focus:outline-none focus:border-solid" placeholder="Tell us about yourself...">{user.bio || ''}</textarea>
                </div>

                <button type="submit" class="w-full scribble-button p-4 font-sketch text-xl bg-green-200 hover:bg-green-300">
                  💾 Update Profile
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Video Call Modal */}
      <div id="videoCallModal" class="fixed inset-0 bg-black bg-opacity-50 hidden flex items-center justify-center z-50">
        <div class="bg-white max-w-md mx-4 relative">
          <div class="scribble-border-large p-8 text-center">
            <div class="text-6xl mb-4">📹</div>
            <h3 class="text-2xl font-bold font-sketch mb-4">Start Video Call?</h3>
            <div id="callPartnerInfo" class="mb-6">
              {/* Partner info will be populated by JavaScript */}
            </div>
            <div class="flex space-x-4">
              <button onclick="startVideoCall()" class="scribble-button px-6 py-3 font-sketch bg-green-200 hover:bg-green-300">
                📹 Start Call
              </button>
              <button onclick="closeVideoCallModal()" class="scribble-button px-6 py-3 font-sketch bg-gray-200 hover:bg-gray-300">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* JavaScript for Dashboard Functionality */}
      <script dangerouslySetInnerHTML={{
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
              image: "👩‍💼"
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
              image: "👨‍💼"
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
              image: "👩‍⚕️"
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
              image: "👨‍🔬"
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
              image: "👩‍🏫"
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
              image: "👨‍💼"
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
                  '<span>⭐ ' + ceo.rating + '/5</span>' +
                '</div>' +
              '</div>' +
              '<p class="font-handwritten text-sm text-gray-700 mb-4">' + ceo.bio + '</p>' +
              '<button onclick="requestVideoCall(' + ceo.id + ')" class="w-full scribble-button p-3 font-sketch bg-blue-200 hover:bg-blue-300">' +
                '📹 Request Video Call' +
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
            { id: 1, name: "Sarah Chen", company: "TechVision Inc", image: "👩‍💼" },
            { id: 2, name: "Marcus Johnson", company: "FinanceForward", image: "👨‍💼" },
            { id: 3, name: "Dr. Amanda Rodriguez", company: "HealthTech Solutions", image: "👩‍⚕️" },
            { id: 4, name: "David Kim", company: "EcoInnovate", image: "👨‍🔬" },
            { id: 5, name: "Lisa Thompson", company: "EduTech Global", image: "👩‍🏫" },
            { id: 6, name: "Robert Martinez", company: "RetailRevolution", image: "👨‍💼" }
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
              "🎯 Profile viewed by 3 CEOs in the last week",
              "📈 Your profile completion score: 85%", 
              "⭐ Received 5-star rating from last conversation",
              "🔥 You're in the top 10% of active students this month"
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
                    '<p class="font-handwritten text-xs text-gray-500">' + call.date + ' • ' + call.duration + '</p>' +
                    '<p class="font-handwritten text-sm mt-2">' + call.notes + '</p>' +
                  '</div>' +
                  '<div class="text-right">' +
                    '<div class="text-yellow-500">⭐'.repeat(call.rating) + '</div>' +
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
          successMsg.innerHTML = '<p class="font-handwritten text-green-700">✅ Profile updated successfully!</p>';
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
      }} />
    </div>
  )
}