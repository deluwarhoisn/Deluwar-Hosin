import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, ExternalLink, Code } from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

import schoolImage from '../../image/school 2.jpg'
import collegeImage from '../../image/versity.jpg'
import universityImage from '../../image/profile.png'
import heroImage from '../../image/git.png'

/* ---------------- Animations ---------------- */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: 'easeOut' },
  },
}

/* ---------------- Component ---------------- */
const Education = () => {
  const { education } = portfolioData

  /* Memoized image mapping */
  const educationWithImages = useMemo(() => {
    const fallbackImages = [
      schoolImage,
      collegeImage,
      universityImage,
      heroImage,
    ]

    return education.map((edu, index) => ({
      ...edu,
      image: edu.image || fallbackImages[index],
    }))
  }, [education])

  return (
    <section
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
    >
      <div className="container mx-auto max-w-6xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center gap-3"
          >
            <GraduationCap
              size={40}
              className="text-indigo-600 dark:text-indigo-400"
            />
            Education
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg"
          >
            My educational journey and learning path
          </motion.p>

          {/* Education Cards */}
          <div className="space-y-6">
            {educationWithImages.map((edu, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ x: 6, scale: 1.01 }}
                className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-6 bg-slate-50 dark:bg-slate-900 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 hover:border-indigo-500 transition-all"
              >
                {/* Image / Icon */}
                <div className="h-48 md:h-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600">
                  {edu.type === 'programming' ? (
                    <Code size={80} className="text-white opacity-80" />
                  ) : (
                    <img
                      src={edu.image}
                      alt={edu.alt || edu.title}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-center">
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-1">
                    {edu.title}
                  </h3>

                  <p className="text-lg font-medium text-indigo-600 dark:text-indigo-400 mb-4">
                    {edu.degree}
                  </p>

                  <div className="space-y-2 mb-5">
                    {edu.details.map((detail, i) => (
                      <p
                        key={i}
                        className="text-slate-600 dark:text-slate-400"
                      >
                        <span className="font-semibold text-slate-900 dark:text-slate-100">
                          {detail.label}:
                        </span>{' '}
                        {detail.value}
                      </p>
                    ))}
                  </div>

                  {edu.link && edu.link !== '#' && (
                    <motion.a
                      href={edu.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-slate-100 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 transition-colors w-fit"
                    >
                      {edu.linkText || 'View More'}
                      <ExternalLink size={16} />
                    </motion.a>
                  )}
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Education
