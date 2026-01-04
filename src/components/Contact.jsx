import React, { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import {
  Send,
  Github,
  Linkedin,
  Mail,
  CheckCircle,
  Facebook,
  Instagram,
  Phone,
  MessageCircle,
} from 'lucide-react'
import { portfolioData } from '../data/portfolioData'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

/* Reusable Social Card */
const SocialCard = ({ href, icon: Icon, title, subtitle }) => (
  <motion.a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-4 p-4 rounded-lg bg-slate-50 dark:bg-slate-900 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
    whileHover={{ x: 6 }}
  >
    <div className="p-3 bg-slate-200 dark:bg-slate-700 rounded-lg group-hover:bg-indigo-100 dark:group-hover:bg-indigo-900 transition-colors">
      <Icon
        size={24}
        className="text-slate-700 dark:text-slate-300 group-hover:text-indigo-600 dark:group-hover:text-indigo-400"
      />
    </div>
    <div>
      <p className="font-medium text-slate-900 dark:text-slate-100">{title}</p>
      <p className="text-sm text-slate-600 dark:text-slate-400">{subtitle}</p>
    </div>
  </motion.a>
)

const Contact = () => {
  const { social, contact } = portfolioData

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)

    // TODO: Connect backend / EmailJS / Formspree
    console.log('Form submitted:', formData)

    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', message: '' })
    }, 2500)
  }

  return (
    <section
      id="contact"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.h2
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent"
          >
            Get In Touch
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-center text-slate-600 dark:text-slate-400 mb-12 text-lg"
          >
            Have a project in mind? Let’s work together.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {['name', 'email'].map((field) => (
                  <div key={field}>
                    <label className="block text-sm font-medium mb-2 capitalize">
                      {field}
                    </label>
                    <input
                      type={field === 'email' ? 'email' : 'text'}
                      name={field}
                      required
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={`Your ${field}`}
                      className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500"
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message..."
                    className="w-full px-4 py-3 rounded-lg border bg-white dark:bg-slate-700 focus:ring-2 focus:ring-indigo-500 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitted}
                  aria-live="polite"
                  className={`w-full px-6 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition ${
                    isSubmitted
                      ? 'bg-green-600'
                      : 'bg-gradient-to-r from-indigo-600 to-purple-600'
                  } text-white`}
                  whileHover={!isSubmitted ? { scale: 1.02 } : {}}
                  whileTap={!isSubmitted ? { scale: 0.98 } : {}}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} /> Message Sent
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>

              <div className="space-y-4">
                <SocialCard
                  href={social.github}
                  icon={Github}
                  title="GitHub"
                  subtitle="View my code"
                />

                <SocialCard
                  href={social.linkedin}
                  icon={Linkedin}
                  title="LinkedIn"
                  subtitle="Connect professionally"
                />

                {social.facebook && (
                  <SocialCard
                    href={social.facebook}
                    icon={Facebook}
                    title="Facebook"
                    subtitle="Connect with me"
                  />
                )}

                {social.instagram && (
                  <SocialCard
                    href={social.instagram}
                    icon={Instagram}
                    title="Instagram"
                    subtitle="Follow me"
                  />
                )}

                <SocialCard
                  href={`mailto:${social.email}`}
                  icon={Mail}
                  title="Email"
                  subtitle={social.email}
                />

                <SocialCard
                  href={`tel:${contact.phone}`}
                  icon={Phone}
                  title="Phone"
                  subtitle={contact.phone}
                />

                <SocialCard
                  href={`https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, '')}`}
                  icon={MessageCircle}
                  title="WhatsApp"
                  subtitle={contact.whatsapp}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
