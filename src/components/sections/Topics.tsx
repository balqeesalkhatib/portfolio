import { useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  AnimatePresence,
} from "framer-motion";
import { fadeInUp } from "../../lib/animations";
import {
  FileCode2,
  PenTool,
  Palette,
  Box,
  AppWindow,
  Server,
  Database,
  Network,
  ShieldCheck,
  Radio,
  GitBranch,
  Layers,
  Flame,
  Rocket,
  Bot,
  Zap,
  Braces,
  Wind,
  Component,
  Send,
  SearchCheck,
  ClipboardCheck,
  Table,
  Share2,
} from "lucide-react";

const CARD_WIDTH = 180;
const CARD_GAP = 24;
const BEND_STRENGTH = 6;

const topics = [
  { key: "HTML", icon: FileCode2, color: "#f97316" },
  { key: "CSS & SASS", icon: Palette, color: "#3b82f6" },
  { key: "ECMAScript (ES6+)", icon: Braces, color: "#eab308" },
  { key: "Bootstrap", icon: Box, color: "#a855f7" },
  { key: "Tailwind CSS", icon: Wind, color: "#38bdf8" },
  { key: "UI/UX Fundamentals", icon: PenTool, color: "#ec4899" },
  { key: "Chakra UI", icon: Component, color: "#2dd4bf" },
  { key: "React", icon: AppWindow, color: "#22d3ee" },
  { key: "Next.js", icon: Layers, color: "#e2e8f0" },
  { key: "Redux", icon: Share2, color: "#8b5cf6" },
  { key: "Node.js", icon: Server, color: "#22c55e" },
  { key: "Express", icon: Server, color: "#6ee7b7" },
  { key: "MongoDB", icon: Database, color: "#10b981" },
  { key: "PostgreSQL", icon: Database, color: "#60a5fa" },
  { key: "REST APIs", icon: Network, color: "#f59e0b" },
  {
    key: "Authentication & Authorization",
    icon: ShieldCheck,
    color: "#facc15",
  },
  { key: "Socket.IO", icon: Radio, color: "#ef4444" },
  { key: "Firebase", icon: Flame, color: "#fb923c" },
  { key: "Git & Agile", icon: GitBranch, color: "#ea580c" },
  { key: "Postman", icon: Send, color: "#f97316" },
  { key: "Cypress", icon: SearchCheck, color: "#34d399" },
  { key: "Manual Testing", icon: ClipboardCheck, color: "#60a5fa" },
  { key: "Database Normalization", icon: Table, color: "#818cf8" },
  { key: "Deployment", icon: Rocket, color: "#a1a1aa" },
  { key: "AI-assisted Development", icon: Bot, color: "#a78bfa" },
  { key: "Vibe Coding", icon: Zap, color: "#facc15" },
];

function TopicCard({
  topic,
  index,
  scrollX,
  containerWidth,
}: {
  topic: (typeof topics)[number];
  index: number;
  scrollX: any;
  containerWidth: number;
}) {
  const { t } = useTranslation();
  const Icon = topic.icon;
  const [hovered, setHovered] = useState(false);

  // Calculate card's x position in the scroll track
  const cardCenterOffset = index * (CARD_WIDTH + CARD_GAP) + CARD_WIDTH / 2;

  // Derive rotateY from how far this card is from the viewport center
  const rotateY = useTransform(scrollX, (xVal: number) => {
    const viewportCenter = containerWidth / 2;
    const cardCenter = cardCenterOffset + xVal;
    const dist = cardCenter - viewportCenter;
    const normalised = dist / (containerWidth / 2);
    return hovered ? 0 : normalised * -BEND_STRENGTH * 5;
  });

  const description = t(`topics.items.${topic.key}`);

  return (
    <motion.div
      style={{
        width: CARD_WIDTH,
        flexShrink: 0,
        rotateY,
        perspective: 1000,
        zIndex: hovered ? 40 : 1,
      }}
      animate={{ scale: hovered ? 1.12 : 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      onClick={() => setHovered(!hovered)}
      className="cursor-pointer select-none relative touch-manipulation"
    >
      {/* Card face — height animates with layout */}
      <motion.div
        layout
        className="relative rounded-2xl border flex flex-col items-center p-5 gap-3 text-center overflow-hidden"
        style={{
          background: `radial-gradient(ellipse at 50% 0%, ${topic.color}22 0%, transparent 70%), var(--surface)`,
          borderColor: hovered ? `${topic.color}88` : `${topic.color}33`,
          boxShadow: hovered
            ? `0 0 40px ${topic.color}30, inset 0 0 30px ${topic.color}15`
            : "none",
          minHeight: 220,
        }}
        transition={{ layout: { type: "spring", stiffness: 300, damping: 28 } }}
      >
        {/* Icon container */}
        <motion.div
          animate={{
            width: hovered ? 48 : 56,
            height: hovered ? 48 : 56,
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="rounded-xl flex items-center justify-center flex-shrink-0 mt-1"
          style={{
            background: `${topic.color}22`,
            border: `1px solid ${topic.color}55`,
          }}
        >
          <Icon
            size={hovered ? 22 : 26}
            strokeWidth={1.5}
            style={{ color: topic.color, transition: "all 0.2s" }}
          />
        </motion.div>

        {/* Topic name */}
        <h3
          className="font-display font-bold leading-snug transition-all duration-200"
          style={{
            color: hovered ? topic.color : "var(--text-primary)",
            fontSize: hovered ? "0.9rem" : "0.8rem",
          }}
        >
          {topic.key}
        </h3>

        {/* Description — slides in on hover */}
        <AnimatePresence>
          {hovered && (
            <motion.p
              key="desc"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
              className="text-[var(--text-secondary)] text-xs leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Bottom label — hidden when hovered since title is now colored */}
      <AnimatePresence>
        {!hovered && (
          <motion.p
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="mt-2 text-center text-xs truncate"
            style={{ color: topic.color, opacity: 0.7 }}
          >
            {topic.key}
          </motion.p>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function Topics() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "ar";

  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  // Use a raw motion value — NO spring on x during drag for instant response
  const x = useMotionValue(0);

  const totalTrackWidth =
    topics.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP + 120;

  useEffect(() => {
    const update = () => {
      if (containerRef.current)
        setContainerWidth(containerRef.current.offsetWidth);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxDrag = Math.max(0, totalTrackWidth - containerWidth);

  // Reset scroll position when language changes
  useEffect(() => {
    x.set(0);
  }, [isRTL]);

  const clamp = (val: number) => Math.min(0, Math.max(-maxDrag, val));

  // Ref to hold the current animation controller (auto-scroll or spring)
  const activeAnimRef = useRef<any>(null);

  const stopActiveAnim = () => {
    if (activeAnimRef.current) {
      activeAnimRef.current.stop();
      activeAnimRef.current = null;
    }
  };

  const startAutoScroll = () => {
    if (maxDrag <= 0) return;
    stopActiveAnim();

    const current = x.get();
    const remaining = Math.abs(current / -maxDrag - 1);

    activeAnimRef.current = animate(x, -maxDrag, {
      duration: Math.max(10, 50 * remaining),
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear",
    });
  };

  // Auto-drift on mount
  useEffect(() => {
    startAutoScroll();
    return () => stopActiveAnim();
  }, [maxDrag, isRTL]);

  const handleDragStart = () => {
    stopActiveAnim();
  };

  const handleDrag = (_: any, info: any) => {
    const delta = isRTL ? -info.delta.x : info.delta.x;
    x.set(clamp(x.get() + delta));
  };

  const handleDragEnd = (_: any, info: any) => {
    stopActiveAnim();

    const velocity = isRTL ? -info.velocity.x : info.velocity.x;
    const projected = clamp(x.get() + velocity * 0.3);

    activeAnimRef.current = animate(x, projected, {
      type: "spring",
      stiffness: 120,
      damping: 25,
      mass: 1,
      onComplete: () => {
        activeAnimRef.current = null;
        startAutoScroll();
      },
    });
  };

  return (
    <section
      id="topics"
      className="py-20 md:py-32 bg-[var(--bg-secondary)] overflow-hidden relative"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,_rgba(99,102,241,0.08),_transparent)] pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={fadeInUp}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            {t("topics.title")}
          </h2>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl mx-auto">
            {t("topics.subtitle")}
          </p>
        </motion.div>
      </div>

      {/* Scroll track — always LTR so layout is consistent */}
      <div
        ref={containerRef}
        className="relative w-full overflow-hidden"
        dir="ltr"
      >
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-40 z-20 bg-gradient-to-r from-[var(--bg-secondary)] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-40 z-20 bg-gradient-to-l from-[var(--bg-secondary)] to-transparent" />

        <motion.div
          drag="x"
          onDragStart={handleDragStart}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0}
          dragMomentum={false}
          className="cursor-grab active:cursor-grabbing"
        >
          <motion.div
            style={{
              x,
              display: "flex",
              alignItems: "flex-end",
              gap: CARD_GAP,
              paddingLeft: 60,
              paddingRight: 60,
              paddingBottom: 24,
              paddingTop: 8,
            }}
          >
            {topics.map((topic, index) => (
              <TopicCard
                key={topic.key}
                topic={topic}
                index={index}
                scrollX={x}
                containerWidth={containerWidth}
              />
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Drag hint — always LTR so arrows render correctly */}
      <p
        dir="ltr"
        className="text-center text-[var(--text-muted)] text-xs font-mono mt-2 tracking-widest uppercase select-none"
      >
        {isRTL ? "← اسحب للاستكشاف →" : "← drag to explore →"}
      </p>
    </section>
  );
}
