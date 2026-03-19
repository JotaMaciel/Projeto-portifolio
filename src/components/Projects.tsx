export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory management and payment integration.',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      link: '#',
      imageColor: 'from-red-600 to-orange-600',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      tags: ['React', 'Firebase', 'Tailwind', 'TypeScript'],
      link: '#',
      imageColor: 'from-red-700 to-red-600',
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'Smart chatbot powered by AI with natural language processing capabilities.',
      tags: ['Python', 'React', 'GPT-3', 'Flask'],
      link: '#',
      imageColor: 'from-orange-600 to-red-600',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'Modern and responsive portfolio website to showcase your projects and skills.',
      tags: ['React', 'Tailwind', 'Vite', 'TypeScript'],
      link: '#',
      imageColor: 'from-red-600 to-pink-600',
    },
    {
      id: 5,
      title: 'Weather Dashboard',
      description: 'Real-time weather application with detailed forecasts and interactive maps.',
      tags: ['React', 'API', 'Mapbox', 'D3.js'],
      link: '#',
      imageColor: 'from-red-700 to-orange-600',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'Headless CMS blog platform with SEO optimization and markdown support.',
      tags: ['Next.js', 'Sanity CMS', 'GraphQL', 'Vercel'],
      link: '#',
      imageColor: 'from-orange-500 to-red-600',
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured <span className="text-red-600">Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              className="group rounded-lg overflow-hidden border border-red-900 hover:border-red-600 transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20"
            >
              {/* Image */}
              <div
                className={`h-48 bg-gradient-to-br ${project.imageColor} relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg
                    className="w-16 h-16 text-white opacity-30 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 bg-black border-t border-red-900">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-red-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium text-red-600 bg-red-600 bg-opacity-10 rounded-full border border-red-600 border-opacity-30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Arrow */}
                <div className="mt-4 flex items-center text-red-600 group-hover:gap-2 transition-all duration-300">
                  <span className="text-sm font-semibold">View Project</span>
                  <svg
                    className="w-4 h-4 opacity-0 -ml-2 group-hover:opacity-100 group-hover:ml-0 transition-all"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
