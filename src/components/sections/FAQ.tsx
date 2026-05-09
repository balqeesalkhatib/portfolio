import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { fadeInUp } from '../../lib/animations'
import { ChevronDown } from 'lucide-react'
import { GlassCard } from '../ui/GlassCard'

const faqs = [
  {
    question: "What technologies do you teach?",
    answer: "I teach full-stack web development with a strong focus on the MERN stack, including React, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, Firebase, and Socket.IO. I also cover Git, REST APIs, authentication, deployment, and modern frontend styling tools."
  },
  {
    question: "What is your teaching methodology?",
    answer: "I follow a project-based learning approach. We start with a brief theoretical foundation and immediately move into live coding and building real-world projects."
  },
  {
    question: "How long does it take to become job-ready?",
    answer: "It depends on your dedication. With my intensive roadmap, many students are ready for junior roles within 4 to 6 months of focused learning."
  },
  {
    question: "Is it okay to use AI tools while learning programming?",
    answer: "AI tools can be helpful, but I encourage students to first build a strong understanding of programming fundamentals and problem-solving skills without depending heavily on AI. Once the basics are clear, AI can become a useful assistant for improving productivity, exploring ideas, and accelerating development workflows."
  },
  {
    question: "What is the most important thing you teach students?",
    answer: "I always encourage students to practice consistently, build projects regularly, and never be afraid of errors. Making mistakes and debugging are essential parts of the learning process and one of the best ways to grow as a developer."
  }
]

function FAQItem({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) {
  return (
    <div className="mb-4">
      <GlassCard 
        hover={false} 
        className={`overflow-hidden transition-all duration-300 ${isOpen ? 'border-[var(--brand)]/40 shadow-lg' : ''}`}
      >
        <button
          onClick={onClick}
          className="w-full p-6 flex items-center justify-between text-left focus:outline-none"
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

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

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
            Common <span className="text-[var(--brand)]">Questions</span>
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
