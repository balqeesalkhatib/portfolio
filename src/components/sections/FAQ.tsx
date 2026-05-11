import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp } from '../../lib/animations'
import { ChevronDown } from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'


function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="mb-4">
      <GlassCard 
        hover={false} 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'border-[var(--brand)]/40 shadow-lg' : ''}`}
      >
        <button
          onClick={onClick}
          className="w-full p-6 flex items-center justify-between text-start focus:outline-none"
        >
          <span className="font-bold text-[var(--text-primary)] md:text-lg">{question}</span>
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
            className="text-[var(--brand)]"
          >
            <ChevronDown size={24} />
          </motion.div>
        </button>
        
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed border-t border-[var(--surface-border)] pt-4">
                {answer}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </GlassCard>
    </div>
  )
}

import { useTranslation } from 'react-i18next'

export function FAQ() {
  const { t } = useTranslation()
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = t('faq.items', { returnObjects: true }) as { question: string, answer: string }[]

  return (
    <section id="faq" className="py-20 md:py-32 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6 max-w-3xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('faq.title')}
          </h2>
  
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
