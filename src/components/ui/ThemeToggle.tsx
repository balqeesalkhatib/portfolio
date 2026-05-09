import { Moon, Sun } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTheme } from '../../context/ThemeContext'

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="
        relative w-10 h-10 rounded-full
        border border-[var(--surface-border)]
        bg-[var(--surface)]
        backdrop-blur-md
        flex items-center justify-center
        hover:scale-110 active:scale-95
        transition-transform duration-200
      "
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {theme === 'light'
            ? <Moon size={18} className="text-[var(--brand)]" />
            : <Sun size={18} className="text-[var(--accent)]" />
          }
        </motion.div>
      </AnimatePresence>
    </button>
  )
}
