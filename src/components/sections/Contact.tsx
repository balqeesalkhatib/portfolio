import { motion } from 'framer-motion'
import { fadeInUp } from '../../lib/animations'
import { GlassCard } from '../ui/GlassCard'
import { Button } from '../ui/Button'
import { Send, Mail, MapPin, Phone } from 'lucide-react'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import { useState } from 'react'

interface ContactFormInputs {
  name: string
  email: string
  message: string
}

import { useTranslation } from 'react-i18next'

export function Contact() {
  const { t } = useTranslation()
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')
  const { register, handleSubmit, formState: { errors }, reset } = useForm<ContactFormInputs>()

  const onSubmit = async (data: ContactFormInputs) => {
    // Vite requires environment variables to start with VITE_
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey || serviceId === 'your_service_id_here') {
      console.error('EmailJS keys are missing in .env file')
      return
    }

    setStatus('sending')
    
    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: data.name,
          from_email: data.email,
          message: data.message,
          to_name: 'Balqees Al-Khateeb',
        },
        publicKey
      )

      setStatus('success')
      reset()
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      console.error('Email error:', error)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section id="contact" className="py-20 md:py-32 bg-[var(--bg-secondary)] relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute -bottom-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-brand-500/10 blur-3xl -z-10" />
      <div className="absolute -top-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-accent-500/10 blur-3xl -z-10" />

      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
          >
            <GlassCard className="p-8 md:p-10">
              <h3 className="font-display text-2xl font-bold mb-6">{t('contact.form.title')}</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">{t('contact.form.name')}</label>
                  <input
                    id="name"
                    type="text"
                    {...register('name', { required: `${t('contact.form.name')} ${t('contact.form.required')}` })}
                    className={`w-full bg-[var(--bg-primary)] border ${errors.name ? 'border-red-500' : 'border-[var(--surface-border)]'} rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition-shadow`}
                    placeholder={t('contact.form.namePlaceholder')}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">{t('contact.form.email')}</label>
                  <input
                    id="email"
                    type="email"
                    {...register('email', { 
                      required: `${t('contact.form.email')} ${t('contact.form.required')}`,
                      pattern: { value: /^\S+@\S+$/i, message: t('contact.form.invalidEmail') }
                    })}
                    className={`w-full bg-[var(--bg-primary)] border ${errors.email ? 'border-red-500' : 'border-[var(--surface-border)]'} rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition-shadow`}
                    placeholder={t('contact.form.emailPlaceholder')}
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--text-secondary)] mb-2">{t('contact.form.message')}</label>
                  <textarea
                    id="message"
                    rows={5}
                    {...register('message', { required: `${t('contact.form.message')} ${t('contact.form.required')}` })}
                    className={`w-full bg-[var(--bg-primary)] border ${errors.message ? 'border-red-500' : 'border-[var(--surface-border)]'} rounded-xl px-4 py-3 text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)] transition-shadow resize-none`}
                    placeholder={t('contact.form.messagePlaceholder')}
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>

                <Button 
                  type="submit" 
                  variant="primary" 
                  className="w-full justify-center" 
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    t('contact.form.sending')
                  ) : status === 'success' ? (
                    t('contact.form.sent')
                  ) : status === 'error' ? (
                    t('contact.form.error')
                  ) : (
                    <>{t('contact.form.send')} <Send size={18} /></>
                  )}
                </Button>
                
                {status === 'success' && (
                  <p className="text-green-500 text-center text-sm mt-2">{t('contact.form.successMessage')}</p>
                )}
                {status === 'error' && (
                  <p className="text-red-500 text-center text-sm mt-2">{t('contact.form.errorMessage')}</p>
                )}
              </form>
            </GlassCard>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            variants={fadeInUp}
            className="flex flex-col justify-center"
          >
            <div className="space-y-8">
              <div>
                <h3 className="font-display text-2xl font-bold mb-6">{t('contact.info.title')}</h3>
                <p className="text-[var(--text-secondary)] mb-8 leading-relaxed">
                  {t('contact.info.description')}
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] flex items-center justify-center shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-1">{t('contact.info.email')}</h4>
                    <a href="mailto:balqees.alkhateb@gmail.com" className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors">
                      balqees.alkhateb@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] flex items-center justify-center shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-1">{t('contact.info.phone')}</h4>
                    <a href="tel:00962787023107" className="text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors">
                      +962 787 023 107
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-purple-500/10 text-purple-500 flex items-center justify-center shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-medium text-[var(--text-primary)] mb-1">{t('contact.info.location')}</h4>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {t('contact.info.locationText')}<br />{t('contact.info.remote')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
