import { motion, type HTMLMotionProps } from 'framer-motion'
import { cn } from '../../lib/utils'

type Variant = 'primary' | 'ghost' | 'glass'

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: Variant
  icon?: React.ReactNode
  children: React.ReactNode
}

const variants: Record<Variant, string> = {
  primary: `
    bg-[var(--brand)] text-white
    hover:opacity-90
    shadow-[0_0_20px_var(--glow)]
  `,
  ghost: `
    border border-[var(--brand)] text-[var(--brand)]
    hover:bg-[var(--brand)] hover:text-white
  `,
  glass: `
    bg-[var(--surface)] border border-[var(--surface-border)]
    backdrop-blur-md text-[var(--text-primary)]
    hover:border-[var(--brand)]
  `
}

export function Button({
  variant = 'primary',
  icon,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      className={cn(
        'flex items-center gap-2 px-6 py-3 rounded-xl',
        'font-body font-medium text-sm',
        'transition-all duration-200 cursor-pointer',
        variants[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
    </motion.button>
  )
}
