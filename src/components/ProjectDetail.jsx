import React from 'react'
import { motion } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  ArrowLeft, 
  Code, 
  Lightbulb, 
  Target,
  CheckCircle 
} from 'lucide-react'

const ProjectDetail = ({ project, onClose }) => {
  if (!project) return null

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white dark:bg-slate-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 p-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
            {project.title}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            <ArrowLeft size={24} />
          </button>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="p-6 space-y-8"
        >
          {/* Project Image */}
          <motion.div variants={itemVariants} className="relative h-64 rounded-xl overflow-hidden">
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-semibold text-xl">
                {project.title}
              </div>
            )}
          </motion.div>

          {/* Main Technology Stack */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center gap-2 mb-4">
              <Code className="text-indigo-600 dark:text-indigo-400" size={24} />
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                Technology Stack
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.mainTech?.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Detailed Description */}
          <motion.div variants={itemVariants}>
            <h3 className="text-xl font-semibold mb-4 text-slate-900 dark:text-slate-100">
              Project Overview
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              {project.detailedDescription}
            </p>
          </motion.div>

          {/* Features */}
          {project.features && (
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <CheckCircle className="text-green-600 dark:text-green-400" size={24} />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Key Features
                </h3>
              </div>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-green-600 dark:text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Challenges */}
          {project.challenges && (
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-orange-600 dark:text-orange-400" size={24} />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Challenges Faced
                </h3>
              </div>
              <ul className="space-y-2">
                {project.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Target size={16} className="text-orange-600 dark:text-orange-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{challenge}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Future Improvements */}
          {project.improvements && (
            <motion.div variants={itemVariants}>
              <div className="flex items-center gap-2 mb-4">
                <Lightbulb className="text-yellow-600 dark:text-yellow-400" size={24} />
                <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                  Future Improvements
                </h3>
              </div>
              <ul className="space-y-2">
                {project.improvements.map((improvement, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Lightbulb size={16} className="text-yellow-600 dark:text-yellow-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-600 dark:text-slate-400">{improvement}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}

          {/* Project Links */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-slate-200 dark:border-slate-700">
            <motion.a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ExternalLink size={20} />
              View Live Project
            </motion.a>
            
            <motion.a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-lg font-semibold hover:bg-slate-200 dark:hover:bg-slate-600 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github size={20} />
              View Source Code
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default ProjectDetail