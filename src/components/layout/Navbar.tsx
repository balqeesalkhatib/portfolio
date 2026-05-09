import { useEffect, useState } from 'react'
import { Link } from 'react-scroll'
import { motion, AnimatePresence } from 'framer-motion'
import { ThemeToggle } from '../ui/ThemeToggle'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About',      to: 'about' },
  { label: 'Topics',     to: 'topics' },
  { label: 'Approach',   to: 'approach' },
  { label: 'Success',    to: 'testimonials' },
  { label: 'Experience', to: 'experience' },
  { label: 'FAQ',        to: 'faq' },
  { label: 'Contact',    to: 'contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  // Close menu when resizing to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`
          fixed top-0 left-0 right-0 z-50
          transition-all duration-300
          ${scrolled || isOpen
            ? 'py-3 bg-[var(--surface)] backdrop-blur-xl border-b border-[var(--surface-border)] shadow-sm'
            : 'py-5'
          }
        `}
      >
        <nav className="container mx-auto px-6 flex items-center justify-between max-w-6xl">
          {/* Logo */}
          <Link
            to="hero"
            smooth
            className="font-display font-bold text-xl cursor-pointer z-50 group"
            onClick={() => setIsOpen(false)}
          >
            <span className="text-[var(--brand)]">BM</span>
            <span className="text-[var(--accent)] group-hover:animate-pulse">K.</span>
          </Link>

          {/* Links — desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <Link
                  to={to}
                  smooth offset={-80} duration={500}
                  spy activeClass="!text-[var(--brand)]"
                  className="
                    text-sm text-[var(--text-secondary)]
                    hover:text-[var(--brand)]
                    cursor-pointer transition-colors duration-200
                  "
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 md:hidden text-[var(--text-primary)] hover:text-[var(--brand)] transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 md:hidden bg-[var(--bg-primary)] pt-24 px-6 overflow-y-auto"
          >
            <ul className="flex flex-col gap-6">
              {navLinks.map(({ label, to }, index) => (
                <motion.li
                  key={to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={to}
                    smooth offset={-80} duration={500}
                    spy activeClass="text-[var(--brand)]"
                    className="text-2xl font-display font-bold text-[var(--text-primary)] hover:text-[var(--brand)]"
                    onClick={() => setIsOpen(false)}
                  >
                    {label}
                  </Link>
                </motion.li>
              ))}
            </ul>
            
            {/* Decorative element in mobile menu */}
            <div className="mt-12 pt-12 border-t border-[var(--surface-border)]">
              <p className="text-[var(--text-muted)] text-sm mb-4">Let's connect</p>
              <div className="flex gap-6 text-[var(--text-secondary)]">
                {/* Simplified social links for mobile menu bottom */}
                <span className="text-xs">Follow me for tech tips & insights</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
