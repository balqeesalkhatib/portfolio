import { Navbar } from './components/layout/Navbar'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Stats } from './components/sections/Stats'
import { Topics } from './components/sections/Topics'
import { Approach } from './components/sections/Approach'
import { Testimonials } from './components/sections/Testimonials'
import { Experience } from './components/sections/Experience'
import { FAQ } from './components/sections/FAQ'
import { Contact } from './components/sections/Contact'
import { Footer } from './components/layout/Footer'
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'
import { Link } from 'react-scroll'

function App() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300 overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[var(--brand)] z-[100] origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Stats />
        <Topics />
        <Approach />
        {/* <Testimonials /> 
        // i should add it and choose 3-6 students*/}
        <Experience />
        <FAQ />
        <Contact />
      </main>

      <Footer />

      {/* Back to Top Button */}
      <AnimatePresence>
        {showBackToTop && (
          <Link to="hero" smooth duration={500}>
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              className="fixed bottom-8 right-8 z-[60] w-12 h-12 rounded-full bg-[var(--brand)] text-white shadow-lg flex items-center justify-center hover:bg-[var(--brand)]/90 transition-colors group"
              aria-label="Back to Top"
            >
              <ArrowUp size={24} className="group-hover:-translate-y-1 transition-transform" />
            </motion.button>
          </Link>
        )}
      </AnimatePresence>

      {/* Background blobs for extra premium feel */}
      <div className="fixed top-0 left-0 w-full h-full -z-50 pointer-events-none opacity-20 dark:opacity-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--brand)] blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[var(--accent)] blur-[120px]" />
      </div>
    </div>
  )
}

export default App
