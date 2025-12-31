import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { portfolioData } from '../data/portfolioData'

const Stats = () => {
  const { stats } = portfolioData
  const [counted, setCounted] = useState(false)
  const statsRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
      rootMargin: '0px',
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !counted) {
          setCounted(true)
          animateCounters()
        }
      })
    }, observerOptions)

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [counted])

  const animateCounters = () => {
    const counters = statsRef.current?.querySelectorAll('.stat-number')
    counters?.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'))
      const duration = 2000
      const increment = target / (duration / 16)
      let current = 0

      const updateCounter = () => {
        current += increment
        if (current < target) {
          counter.textContent = Math.floor(current) + (counter.getAttribute('data-suffix') || '')
          requestAnimationFrame(updateCounter)
        } else {
          counter.textContent = target + (counter.getAttribute('data-suffix') || '')
        }
      }

      updateCounter()
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          ref={statsRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-6 rounded-xl bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="text-4xl mb-4">{stat.icon}</div>
                <h3
                  className="stat-number text-4xl font-bold mb-2 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
                  data-target={stat.number}
                  data-suffix={stat.suffix}
                >
                  0{stat.suffix}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Stats
