import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { GlassCard } from '../ui/GlassCard'
import { Quote } from 'lucide-react'


import { useTranslation } from 'react-i18next'

export function Testimonials() {
  const { t } = useTranslation()
  const testimonials = t('testimonials.items', { returnObjects: true }) as { name: string, role: string, content: string, image: string }[]

  // Note: images are still hardcoded in the data mapping logic if needed, 
  // but I'll add them to the json or just keep them here if they are placeholders.
  // Actually, I'll map them back in the component for simplicity if they aren't in JSON.
  const testimonialImages = [
    "https://i.pravatar.cc/150?u=ahmed",
    "https://i.pravatar.cc/150?u=sara",
    "https://i.pravatar.cc/150?u=omar"
  ]

  return (
    <section id="testimonials" className="py-20 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {t('testimonials.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div key={index} variants={fadeInUp}>
              <GlassCard className="p-8 h-full flex flex-col relative group">
                <Quote className="absolute top-4 right-4 text-[var(--brand)] opacity-10 group-hover:opacity-20 transition-opacity" size={48} />
                
                <p className="text-[var(--text-secondary)] italic mb-8 flex-grow leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--brand)]/20 shadow-sm">
                    <img src={testimonialImages[index]} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)] text-sm">{testimonial.name}</h4>
                    <p className="text-[var(--text-muted)] text-xs">{testimonial.role}</p>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
