"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.2, 0.8, 0.2, 1] },
  }),
};

const SectionTitle = ({ eyebrow, title, description, align = "left" }) => {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : align === "right"
        ? "items-end text-right"
        : "items-start text-left";

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      {eyebrow && (
        <motion.span
          variants={textVariants}
          className="text-sm font-semibold uppercase tracking-[0.3em] text-emerald-300"
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
          variants={textVariants}
          custom={2}
          className="text-3xl font-semibold text-white md:text-4xl"
        >
          {title}
        </motion.h2>
      {description && (
        <motion.p
          variants={textVariants}
          custom={3}
          className="max-w-2xl text-base text-slate-300 md:text-lg"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionTitle;

