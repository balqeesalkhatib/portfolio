import { motion } from 'framer-motion'
import { ArrowDown, Mail } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { Link } from 'react-scroll'
import { Button } from '../ui/Button'

export function Hero() {
  return (
    <section
      id="hero"
      className="
        relative min-h-screen flex items-center justify-center
        overflow-hidden
        bg-[var(--bg-primary)]
      "
    >
      {/* Mesh gradient background */}
      <div
        className="
          absolute inset-0 -z-10
          bg-mesh-light dark:bg-mesh-dark
        "
        aria-hidden
      />

      {/* Floating orbs (decorative) */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full
        bg-brand-500/20 dark:bg-brand-500/10 blur-3xl animate-float -z-10"
        aria-hidden />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full
        bg-accent-500/15 dark:bg-accent-500/10 blur-3xl animate-float
        [animation-delay:3s] -z-10"
        aria-hidden />

      <div className="container mx-auto px-6 text-center max-w-6xl">
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-[var(--accent)] font-mono text-sm tracking-widest uppercase mb-4"
        >
          Available for work
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold
            text-[var(--text-primary)] leading-tight mb-6"
        >
          Balqees Al-Khateeb
          <br />
          <span className="text-transparent bg-clip-text
            bg-gradient-to-r from-brand-500 to-accent-500">
             Full-stack Technical Instructor
          </span>
        </motion.h1>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-[var(--text-secondary)] text-lg md:text-xl
            max-w-2xl mx-auto mb-10"
        >
          I teach people
how to build things
with code.  I've helped hundreds of students go from zero to job-ready.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link to="topics" smooth offset={-80} duration={500}>
            <Button variant="primary">View My Work</Button>
          </Link>
          <a href="/cv.pdf" download="Balqees_AlKhateeb_CV.pdf">
            <Button variant="ghost">Download CV</Button>
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex items-center justify-center gap-6"
        >
          {[
            { icon: <FaGithub size={20} />, href: 'https://github.com/balqeesalkhatib' },
            { icon: <FaLinkedin size={20} />, href: 'https://www.linkedin.com/in/balqeesalkhateeb/' },
            { icon: <Mail size={20} />, href: 'mailto:balqees.alkhateb@gmail.com' },
          ].map(({ icon, href }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--brand)]
                transition-colors duration-200"
            >
              {icon}
            </a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2
          text-[var(--text-muted)]"
      >
        <ArrowDown size={20} />
      </motion.div>
    </section>
  )
}
