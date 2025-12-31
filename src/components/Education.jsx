import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, ExternalLink, Code } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'
import schoolImage from '../../image/school 2.jpg'
import collegeImage from '../../image/versity.jpg'
import universityImage from '../../image/profile.png'
import heroImage from '../../image/git.png'

const Education = () => {
  const { education } = portfolioData
  
  // Map education data; prefer `edu.image` from data, fall back to local imports
  const educationWithImages = education.map((edu, index) => {
    const images = [schoolImage, collegeImage, universityImage, heroImage]
    return { ...edu, image: edu.image || images[index] }
  })

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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-3"
          >
            <GraduationCap size={40} className="text-indigo-600 dark:text-indigo-400" />
            Education
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg"
          >
            My educational journey and qualifications
          </motion.p>

          <div className="space-y-6">
            {educationWithImages.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-indigo-500 dark:hover:border-indigo-500 transition-all duration-300"
                whileHover={{ x: 5, scale: 1.01 }}
              >
                <div className="h-48 md:h-full overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                  {edu.title === 'Hero Programming' ? (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-indigo-600 to-purple-600">
                      <Code size={80} className="text-white opacity-80" />
                    </div>
                  ) : (
                    <img
                      src={edu.image}
                      alt={edu.alt}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  )}
                </div>
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                    {edu.title}
                  </h3>
                  <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                    {edu.degree}
                  </p>
                  <div className="space-y-2 mb-4">
                    {edu.details.map((detail, detailIndex) => (
                      <p
                        key={detailIndex}
                        className="text-slate-600 dark:text-slate-400"
                      >
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {detail.label}:
                        </span>{' '}
                        {detail.value}
                      </p>
                    ))}
                  </div>
                  {edu.link !== '#' && (
                    <motion.a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-lg hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors w-fit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {edu.linkText}
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
