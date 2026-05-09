import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../lib/animations'
import { GlassCard } from '../ui/GlassCard'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: "Ahmed Rayan",
    role: "Full-Stack Student",
    content: "Balqees has a unique way of breaking down complex React concepts. Her focus on 'why' before 'how' completely changed my approach to coding.",
    image: "https://i.pravatar.cc/150?u=ahmed"
  },
  {
    name: "Sara Al-Otaibi",
    role: "MERN Stack Bootcamp Graduate",
    content: "The best part of learning with Balqees was the real-world projects. She doesn't just teach code; she teaches how to think like an engineer.",
    image: "https://i.pravatar.cc/150?u=sara"
  },
  {
    name: "Omar Khaled",
    role: "Junior Web Developer",
    content: "Her QA background is a game-changer. I learned how to debug and test my applications properly, which helped me land my first job in record time.",
    image: "https://i.pravatar.cc/150?u=omar"
  }
]

export function Testimonials() {
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
            Student <span className="text-[var(--accent)]">Success Stories</span>
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            What my students say about their learning journey and career growth.
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
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
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
