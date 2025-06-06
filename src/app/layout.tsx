import '../globals.css'
import { JetBrains_Mono } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext'
import { SmoothScrollProvider } from '@/components/SmoothScrollProvider'

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ['latin'],
  weight: ['400', '500', '700'] 
})

export const metadata = {
  title: 'Portfolio | Varshith',
  description: '18-year-old developer passionate about AI, 3D, and startups',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.className} overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider>
          <SmoothScrollProvider>
            <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
              {children}
            </div>
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
