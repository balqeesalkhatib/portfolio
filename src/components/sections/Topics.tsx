import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { GlassCard } from '../ui/GlassCard'
import { 
  FileCode2, PenTool, Palette, Box, AppWindow, 
  Server, Database, Network, ShieldCheck, Radio, 
  GitBranch, Layers, Flame, Rocket, Bot 
} from 'lucide-react'

const topics = [
  {
    title: "HTML",
    description: "Building semantic, accessible, and SEO-friendly web page structures.",
    icon: <FileCode2 className="w-6 h-6 text-orange-500" />
  },
  {
    title: "UI/UX Fundamentals",
    description: "Designing intuitive user experiences and visually appealing interfaces.",
    icon: <PenTool className="w-6 h-6 text-pink-500" />
  },
  {
    title: "CSS & SASS",
    description: "Styling web applications with modern CSS layouts and SASS preprocessors.",
    icon: <Palette className="w-6 h-6 text-blue-500" />
  },
  {
    title: "Bootstrap",
    description: "Rapidly prototyping responsive layouts using grid systems and components.",
    icon: <Box className="w-6 h-6 text-purple-500" />
  },
  {
    title: "React & Next.js",
    description: "Creating dynamic, high-performance single-page and server-rendered applications.",
    icon: <AppWindow className="w-6 h-6 text-cyan-400" />
  },
  {
    title: "Node.js & Express",
    description: "Building scalable backend architectures and robust server logic.",
    icon: <Server className="w-6 h-6 text-green-500" />
  },
  {
    title: "MongoDB & PostgreSQL",
    description: "Designing relational and NoSQL databases for complex data storage.",
    icon: <Database className="w-6 h-6 text-emerald-600" />
  },
  {
    title: "REST APIs",
    description: "Structuring and building standardized APIs for front-to-back communication.",
    icon: <Network className="w-6 h-6 text-[var(--accent)]" />
  },
  {
    title: "Authentication & Authorization",
    description: "Securing applications using JWT, OAuth, and role-based access controls.",
    icon: <ShieldCheck className="w-6 h-6 text-yellow-500" />
  },
  {
    title: "Socket.IO",
    description: "Implementing real-time bidirectional event-based communication.",
    icon: <Radio className="w-6 h-6 text-red-500" />
  },
  {
    title: "Git & Agile",
    description: "Collaborating efficiently using version control and agile methodologies.",
    icon: <GitBranch className="w-6 h-6 text-orange-600" />
  },
  {
    title: "Redux & State Management",
    description: "Managing complex frontend application states predictably.",
    icon: <Layers className="w-6 h-6 text-violet-500" />
  },
  {
    title: "Firebase",
    description: "Integrating rapid backend-as-a-service features like Auth and Firestore.",
    icon: <Flame className="w-6 h-6 text-yellow-600" />
  },
  {
    title: "Deployment & Vercel",
    description: "Taking applications from local environments to live production servers.",
    icon: <Rocket className="w-6 h-6 text-zinc-400" />
  },
  {
    title: "AI-assisted Development",
    description: "Leveraging AI tools to accelerate coding workflows and problem-solving.",
    icon: <Bot className="w-6 h-6 text-[var(--brand)]" />
  }
]

export function Topics() {
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
            Topics I <span className="text-[var(--brand)]">Teach</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            From the basics of web structure to advanced deployment, these are the core technologies and concepts I cover.
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
            <motion.div key={topic.title} variants={fadeInUp} className="h-full">
              <GlassCard hover className="h-full p-6 flex flex-col items-start bg-[var(--surface)]/60">
                <div className="w-10 h-10 rounded-lg bg-[var(--bg-primary)] flex items-center justify-center shadow-sm border border-[var(--surface-border)] mb-4 shrink-0">
                  {topic.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--text-primary)] mb-2">
                  {topic.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed">
                  {topic.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
