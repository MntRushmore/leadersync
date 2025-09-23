export function VideoCallPage() {
  return (
    <div class="min-h-screen bg-gray-900 text-white relative">
      {/* Header */}
      <header class="bg-black p-4 border-b-2 border-white">
        <div class="flex justify-between items-center max-w-6xl mx-auto">
          <div class="scribble-border-white p-2">
            <h1 class="text-xl font-sketch">ConvoConnect</h1>
          </div>
          <div class="flex space-x-4">
            <button onclick="nextConversation()" 
                    class="scribble-button-white px-4 py-2 font-sketch hover:bg-white hover:text-black transition-colors">
              Next →
            </button>
            <button onclick="endCall()" 
                    class="scribble-button-white px-4 py-2 font-sketch bg-red-600 hover:bg-red-500">
              End Call
            </button>
          </div>
        </div>
      </header>

      <div class="flex h-screen pt-16">
        {/* Main Video Area */}
        <div class="flex-1 p-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
            
            {/* Partner Video */}
            <div class="relative">
              <div class="scribble-border-white h-full bg-gray-800 rounded-lg overflow-hidden relative">
                <video id="partnerVideo" class="w-full h-full object-cover" autoplay playsinline></video>
                
                {/* Partner Name Tag */}
                <div class="absolute top-4 left-4 scribble-border-white p-2 bg-black bg-opacity-75">
                  <span id="partnerRole" class="font-sketch text-sm">CEO</span>
                </div>

                {/* Mock Video Content */}
                <div id="mockPartnerVideo" class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-700 to-gray-900">
                  <div class="text-center">
                    <div class="text-6xl mb-4">👤</div>
                    <p class="font-sketch text-xl">Connecting...</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Your Video */}
            <div class="relative">
              <div class="scribble-border-white h-full bg-gray-800 rounded-lg overflow-hidden relative">
                <video id="localVideo" class="w-full h-full object-cover" autoplay muted playsinline></video>
                
                {/* Your Name Tag */}
                <div class="absolute top-4 left-4 scribble-border-white p-2 bg-black bg-opacity-75">
                  <span id="userRole" class="font-sketch text-sm">Student</span>
                </div>

                {/* Mock Video Content */}
                <div id="mockLocalVideo" class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900">
                  <div class="text-center">
                    <div class="text-6xl mb-4">🎓</div>
                    <p class="font-sketch text-xl">You</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Video Controls */}
          <div class="flex justify-center mt-4 space-x-4">
            <button onclick="toggleMute()" 
                    class="scribble-button-white p-3 rounded-full hover:bg-gray-700 transition-colors">
              <span id="muteIcon">🎤</span>
            </button>
            <button onclick="toggleVideo()" 
                    class="scribble-button-white p-3 rounded-full hover:bg-gray-700 transition-colors">
              <span id="videoIcon">📹</span>
            </button>
            <button onclick="shareScreen()" 
                    class="scribble-button-white p-3 rounded-full hover:bg-gray-700 transition-colors">
              <span>📺</span>
            </button>
          </div>
        </div>

        {/* Chat Sidebar */}
        <div class="w-80 bg-black border-l-2 border-white p-4 flex flex-col">
          <div class="scribble-border-white p-3 mb-4">
            <h3 class="font-sketch text-lg text-center">Chat</h3>
          </div>

          {/* Chat Messages */}
          <div id="chatMessages" class="flex-1 overflow-y-auto mb-4 space-y-3">
            <div class="bg-gray-800 p-3 rounded border border-gray-600">
              <span class="font-sketch text-sm text-gray-300">System:</span>
              <p class="font-handwritten text-sm mt-1">You're now connected! Say hello 👋</p>
            </div>
          </div>

          {/* Chat Input */}
          <div class="flex space-x-2">
            <input 
              type="text" 
              id="chatInput" 
              placeholder="Type a message..."
              class="flex-1 p-2 bg-gray-800 border border-gray-600 rounded font-handwritten text-sm focus:outline-none focus:border-white"
              onkeypress="handleChatEnter(event)"
            />
            <button onclick="sendMessage()" 
                    class="scribble-button-white px-4 py-2 font-sketch text-sm hover:bg-gray-700 transition-colors">
              Send
            </button>
          </div>

          {/* Connection Info */}
          <div class="mt-4 scribble-border-white p-3">
            <h4 class="font-sketch text-sm mb-2">Connection Info</h4>
            <div class="text-xs font-handwritten space-y-1 text-gray-300">
              <p>Status: <span class="text-green-400">Connected</span></p>
              <p>Duration: <span id="callDuration">00:00</span></p>
              <p>Quality: <span class="text-green-400">Good</span></p>
            </div>
          </div>
        </div>
      </div>

      <script>
        let callStartTime = Date.now();
        let isMuted = false;
        let isVideoOff = false;
        let messages = [];

        // Initialize the video call interface
        document.addEventListener('DOMContentLoaded', function() {
          const userRole = sessionStorage.getItem('userRole') || 'student';
          const partnerRole = userRole === 'student' ? 'CEO' : 'Student';
          
          document.getElementById('userRole').textContent = userRole === 'student' ? 'Student' : 'CEO';
          document.getElementById('partnerRole').textContent = partnerRole;
          
          // Update mock video icons
          if (userRole === 'student') {
            document.querySelector('#mockLocalVideo .text-6xl').textContent = '🎓';
            document.querySelector('#mockPartnerVideo .text-6xl').textContent = '👑';
          } else {
            document.querySelector('#mockLocalVideo .text-6xl').textContent = '👑';
            document.querySelector('#mockPartnerVideo .text-6xl').textContent = '🎓';
          }

          // Start call duration timer
          updateCallDuration();
          setInterval(updateCallDuration, 1000);

          // Simulate partner connection
          setTimeout(() => {
            document.querySelector('#mockPartnerVideo p').textContent = 'Connected!';
            addSystemMessage('Partner connected! 🎉');
          }, 2000);
        });

        function updateCallDuration() {
          const duration = Math.floor((Date.now() - callStartTime) / 1000);
          const minutes = Math.floor(duration / 60).toString().padStart(2, '0');
          const seconds = (duration % 60).toString().padStart(2, '0');
          document.getElementById('callDuration').textContent = minutes + ':' + seconds;
        }

        function toggleMute() {
          isMuted = !isMuted;
          document.getElementById('muteIcon').textContent = isMuted ? '🔇' : '🎤';
          addSystemMessage(isMuted ? 'Microphone muted' : 'Microphone unmuted');
        }

        function toggleVideo() {
          isVideoOff = !isVideoOff;
          document.getElementById('videoIcon').textContent = isVideoOff ? '📹❌' : '📹';
          const mockVideo = document.getElementById('mockLocalVideo');
          if (isVideoOff) {
            mockVideo.style.background = '#1f2937';
            mockVideo.querySelector('p').textContent = 'Video Off';
          } else {
            mockVideo.style.background = 'linear-gradient(to bottom right, #1d4ed8, #1e40af)';
            mockVideo.querySelector('p').textContent = 'You';
          }
          addSystemMessage(isVideoOff ? 'Video turned off' : 'Video turned on');
        }

        function shareScreen() {
          addSystemMessage('Screen sharing is not available in this demo');
        }

        function sendMessage() {
          const input = document.getElementById('chatInput');
          const message = input.value.trim();
          
          if (message) {
            addMessage('You', message);
            input.value = '';
            
            // Simulate partner response
            setTimeout(() => {
              const responses = [
                "That's interesting! Tell me more.",
                "I completely understand your perspective.",
                "Great question! Let me think about that.",
                "I had a similar experience when I was starting out.",
                "What specific challenges are you facing?",
                "Have you considered trying a different approach?"
              ];
              const response = responses[Math.floor(Math.random() * responses.length)];
              addMessage('Partner', response);
            }, 1000 + Math.random() * 2000);
          }
        }

        function handleChatEnter(event) {
          if (event.key === 'Enter') {
            sendMessage();
          }
        }

        function addMessage(sender, message) {
          const chatMessages = document.getElementById('chatMessages');
          const messageDiv = document.createElement('div');
          messageDiv.className = 'bg-gray-800 p-3 rounded border border-gray-600';
          messageDiv.innerHTML = 
            '<span class="font-sketch text-sm text-gray-300">' + sender + ':</span>' +
            '<p class="font-handwritten text-sm mt-1">' + message + '</p>';
          chatMessages.appendChild(messageDiv);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function addSystemMessage(message) {
          const chatMessages = document.getElementById('chatMessages');
          const messageDiv = document.createElement('div');
          messageDiv.className = 'bg-gray-700 p-2 rounded border border-gray-500';
          messageDiv.innerHTML = 
            '<span class="font-sketch text-xs text-yellow-300">System:</span>' +
            '<p class="font-handwritten text-xs mt-1 text-yellow-200">' + message + '</p>';
          chatMessages.appendChild(messageDiv);
          chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function nextConversation() {
          if (confirm('Are you sure you want to move to the next conversation?')) {
            addSystemMessage('Finding next partner...');
            setTimeout(() => {
              location.reload();
            }, 1500);
          }
        }

        function endCall() {
          if (confirm('Are you sure you want to end this call?')) {
            window.location.href = '/donation';
          }
        }
      </script>
    </div>
  )
}