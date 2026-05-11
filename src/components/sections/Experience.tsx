import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { GlassCard } from "../ui/GlassCard";
import { Briefcase } from "lucide-react";

import { useTranslation } from "react-i18next";

const experiences = [
  { id: 1, key: "1", tech: ["HTML & CSS", "JavaScript", "React", "Next.js", "Node.js", "Express", "MongoDB", "Firebase", "Socket.IO", "Sass", "Bootstrap", "Git & GitHub", "Mentoring"] },
  { id: 2, key: "2", tech: ["Notion", "Trello", "Microsoft Excel", "Google Workspace", "Slack", "Curriculum Design"] },
  { id: 3, key: "3", tech: ["HTML & CSS", "JavaScript", "React", "Node.js", "Express", "MongoDB", "PostgreSQL"] },
  { id: 4, key: "4", tech: ["Cypress", "Postman", "API Testing", "CI/CD", "Trello", "Excel", "Manual Testing", "Automated Testing"] },
  { id: 5, key: "5", tech: ["MATLAB", "latex", "excel"] },
];

export function Experience() {
  const { t } = useTranslation()

  return (
    <section id="experience" className="py-20 md:py-32 bg-[var(--bg-primary)]">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t('experience.title')}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[var(--brand)] via-[var(--accent)] to-transparent -translate-x-1/2" />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-[var(--bg-primary)] border-4 border-[var(--brand)] -translate-x-1/2 flex items-center justify-center z-10">
                  <Briefcase size={12} className="text-[var(--brand)]" />
                </div>

                <div
                  className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                >
                  <GlassCard
                    hover={false}
                    className="p-6 md:p-8 relative h-full flex flex-col"
                  >
                    {/* Arrow pointer */}
                    <div
                      className={`hidden md:block absolute top-6 w-4 h-4 bg-[var(--surface)] border-t border-l border-[var(--surface-border)] rotate-[-45deg] ${index % 2 === 0 ? "-left-2" : "-right-2 rotate-[135deg]"}`}
                    />

                    <span className="inline-block py-1 px-3 rounded-full bg-[var(--brand)]/10 text-[var(--brand)] text-xs font-mono mb-4 w-fit">
                      {t(`experience.items.${exp.key}.period`)}
                    </span>
                    <h3 className="font-display text-xl font-bold mb-1 text-[var(--text-primary)]">
                      {t(`experience.items.${exp.key}.role`)}
                    </h3>
                    <h4 className="text-[var(--accent)] font-medium mb-4">
                      {t(`experience.items.${exp.key}.company`)}
                    </h4>
                    <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                      {t(`experience.items.${exp.key}.description`)}
                    </p>

                    {exp.tech && (
                      <div className="mt-6 pt-6 border-t border-[var(--surface-border)] flex-grow flex flex-col justify-end">
                        <h5 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase mb-4 font-semibold">
                          {t('experience.toolsTitle')}
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.tech.map((tech) => (
                            <span
                              key={tech}
                              className={`px-3 py-1.5 text-xs font-mono rounded-full border ${
                                tech.includes("QA") || tech.includes("Testing")
                                  ? "bg-purple-500/10 text-purple-400 border-purple-500/20"
                                  : "bg-[var(--brand)]/10 text-[var(--brand)] border-[var(--brand)]/20"
                              }`}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </GlassCard>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
