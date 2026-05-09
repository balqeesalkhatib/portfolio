import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { GlassCard } from '../ui/GlassCard'
import { Trophy, Microscope, Gamepad2, Users, Wrench, Target, ArrowUpDown, Bug, Briefcase } from 'lucide-react'

const steps = [
  {
    num: "01",
    title: "Mindset First",
    description: "Before any code — build the right way of thinking. Curiosity over memorization."
  },
  {
    num: "02",
    title: "Strong Basics",
    description: "No shortcuts. Solid fundamentals are what separates good devs from great ones."
  },
  {
    num: "03",
    title: "Apply It",
    description: "Every concept is immediately applied in a real project. Theory without practice is just trivia."
  },
  {
    num: "04",
    title: "Level Up",
    description: "Push further. Add features, fix bugs, deploy — keep growing beyond the basics."
  }
]

const activities = [
  { icon: <Trophy className="w-5 h-5 text-yellow-500" />, text: "Coding Competitions" },
  { icon: <Microscope className="w-5 h-5 text-blue-500" />, text: "Live Challenges" },
  { icon: <Gamepad2 className="w-5 h-5 text-purple-500" />, text: "Gamified Activities" },
  { icon: <Users className="w-5 h-5 text-green-500" />, text: "Pair Programming" },
  { icon: <Wrench className="w-5 h-5 text-orange-500" />, text: "Fix & Connect" },
]

const features = [
  {
    icon: <Target className="w-6 h-6 text-[var(--brand)]" />,
    title: "Build Real Projects",
    description: "Students learn by doing. Every module ends with a project they built themselves — not a tutorial they followed.",
    tag: "Core principle"
  },
  {
    icon: <ArrowUpDown className="w-6 h-6 text-[var(--accent)]" />,
    title: "Theory → Practice",
    description: "I bridge the gap between what's taught in class and what's actually expected in the job market.",
    tag: "Industry-aligned"
  },
  {
    icon: <Bug className="w-6 h-6 text-purple-500" />,
    title: "Debug Together",
    description: "My QA background means I teach students to read errors, write tests, and think critically about code quality.",
    tag: "QA mindset"
  },
  {
    icon: <Briefcase className="w-6 h-6 text-emerald-500" />,
    title: "Career-Ready Focus",
    description: "From code reviews to HR interview prep — I make sure students are ready for the job, not just the exam.",
    tag: "Job-market ready"
  }
]

export function Approach() {
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
            What I bring to the <span className="text-[var(--brand)]">classroom</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            How I ensure every student doesn't just learn — they grow, build, and succeed.
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
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed relative z-10">
                  {step.description}
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
            <motion.div key={feature.title} variants={fadeInUp} className="h-full">
              <GlassCard hover className="p-6 h-full flex flex-col justify-start relative">
                <div className="flex justify-between items-start mb-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] flex items-center justify-center shrink-0 shadow-sm border border-[var(--surface-border)]">
                    {feature.icon}
                  </div>
                  <span className="px-3 py-1 text-[10px] font-mono rounded-full bg-[var(--brand)]/10 text-[var(--brand)] border border-[var(--brand)]/20 uppercase tracking-wider text-right mt-1">
                    {feature.tag}
                  </span>
                </div>
                <h4 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
                  {feature.title}
                </h4>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {feature.description}
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
              Teaching Gen-Z the way they <span className="text-[var(--accent)]">actually learn</span>
            </h3>
            <p className="text-[var(--text-secondary)] mb-10 leading-relaxed max-w-3xl mx-auto">
              I constantly evolve my teaching style to meet students where they are. That means mixing structured learning with live challenges, friendly competition, and hands-on activities that make the classroom feel less like a lecture and more like a lab.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              {activities.map((activity) => (
                <div key={activity.text} className="flex items-center gap-3 bg-[var(--bg-primary)] px-5 py-3 rounded-full border border-[var(--surface-border)] shadow-sm">
                  <div className="w-6 h-6 shrink-0 flex items-center justify-center">
                    {activity.icon}
                  </div>
                  <span className="text-[var(--text-primary)] font-medium text-sm">{activity.text}</span>
                </div>
              ))}
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  )
}
