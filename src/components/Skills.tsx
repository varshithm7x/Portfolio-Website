"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python" },
        { name: "TypeScript" },
        { name: "JavaScript" },
        { name: "C" },
        { name: "C++" },
        { name: "CSS" }
      ]
    },
    {
      category: "Technologies & Frameworks",
      skills: [
        { name: "React/Next.js" },
        { name: "Jetpack Compose" },
        { name: "Firebase" },
        { name: "AI/ML Libraries" },
        { name: "CAD Integration" },
        { name: "Git/GitHub" }
      ]
    },
    {
      category: "Areas of Interest",
      skills: [
        { name: "Artificial Intelligence" },
        { name: "3D Technologies" },
        { name: "Web Development" },
        { name: "Data Processing" },
        { name: "Voice Assistants" }
      ]
    }
  ]

  return (
    <section id="skills" className="py-4 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-black dark:text-white transition-colors duration-300">
          Skills
        </h2>
        <div className="space-y-6">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-3">              <h3 className="text-lg font-bold text-black dark:text-white transition-colors duration-300">
              {category.category}
            </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="border border-gray-200 dark:border-white/10 p-3 rounded-lg bg-white dark:bg-transparent transition-colors duration-300 hover:bg-gray-50 dark:hover:bg-white/5 w-fit">
                    <span className="text-base text-black dark:text-white transition-colors duration-300 block whitespace-nowrap">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
