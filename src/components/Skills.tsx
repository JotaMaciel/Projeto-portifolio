export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'Next.js', 'Vite'],
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Python', 'Express', 'MongoDB', 'PostgreSQL', 'Firebase'],
    },
    {
      category: 'Tools & Others',
      skills: ['Git', 'Docker', 'AWS', 'Figma', 'GraphQL', 'REST API'],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Technical <span className="text-red-600">Skills</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-8 rounded-lg border border-red-900 hover:border-red-600 bg-black bg-opacity-50 backdrop-blur transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20"
            >
              <h3 className="text-2xl font-bold text-red-600 mb-6">
                {category.category}
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill) => (
                  <div
                    key={skill}
                    className="px-4 py-3 rounded-lg bg-black border border-red-900 hover:border-red-600 hover:shadow-lg hover:shadow-red-600/10 transition-all duration-300 group cursor-pointer"
                  >
                    <p className="text-white text-sm font-semibold text-center group-hover:text-red-600 transition-colors">
                      {skill}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="mt-16 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8">Proficiency Levels</h3>

          <div className="space-y-8">
            {[
              { skill: 'Frontend Development', percentage: 95 },
              { skill: 'Backend Development', percentage: 85 },
              { skill: 'UI/UX Design', percentage: 80 },
              { skill: 'Database Design', percentage: 90 },
            ].map((item) => (
              <div key={item.skill}>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-semibold">{item.skill}</span>
                  <span className="text-red-600 font-bold">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-3 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-red-600 to-red-500 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${item.percentage}%`,
                      animation: 'slideInLeft 1s ease-out'
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
