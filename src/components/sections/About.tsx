import { motion } from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import { Quote } from "lucide-react";
import { useTranslation } from "react-i18next";

export function About() {
  const { t } = useTranslation();

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
            {t('about.title')}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-[var(--text-secondary)] space-y-6 text-lg">
              <p>
                {t('about.p1')}
              </p>
              <p>
                {t('about.p2')}
              </p>

              {/* Quote Card */}
              <div className="mt-8 p-6 bg-[var(--accent)]/10 border border-[var(--accent)]/20 rounded-2xl relative overflow-hidden shadow-inner">
                <Quote className="absolute top-6 left-6 w-10 h-10 text-[var(--accent)]/20" />
                <p className="text-[var(--text-primary)] font-medium italic text-lg leading-relaxed relative z-10 ps-10">
                  "{t('about.quote')}"
                </p>
              </div>

            </div>
            <div className="relative lg:ml-auto w-full max-w-lg mx-auto">
              <div className="rounded-2xl overflow-hidden bg-gradient-to-tr from-brand-500/20 to-accent-500/20 p-2 backdrop-blur-sm border border-[var(--surface-border)] shadow-[0_8px_32px_rgba(0,0,0,0.08)]">
                <div className="w-full rounded-xl overflow-hidden relative group">
                  <img 
                    src="/dot jo1.jpeg" 
                    alt={t('about.imageAlt')} 
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
