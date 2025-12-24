"use client"

export default function Projects() {
  const projects = [
    {
      title: "CadGPT",
      description: "AI-powered CAD design assistant that converts natural language descriptions into CAD models",
      github: "https://github.com/varshithm7x/CadGPT",
      tech: "Python, AI/ML, CAD",
      status: "building"
    },
    {
      title: "CVSorter",
      description: "Automated CV sorting and ranking system for efficient recruitment processes",
      github: "https://github.com/varshithm7x/CVSorter",
      tech: "C, Data Processing"
    },
    {
      title: "MathBox",
      description: "Interactive mathematics learning platform with courses, progress tracking, and visual demonstrations",
      github: "https://github.com/varshithm7x/mathbox",
      tech: "React, JavaScript, CSS",
      status: "building"
    },
  ]
  return (
    <section id="projects" className="py-4 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
        Projects
      </h2>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div key={index} className="border border-gray-200 dark:border-white/10 p-6 rounded-lg bg-white dark:bg-transparent transition-colors duration-300 hover:shadow-lg dark:hover:border-white/20">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="flex-1">                  <h3 className="text-lg font-bold mb-2 text-black dark:text-white transition-colors duration-300">
                  {project.title}
                </h3>                  <p className="text-gray-600 dark:text-gray-400 mb-3 transition-colors duration-300 text-base">
                    {project.description}
                  </p>                  <div className="flex items-center gap-2 flex-wrap">
                    <div className="text-sm text-blue-600 dark:text-blue-400 font-mono">
                      {project.tech}
                    </div>
                    {project.status && (
                      <div className="text-sm bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 px-2 py-1 rounded">
                        {project.status}
                      </div>
                    )}
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black dark:text-white hover:text-gray-600 dark:hover:text-gray-300 inline-block transition-colors duration-300 border border-gray-300 dark:border-white/20 px-4 py-2 rounded hover:bg-gray-100 dark:hover:bg-white/10 text-sm"
                  >
                    View on GitHub →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
