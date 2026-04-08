import React from 'react'
import { Heart } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-t from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 border-t border-slate-200 dark:border-slate-700">
      <div className="container mx-auto max-w-6xl px-4 py-8">

        {/* Top Section */}
        <div className="flex flex-col items-center gap-4">

          {/* Name */}
          <h2 className="text-lg font-semibold text-slate-800 dark:text-white">
            {portfolioData.personal.name}
          </h2>

          {/* Description */}
          <p className="text-sm text-slate-500 dark:text-slate-400 text-center max-w-md">
            Building modern web experiences with clean design and smooth performance.
          </p>

          {/* Divider */}
          <div className="w-16 h-[2px] bg-slate-300 dark:bg-slate-600 rounded-full"></div>

          {/* Copyright */}
          <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            © {currentYear} All rights reserved. Made with
            <Heart size={16} className="text-red-500 fill-red-500 animate-pulse" />
            using React & Tailwind
          </p>

        </div>

      </div>
    </footer>
  )
}

export default Footer