import { motion } from 'framer-motion'
import { cn } from '../../lib/utils'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hover?: boolean
  delay?: number
}

export function GlassCard({
  children,
  className,
  hover = true,
  delay = 0
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={hover ? { y: -4, scale: 1.01 } : undefined}
      className={cn(
        // Glass base
        'relative rounded-2xl overflow-hidden',
        'border border-[var(--surface-border)]',
        'bg-[var(--surface)]',
        'backdrop-blur-md',
        // Shadows
        'shadow-[0_8px_32px_rgba(0,0,0,0.08)]',
        'dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]',
        // Transition
        'transition-all duration-300',
        // Hover glow
        hover && 'hover:shadow-[0_0_0_1px_var(--brand),0_12px_40px_var(--glow)]',
        className
      )}
    >
      {/* Inner top highlight — the glass "shine" */}
      <div
        className="
          pointer-events-none absolute inset-0
          bg-gradient-to-b from-white/20 to-transparent
          dark:from-white/5
        "
        aria-hidden
      />
      <div className="relative z-10">{children}</div>
    </motion.div>
  )
}
