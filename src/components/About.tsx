export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="text-red-600">Me</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Image placeholder */}
          <div className="relative h-96 bg-gradient-to-br from-red-900 to-black rounded-lg overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent opacity-60"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center z-10">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full border-4 border-red-600 flex items-center justify-center bg-black">
                  <span className="text-4xl">👨‍💻</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Text */}
          <div className="space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a passionate developer with a love for creating elegant solutions to
              complex problems. With expertise in modern web technologies, I focus on
              building user-friendly applications that make a difference.
            </p>

            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with the
              developer community.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Fast Performance</h4>
                  <p className="text-gray-400 text-sm">Optimized for speed and efficiency</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">Quality Code</h4>
                  <p className="text-gray-400 text-sm">Clean, maintainable, and scalable</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M7.172 7.172a4 4 0 015.656 0m9.9-3.9a9 9 0 11-12.728 0m5.657 5.657a4 4 0 11-5.656 5.656"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-semibold">User Focused</h4>
                  <p className="text-gray-400 text-sm">Designs with users in mind</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
