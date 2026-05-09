import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import { Quote } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-8">
            About <span className="text-[var(--accent)]">Me</span>
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-[var(--text-secondary)] space-y-6 text-lg">
              <p>
                I'm a Technical Instructor & Trainer specialized in the MERN
                stack, passionate about turning complex concepts into clear,
                hands-on learning experiences that actually stick. My path
                started in Electrical Engineering at JUST — which gave me a
                systems-thinking mindset I still use every day in the classroom.
                From there, I moved into QA Engineering, where I learned that
                understanding how things break is just as important as knowing
                how to build them.
              </p>
              <p>
                That combination led me naturally into teaching. Today I deliver
                full-stack web development training, guiding students from their
                first HTML tag all the way to deploying production-ready apps.
              </p>

              {/* Quote Card */}
              <div className="mt-8 p-6 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-2xl relative overflow-hidden shadow-inner">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-[var(--accent)]/20" />
                <p className="text-[var(--text-primary)] font-medium italic text-lg leading-relaxed relative z-10 pl-10">
                  "I don't just teach syntax. I teach how to think like an engineer — how to break a problem down, read an error without panic, and build something you're genuinely proud of."
                </p>
              </div>

            </div>
            <div className="relative lg:ml-auto w-full max-w-lg mx-auto">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-tr from-brand-500/20 to-accent-500/20 p-2 backdrop-blur-sm border border-[var(--surface-border)] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                <div className="w-full rounded-xl overflow-hidden relative group">
                  <img 
                    src="/dot jo1.jpeg" 
                    alt="Balqees mentoring students" 
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Optional dark gradient overlay on hover for a premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
