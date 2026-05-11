import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { GlassCard } from '../ui/GlassCard'
import { Trophy, Microscope, Gamepad2, Users, Wrench, Target, ArrowUpDown, Bug, Briefcase } from 'lucide-react'

import { useTranslation } from 'react-i18next'

const steps = [
  { num: "01", key: "01" },
  { num: "02", key: "02" },
  { num: "03", key: "03" },
  { num: "04", key: "04" }
]

const activities = [
  { icon: <Trophy className="w-5 h-5 text-yellow-500" />, key: "competitions" },
  { icon: <Microscope className="w-5 h-5 text-blue-500" />, key: "challenges" },
  { icon: <Gamepad2 className="w-5 h-5 text-purple-500" />, key: "gamified" },
  { icon: <Users className="w-5 h-5 text-green-500" />, key: "pair" },
  { icon: <Wrench className="w-5 h-5 text-orange-500" />, key: "fix" },
]

const features = [
  {
    icon: <Target className="w-6 h-6 text-[var(--brand)]" />,
    key: "build"
  },
  {
    icon: <ArrowUpDown className="w-6 h-6 text-[var(--accent)]" />,
    key: "theory"
  },
  {
    icon: <Bug className="w-6 h-6 text-purple-500" />,
    key: "debug"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-emerald-500" />,
    key: "career"
  }
]

export function Approach() {
  const { t } = useTranslation()

  return (
    <section id="approach" className="py-20 md:py-32 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="text-center mb-16 md:mb-24"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            {t('approach.title')}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            {t('approach.subtitle')}
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {steps.map((step) => (
            <motion.div key={step.num} variants={fadeInUp} className="h-full">
              <GlassCard hover className="p-6 h-full flex flex-col relative overflow-hidden group">
                <div className="absolute -top-4 -right-4 text-8xl font-bold text-[var(--text-muted)] opacity-10 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none">
                  {step.num}
                </div>
                <h3 className="font-display text-xl font-bold text-[var(--text-primary)] mb-3 relative z-10">
                  {t(`approach.steps.${step.key}.title`)}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10">
                  {t(`approach.steps.${step.key}.description`)}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {features.map((feature) => (
            <motion.div key={feature.key} variants={fadeInUp} className="h-full">
              <GlassCard hover className="p-6 h-full flex flex-col justify-start relative">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] flex items-center justify-center shrink-0 shadow-sm border border-[var(--surface-border)]">
                    {feature.icon}
                  </div>
                  <span className="px-3 py-1 text-[10px] font-mono rounded-full bg-[var(--brand)]/10 text-[var(--brand)] border border-[var(--brand)]/20 uppercase tracking-wider text-right mt-1">
                    {t(`approach.features.${feature.key}.tag`)}
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
                  {t(`approach.features.${feature.key}.title`)}
                </h4>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {t(`approach.features.${feature.key}.description`)}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>

        {/* Gen-Z Teaching - Bottom Banner */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
        >
          <GlassCard hover={false} className="p-8 md:p-12 flex flex-col items-center text-center bg-[var(--surface)]/80 backdrop-blur-xl">
            <h3 className="font-display text-2xl md:text-3xl font-bold text-[var(--text-primary)] mb-4 leading-tight">
              {t('approach.banner.title')}
            </h3>
            <p className="text-[var(--text-secondary)] mb-10 leading-relaxed max-w-3xl mx-auto">
              {t('approach.banner.p')}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {activities.map((activity) => (
                <div key={activity.key} className="flex items-center gap-3 bg-[var(--bg-primary)] px-5 py-3 rounded-full border border-[var(--surface-border)] shadow-sm">
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                    {activity.icon}
                  </div>
                  <span className="text-[var(--text-primary)] font-medium text-sm">
                    {t(`approach.banner.activities.${activity.key}`)}
                  </span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
