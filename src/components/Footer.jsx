import React from 'react'
import { Heart } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center text-slate-600 dark:text-slate-400">
          <p className="flex items-center justify-center gap-2">
            © {currentYear} {portfolioData.personal.name}. Made with
            <Heart size={16} className="text-red-500 fill-red-500" />
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
