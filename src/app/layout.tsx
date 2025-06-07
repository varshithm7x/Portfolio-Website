import '../globals.css'
import { Inter } from 'next/font/google'
import { ThemeProvider } from '../context/ThemeContext'

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'] 
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
    <html lang="en">      <body className={`${inter.className} overflow-x-hidden transition-colors duration-300`}>
        <ThemeProvider>
          <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white transition-colors duration-300">
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
