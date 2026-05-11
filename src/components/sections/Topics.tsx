import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { GlassCard } from '../ui/GlassCard'
import { 
  FileCode2, PenTool, Palette, Box, AppWindow, 
  Server, Database, Network, ShieldCheck, Radio, 
  GitBranch, Layers, Flame, Rocket, Bot 
} from 'lucide-react'

import { useTranslation } from 'react-i18next'

const topics = [
  {
    key: "HTML",
    icon: <FileCode2 className="w-6 h-6 text-orange-500" />
  },
  {
    key: "UI/UX Fundamentals",
    icon: <PenTool className="w-6 h-6 text-pink-500" />
  },
  {
    key: "CSS & SASS",
    icon: <Palette className="w-6 h-6 text-blue-500" />
  },
  {
    key: "Bootstrap",
    icon: <Box className="w-6 h-6 text-purple-500" />
  },
  {
    key: "React & Next.js",
    icon: <AppWindow className="w-6 h-6 text-cyan-400" />
  },
  {
    key: "Node.js & Express",
    icon: <Server className="w-6 h-6 text-green-500" />
  },
  {
    key: "MongoDB & PostgreSQL",
    icon: <Database className="w-6 h-6 text-emerald-600" />
  },
  {
    key: "REST APIs",
    icon: <Network className="w-6 h-6 text-[var(--accent)]" />
  },
  {
    key: "Authentication & Authorization",
    icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />
  },
  {
    key: "Socket.IO",
    icon: <Radio className="w-6 h-6 text-red-500" />
  },
  {
    key: "Git & Agile",
    icon: <GitBranch className="w-6 h-6 text-orange-600" />
  },
  {
    key: "Redux & State Management",
    icon: <Layers className="w-6 h-6 text-violet-500" />
  },
  {
    key: "Firebase",
    icon: <Flame className="w-6 h-6 text-yellow-600" />
  },
  {
    key: "Deployment & Vercel",
    icon: <Rocket className="w-6 h-6 text-zinc-400" />
  },
  {
    key: "AI-assisted Development",
    icon: <Bot className="w-6 h-6 text-[var(--brand)]" />
  }
]

export function Topics() {
  const { t } = useTranslation()

  return (
    <section id="topics" className="py-20 md:py-32 bg-[var(--bg-secondary)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={fadeInUp}
          className="mb-12 md:mb-20 text-center"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('topics.title')}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {t('topics.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {topics.map((topic) => (
            <motion.div key={topic.key} variants={fadeInUp} className="h-full">
              <GlassCard hover className="h-full p-6 flex flex-col items-start bg-[var(--surface)]/60">
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] flex items-center justify-center shadow-sm border border-[var(--surface-border)] mb-4 shrink-0">
                  {topic.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
                  {topic.key}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {t(`topics.items.${topic.key}`)}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
