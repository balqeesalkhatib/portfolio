import { motion, AnimatePresence } from 'framer-motion'
import { Download } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

export function FloatingCV() {
  const { t, i18n } = useTranslation()
  const [isVisible, setIsVisible] = useState(false)
  const isRTL = i18n.language === 'ar'

  useEffect(() => {
    const handleScroll = () => {
      // Show after hero section (roughly 600px)
      setIsVisible(window.scrollY > 600)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          href="/cv.pdf"
          download="Balqees_AlKhateeb_CV.pdf"
          initial={{ opacity: 0, x: isRTL ? -100 : 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          exit={{ opacity: 0, x: isRTL ? -100 : 100, scale: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`
            fixed bottom-8 ${isRTL ? 'right-8' : 'left-8'} z-[55]
            flex items-center gap-3 px-5 py-3
            bg-[var(--surface)] border border-[var(--surface-border)]
            text-[var(--text-primary)] rounded-full shadow-2xl
            backdrop-blur-md hover:border-[var(--brand)] transition-colors
            group
          `}
        >
          <div className="w-8 h-8 rounded-full bg-[var(--brand)] text-white flex items-center justify-center">
            <Download size={16} className="group-hover:bounce" />
          </div>
          <span className="text-sm font-bold tracking-wide">
            {t('hero.cv')}
          </span>
        </motion.a>
      )}
    </AnimatePresence>
  )
}
