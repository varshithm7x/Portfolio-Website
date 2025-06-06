"use client"

import { Mail, Github, Linkedin, Sun, Moon } from "lucide-react"
import { useTheme } from "../context/ThemeContext"

export default function Contact() {
  const { theme, toggleTheme } = useTheme()
  
  const contactLinks = [
    {
      platform: "Email",
      value: "m7xvoltx@gmail.com",
      href: "mailto:m7xvoltx@gmail.com",      icon: <Mail className="w-4 h-4" />
    },
    {
      platform: "LinkedIn",
      value: "linkedin.com/in/mvarshith",
      href: "https://www.linkedin.com/in/mvarshith/",
      icon: <Linkedin className="w-4 h-4" />
    },    {
      platform: "X (Twitter)",
      value: "x.com/VOLTcodes",
      href: "https://x.com/VOLTcodes/",
      icon: (
        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },{
      platform: "GitHub",
      value: "github.com/varshithm7x",
      href: "https://github.com/varshithm7x/",
      icon: <Github className="w-4 h-4" />
    }
  ];

  return (
    <section id="contact" className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-white/90 dark:bg-black/80 backdrop-blur-sm border border-gray-200 dark:border-white/20 rounded-2xl py-3 px-6 shadow-lg transition-colors duration-300">
        <div className="flex items-center space-x-4">
          <div className="flex space-x-4 items-center">
            {contactLinks.map((contact, index) => (
              <a 
                key={index}
                href={contact.href} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
                title={contact.platform}
              >
                {contact.icon}
              </a>
            ))}
          </div>
          <div className="w-px h-6 bg-gray-300 dark:bg-white/20"></div>
          <button
            onClick={toggleTheme}
            className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors p-1 hover:bg-gray-100 dark:hover:bg-white/10 rounded-lg"
            title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </section>
  )
}
