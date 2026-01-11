"use client";

import { motion } from "framer-motion";

/**
 * Text reveal animation variants
 * 
 * ANIMATION: Staggered fade-up for eyebrow, title, description
 * TRIGGER: When 40% of component is visible (whileInView)
 * WHY: Creates reading hierarchy and draws attention progressively
 * 
 * COLOR PALETTE:
 * - Eyebrow: #94B4C1 (Soft Teal)
 * - Title: #EAE0CF (Warm Cream)
 * - Description: #EAE0CF/70
 */
const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 1) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1]
        },
    }),
};

/**
 * SectionTitle - Animated heading group with eyebrow, title, and description
 * 
 * @param {string} eyebrow - Small uppercase label above title
 * @param {string} title - Main section heading
 * @param {string} description - Supporting text below title
 * @param {string} align - Text alignment: 'left' | 'center' | 'right'
 */
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
            className={`flex flex-col gap-4 ${alignment}`}
        >
            {eyebrow && (
                <motion.span
                    variants={textVariants}
                    custom={0}
                    className="text-sm font-semibold uppercase tracking-[0.3em] text-[#94B4C1]"
                >
                    {eyebrow}
                </motion.span>
            )}
            <motion.h2
                variants={textVariants}
                custom={1}
                className="text-3xl font-semibold text-[#EAE0CF] md:text-4xl lg:text-5xl"
            >
                {title}
            </motion.h2>
            {description && (
                <motion.p
                    variants={textVariants}
                    custom={2}
                    className="max-w-2xl text-base text-[#EAE0CF]/60 md:text-lg"
                >
                    {description}
                </motion.p>
            )}
        </motion.div>
    );
};

export default SectionTitle;
