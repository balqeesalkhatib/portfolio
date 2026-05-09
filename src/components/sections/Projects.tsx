import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { GlassCard } from '../ui/GlassCard'
import { projects } from '../../data/projects'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'

export function Projects() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-[var(--brand)]">Projects</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            A selection of my recent work, highlighting my focus on performance,
            clean code, and great user experiences.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={fadeInUp}>
              <GlassCard hover className="h-full flex flex-col">
                <div className="relative h-48 md:h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="font-display text-2xl font-bold mb-2">{project.title}</h3>
                  <p className="text-[var(--text-secondary)] mb-6 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-3 py-1 text-xs font-mono rounded-full bg-[var(--brand)]/10 text-[var(--brand)] border border-[var(--brand)]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center gap-4 mt-auto">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--brand)] transition-colors"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)] hover:text-[var(--brand)] transition-colors"
                      >
                        <FaGithub size={16} /> Source Code
                      </a>
                    )}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
