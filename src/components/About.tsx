"use client"

export default function About() {  return (
    <section id="about" className="py-8 px-6 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-4xl mx-auto">        <h2 className="text-2xl font-bold mb-4 text-black dark:text-white transition-colors duration-300">
          About Me
        </h2>

        <p className="text-gray-600 dark:text-gray-300 mb-5 transition-colors duration-300 leading-relaxed text-sm">
          I'm an 18-year-old developer, tech enthusiast, and student with a deep passion for exploring the convergence of AI, 3D technologies, and entrepreneurship.
        </p>        <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300 leading-relaxed text-sm">
          I thrive on transforming ambitious ideas into tangible products, constantly pushing the boundaries of what's possible in the digital realm.
        </p>
      </div>
    </section>
  )
}