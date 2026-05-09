import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "../../lib/animations";
import { GlassCard } from "../ui/GlassCard";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    id: 1,
    role: "Technical Instructor",
    company: "Digital Opportunity Trust (dot.Jordan).",
    period: "Jan 2026 - Present",
    description:
      "Technical Instructor at Digital Opportunity Trust (DOT Jordan), mentoring students from foundational programming concepts to building full-stack MERN applications. Responsible for delivering hands-on technical training, guiding students through real-world projects, and conducting interactive educational activities focused on problem-solving, teamwork, and practical development skills.",
    techTitle: "TOOLS & TECHNOLOGIES",
    technologies: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Firebase",
      "Socket.IO",
      "Sass",
      "Bootstrap",
      "Git & GitHub",
      "Mentoring"
    ],
  },
  {
    id: 2,
    role: "Operation Assistant",
    company: "Meraki Academy (Full time)",
    period: "Jun 2025 - Jan 2026",
    description:
      "Responsible for organizing and managing schedules, preparing all academic and logistical requirements for upcoming student cohorts, delivering instructional sessions and lectures, and conducting student interviews and assessments to support placement and readiness.",
    techTitle: "TOOLS & TECHNOLOGIES",
    technologies: [
      "Notion",
      "Trello",
      "Microsoft Excel",
      "Google Workspace",
      "Slack",
      "Curriculum Design"
    ],
  },
  {
    id: 3,
    role: "Technical Instructor / Teacher Assistant",
    company: "Meraki Academy (Part time)",
    period: "Aug 2024 - Jun 2025",
    description:
      "Supported the delivery of engaging coding lessons and provided personalized assistance to students by troubleshooting code issues and clarifying programming concepts. Graded assignments with detailed, constructive feedback and led HR interview preparation sessions to help students succeed in the job market.",
    techTitle: "TOOLS & TECHNOLOGIES",
    technologies: [
      "HTML & CSS",
      "JavaScript",
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "PostgreSQL",
    ],
  },
  {
    id: 4,
    role: "Quality Assurance Engineer",
    company: "Jo-Students Academy",
    period: "Jul 2024 - Mar 2025",
    description:
      "Created and executed test cases and scenarios based on product requirements for manual and automated testing. Utilized Cypress for automated test scripts for web applications, conducted API testing using Postman and integrated API tests into CI/CD pipelines. Reported and tracked bugs using Trello and Excel, ensuring timely resolutions and improved product quality.",
    techTitle: "TOOLS & TECHNOLOGIES",
    technologies: [
      "Cypress",
      "Postman",
      "API Testing",
      "CI/CD",
      "Trello",
      "Excel",
      "Manual Testing",
      "Automated Testing",
    ],
  },
  {
    id: 5,
    role: "Teacher Assistant",
    company: "Jordan University of Science and Technology JUST",
    period: "Oct 2020 - Jan 2021",
    description:
      "Teacher assistant at electronic lab at Jordan University of Science and Technology.",
    techTitle: "TOOLS & TECHNOLOGIES",
    technologies: [
      "MATLAB",
      "latex",
      "excel",
    
    ],
  },
];

export function Experience() {
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
            Work <span className="text-[var(--accent)]">Experience</span>
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
                      {exp.period}
                    </span>
                    <h3 className="font-display text-xl font-bold mb-1 text-[var(--text-primary)]">
                      {exp.role}
                    </h3>
                    <h4 className="text-[var(--accent)] font-medium mb-4">
                      {exp.company}
                    </h4>
                    <p className="text-[var(--text-secondary)] text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>

                    {exp.technologies && (
                      <div className="mt-6 pt-6 border-t border-[var(--surface-border)] flex-grow flex flex-col justify-end">
                        {exp.techTitle && (
                          <h5 className="text-xs font-mono tracking-widest text-[var(--text-muted)] uppercase mb-4 font-semibold">
                            {exp.techTitle}
                          </h5>
                        )}
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
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
