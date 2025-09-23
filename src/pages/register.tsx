export function RegisterPage() {
  return (
    <div class="min-h-screen bg-white relative overflow-hidden">
      {/* Hand-drawn background elements */}
      <div class="absolute inset-0 pointer-events-none">
        <svg class="absolute top-16 right-16 w-40 h-40 opacity-10" viewBox="0 0 100 100">
          <path d="M20,20 L80,20 L80,80 L20,80 Z" stroke="black" stroke-width="2" fill="none" class="animate-pulse" transform="rotate(15)" />
        </svg>
        <svg class="absolute bottom-20 left-20 w-32 h-32 opacity-10" viewBox="0 0 100 100">
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
            <h2 class="text-4xl md:text-5xl font-bold font-sketch mb-4 transform -rotate-1">
              Join the Community! 🚀
            </h2>
            <p class="text-xl font-handwritten max-w-2xl mx-auto">
              Create your account and start meaningful conversations today
            </p>
          </div>
        </div>

        {/* Registration Form */}
        <div class="max-w-2xl mx-auto">
          <div class="scribble-card-large p-8 bg-gray-50">
            <form id="registerForm" class="space-y-6">
              {/* Role Selection */}
              <div>
                <label class="block font-sketch text-lg mb-4">I am a...</label>
                <div class="grid md:grid-cols-2 gap-4">
                  <label class="role-option cursor-pointer">
                    <input type="radio" name="role" value="student" class="hidden" required />
                    <div class="scribble-card p-4 text-center hover:bg-blue-50 transition-colors">
                      <div class="text-3xl mb-2">🎓</div>
                      <span class="font-sketch font-bold">Student</span>
                      <p class="font-handwritten text-sm mt-1">Seeking guidance and mentorship</p>
                    </div>
                  </label>
                  
                  <label class="role-option cursor-pointer">
                    <input type="radio" name="role" value="ceo" class="hidden" required />
                    <div class="scribble-card p-4 text-center hover:bg-purple-50 transition-colors">
                      <div class="text-3xl mb-2">👑</div>
                      <span class="font-sketch font-bold">CEO/Leader</span>
                      <p class="font-handwritten text-sm mt-1">Ready to inspire and mentor</p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Basic Information */}
              <div class="grid md:grid-cols-2 gap-4">
                <div>
                  <label class="block font-sketch text-lg mb-2" for="name">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    class="w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid focus:rotate-1 transition-transform"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label class="block font-sketch text-lg mb-2" for="email">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid focus:rotate-1 transition-transform"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label class="block font-sketch text-lg mb-2" for="password">
                  Password *
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  minlength="8"
                  class="w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid focus:rotate-1 transition-transform"
                  placeholder="At least 8 characters"
                />
                <p class="font-handwritten text-sm text-gray-600 mt-1">
                  Must be at least 8 characters long
                </p>
              </div>

              {/* Role-Specific Fields */}
              <div id="studentFields" class="hidden space-y-4">
                <h3 class="font-sketch text-xl mb-4 transform rotate-1">📚 Student Details</h3>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block font-sketch mb-2" for="university">
                      University
                    </label>
                    <input
                      type="text"
                      id="university"
                      name="university"
                      class="w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                      placeholder="e.g., Stanford University"
                    />
                  </div>

                  <div>
                    <label class="block font-sketch mb-2" for="major">
                      Major/Field of Study
                    </label>
                    <input
                      type="text"
                      id="major"
                      name="major"
                      class="w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                      placeholder="e.g., Computer Science"
                    />
                  </div>
                </div>

                <div>
                  <label class="block font-sketch mb-2" for="graduationYear">
                    Expected Graduation Year
                  </label>
                  <input
                    type="number"
                    id="graduationYear"
                    name="graduationYear"
                    min="2024"
                    max="2030"
                    class="w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                    placeholder="e.g., 2025"
                  />
                </div>
              </div>

              <div id="ceoFields" class="hidden space-y-4">
                <h3 class="font-sketch text-xl mb-4 transform -rotate-1">🏢 Professional Details</h3>
                
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block font-sketch mb-2" for="company">
                      Company *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      class="w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                      placeholder="e.g., Tech Innovations Inc."
                    />
                  </div>

                  <div>
                    <label class="block font-sketch mb-2" for="position">
                      Position *
                    </label>
                    <input
                      type="text"
                      id="position"
                      name="position"
                      class="w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                      placeholder="e.g., CEO, Founder, Director"
                    />
                  </div>
                </div>

                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <label class="block font-sketch mb-2" for="industry">
                      Industry
                    </label>
                    <select
                      id="industry"
                      name="industry"
                      class="w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                    >
                      <option value="">Select Industry</option>
                      <option value="technology">Technology</option>
                      <option value="finance">Finance</option>
                      <option value="healthcare">Healthcare</option>
                      <option value="education">Education</option>
                      <option value="retail">Retail</option>
                      <option value="manufacturing">Manufacturing</option>
                      <option value="media">Media & Entertainment</option>
                      <option value="consulting">Consulting</option>
                      <option value="nonprofit">Non-Profit</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label class="block font-sketch mb-2" for="experienceYears">
                      Years of Experience
                    </label>
                    <input
                      type="number"
                      id="experienceYears"
                      name="experienceYears"
                      min="0"
                      max="50"
                      class="w-full p-3 border-2 border-black border-dashed rounded-lg font-handwritten focus:outline-none focus:border-solid"
                      placeholder="e.g., 15"
                    />
                  </div>
                </div>
              </div>

              {/* Error Message */}
              <div id="errorMessage" class="hidden p-3 bg-red-100 border-2 border-red-400 border-dashed rounded-lg">
                <p class="font-handwritten text-red-700 text-sm"></p>
              </div>

              {/* Terms and Conditions */}
              <div class="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  required
                  class="mt-1"
                />
                <label for="terms" class="font-handwritten text-sm">
                  I agree to the{' '}
                  <a href="#" class="underline hover:text-blue-600">Terms of Service</a> and{' '}
                  <a href="#" class="underline hover:text-blue-600">Privacy Policy</a>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                id="registerButton"
                class="w-full scribble-button p-4 font-sketch text-xl hover:rotate-1 transition-transform bg-green-200 hover:bg-green-300"
              >
                <span id="registerButtonText">Create Account</span>
                <span id="registerLoader" class="hidden">
                  <svg class="animate-spin inline-block w-5 h-5 mr-2" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="40" stroke="black" stroke-width="4" fill="none" stroke-dasharray="60 40" />
                  </svg>
                  Creating account...
                </span>
              </button>
            </form>
          </div>

          {/* Sign In Link */}
          <div class="text-center mt-8">
            <div class="scribble-border inline-block p-4">
              <p class="font-handwritten">
                Already have an account?{' '}
                <a href="/login" class="font-sketch font-bold hover:underline transform hover:rotate-1 inline-block transition-transform">
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
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
      }} />
    </div>
  )
}