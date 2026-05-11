import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { Languages } from 'lucide-react'

export function LanguageToggle() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ar' : 'en'
    i18n.changeLanguage(newLang)
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={toggleLanguage}
      className="
        flex items-center gap-2 px-3 py-1.5 rounded-full
        bg-[var(--surface)] backdrop-blur-md
        border border-[var(--surface-border)]
        text-sm font-medium text-[var(--text-primary)]
        hover:border-[var(--brand)] transition-colors duration-200
      "
      aria-label="Toggle Language"
    >
      <Languages size={16} className="text-[var(--brand)]" />
      <span className="min-w-[24px]">
        {i18n.language === 'en' ? 'AR' : 'EN'}
      </span>
    </motion.button>
  )
}
