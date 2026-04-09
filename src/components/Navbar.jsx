import React, { useState, useEffect, useCallback } from 'react'
import { Menu, X, Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'

const NAV_OFFSET = 80

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')
  const [scrollProgress, setScrollProgress] = useState(0)

  const { theme, toggleTheme } = useTheme()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      // scroll progress
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setScrollProgress(progress)

      navLinks.forEach(link => {
        const section = document.querySelector(link.href)
        if (section) {
          const top = section.offsetTop - NAV_OFFSET
          const bottom = top + section.offsetHeight
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActiveSection(link.href)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (!element) return

    window.scrollTo({
      top: element.offsetTop - NAV_OFFSET,
      behavior: 'smooth',
    })

    setIsMobileMenuOpen(false)
  }, [])

  return (
    <>
      {/* Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[3px] z-[60] bg-transparent">
        <div
          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 transition-all"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">

            {/* Logo */}
            <motion.a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="text-2xl font-extrabold tracking-wide bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent"
              whileHover={{ scale: 1.08 }}
            >
              Deluwar<span className="text-indigo-500">.</span>
            </motion.a>

            {/* Desktop */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map(link => (
                <div key={link.name} className="relative">
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`font-medium transition ${
                      activeSection === link.href
                        ? 'text-indigo-500'
                        : 'text-slate-700 dark:text-slate-300 hover:text-indigo-500'
                    }`}
                  >
                    {link.name}
                  </a>

                  {/* Active underline */}
                  {activeSection === link.href && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 -bottom-1 h-[2px] w-full bg-indigo-500 rounded"
                    />
                  )}
                </div>
              ))}

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 hover:scale-110 transition"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile */}
            <div className="md:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={() => setIsMobileMenuOpen(prev => !prev)}
                className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="md:hidden mt-2 rounded-2xl bg-white dark:bg-slate-900 shadow-xl p-4"
              >
                {navLinks.map(link => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`block text-center py-3 rounded-lg ${
                      activeSection === link.href
                        ? 'bg-indigo-100 text-indigo-600'
                        : 'hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>
    </>
  )
}

export default Navbar