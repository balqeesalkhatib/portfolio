import { motion, useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { GlassCard } from '../ui/GlassCard'
import { Users, BookOpen, Calendar, Clock } from 'lucide-react'

interface StatProps {
  value: number
  label: string
  suffix?: string
  icon: React.ReactNode
  index: number
}

function CounterCard({ value, label, suffix = "", icon }: StatProps) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const end = value
      const duration = 2000
      const increment = end / (duration / 16)
      
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 16)
      
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div variants={fadeInUp} className="h-full">
      <GlassCard className="p-8 h-full flex flex-col items-center justify-center text-center relative overflow-hidden group">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--brand)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="w-14 h-14 rounded-2xl bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        
        <div ref={ref} className="text-4xl md:text-5xl font-bold text-[var(--text-primary)] mb-2 font-display relative z-10">
          {count}{suffix}
        </div>
        
        <div className="text-[var(--text-secondary)] font-medium uppercase tracking-widest text-xs relative z-10">
          {label}
        </div>
      </GlassCard>
    </motion.div>
  )
}

export function Stats() {
  const stats = [
    { value: 100, label: "Students Taught", suffix: "+", icon: <Users size={28} /> },
    { value: 15, label: "Tech Topics", suffix: "+", icon: <BookOpen size={28} /> },
    { value: 3, label: "Years Experience", suffix: "+", icon: <Calendar size={28} /> },
    { value: 1000, label: "Mentorship Hours", suffix: "+", icon: <Clock size={28} /> },
  ]

  return (
    <section className="py-20 md:py-32 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {stats.map((stat, index) => (
            <CounterCard key={index} {...stat} index={index} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
