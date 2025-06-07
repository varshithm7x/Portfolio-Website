"use client"

export default function Skills() {
  const skillCategories = [
    {
      category: "Programming Languages",
      skills: [
        { name: "Python", level: "Advanced" },
        { name: "TypeScript", level: "Intermediate" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "C", level: "Intermediate" },
        { name: "Kotlin", level: "Intermediate" },
        { name: "CSS", level: "Intermediate" }
      ]
    },
    {
      category: "Technologies & Frameworks",
      skills: [
        { name: "React/Next.js", level: "Intermediate" },
        { name: "Jetpack Compose", level: "Intermediate" },
        { name: "Firebase", level: "Intermediate" },
        { name: "AI/ML Libraries", level: "Intermediate" },
        { name: "CAD Integration", level: "Beginner" },
        { name: "Git/GitHub", level: "Intermediate" }
      ]
    },
    {
      category: "Areas of Interest",
      skills: [
        { name: "Artificial Intelligence", level: "Learning" },
        { name: "3D Technologies", level: "Learning" },
        { name: "Mobile Development", level: "Learning" },
        { name: "Web Development", level: "Intermediate" },
        { name: "Data Processing", level: "Intermediate" },
        { name: "Voice Assistants", level: "Learning" }
      ]
    }
  ]

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Advanced":
        return "text-green-600 dark:text-green-400"
      case "Intermediate":
        return "text-blue-600 dark:text-blue-400"
      case "Beginner":
        return "text-yellow-600 dark:text-yellow-400"
      case "Learning":
        return "text-purple-600 dark:text-purple-400"
      default:
        return "text-gray-600 dark:text-gray-400"
    }
  }
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
                    <span className={`text-sm font-mono ${getLevelColor(skill.level)} transition-colors duration-300`}>
                      {skill.level}
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
