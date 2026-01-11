"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/**
 * Timeline - Scroll-driven animated timeline component
 * 
 * COLOR PALETTE:
 * - Line: #94B4C1 → #547792 gradient
 * - Dots: Gradient with #94B4C1 glow
 * - Cards: Glassmorphism with #213448 background
 * - Text: #EAE0CF primary, #94B4C1 accents
 * 
 * HOW SCROLL-BASED ANIMATION WORKS:
 * 1. useScroll() tracks scroll progress relative to the container
 * 2. scrollYProgress gives a 0-1 value as user scrolls through the section
 * 3. useTransform() maps this 0-1 value to CSS properties (scaleY for the line)
 * 4. The line "draws" itself as user scrolls, creating a sense of progression
 * 
 * WHY THIS FITS THE EXPERIENCE SECTION:
 * - Career progression is inherently sequential → timeline metaphor
 * - Scroll-driven animation creates exploration feeling
 * - Alternating left/right cards break monotony
 * - The growing line symbolizes career growth
 */

const cardVariants = {
    hidden: (isLeft) => ({
        opacity: 0,
        x: isLeft ? -80 : 80,
        rotate: isLeft ? -3 : 3,
    }),
    visible: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
        },
    },
};

const dotVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 300,
            damping: 20,
        },
    },
};

/**
 * @param {Array} items - Array of timeline items with { year, title, subtitle, description, highlights }
 */
const Timeline = ({ items }) => {
    const containerRef = useRef(null);

    // Track scroll progress through the timeline container
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    // Transform scroll progress (0-1) to line scale (0-1)
    const lineScaleY = useTransform(scrollYProgress, [0, 0.8], [0, 1]);

    return (
        <div ref={containerRef} className="relative">
            {/* Animated vertical line */}
            <div className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-[#547792]/20">
                <motion.div
                    className="timeline-line h-full w-full origin-top"
                    style={{ scaleY: lineScaleY }}
                />
            </div>

            {/* Timeline items */}
            <div className="space-y-24">
                {items.map((item, index) => {
                    const isLeft = index % 2 === 0;

                    return (
                        <div
                            key={item.title + index}
                            className="relative grid grid-cols-1 gap-8 md:grid-cols-[1fr_auto_1fr]"
                        >
                            {/* Left content (or empty on odd items) */}
                            <div className={`${isLeft ? "md:text-right" : "md:order-3"}`}>
                                {isLeft && (
                                    <motion.div
                                        custom={isLeft}
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="rounded-3xl border border-[#EAE0CF]/10 bg-[#213448]/80 p-6 backdrop-blur-sm md:ml-auto md:max-w-md transition-all hover:border-[#94B4C1]/30 hover:shadow-[0_20px_60px_rgba(148,180,193,0.1)]"
                                    >
                                        <TimelineCard item={item} />
                                    </motion.div>
                                )}
                            </div>

                            {/* Center dot */}
                            <div className="relative flex justify-center">
                                <motion.div
                                    variants={dotVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.5 }}
                                    whileHover={{ scale: 1.3 }}
                                    className="timeline-dot z-10 h-5 w-5 rounded-full"
                                />
                            </div>

                            {/* Right content (or empty on even items) */}
                            <div className={`${!isLeft ? "md:text-left" : "md:order-1"}`}>
                                {!isLeft && (
                                    <motion.div
                                        custom={isLeft}
                                        variants={cardVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true, amount: 0.3 }}
                                        whileHover={{ y: -5, scale: 1.02 }}
                                        className="rounded-3xl border border-[#EAE0CF]/10 bg-[#213448]/80 p-6 backdrop-blur-sm md:mr-auto md:max-w-md transition-all hover:border-[#94B4C1]/30 hover:shadow-[0_20px_60px_rgba(148,180,193,0.1)]"
                                    >
                                        <TimelineCard item={item} />
                                    </motion.div>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

/**
 * TimelineCard - Individual timeline item content
 */
const TimelineCard = ({ item }) => (
    <div className="space-y-4">
        <div className="space-y-1">
            <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-sm font-semibold uppercase tracking-[0.3em] text-[#94B4C1]"
            >
                {item.year}
            </motion.span>
            <h3 className="text-xl font-semibold text-[#EAE0CF]">{item.title}</h3>
            {item.subtitle && (
                <p className="text-sm text-[#EAE0CF]/50">{item.subtitle}</p>
            )}
        </div>

        {item.description && (
            <p className="text-sm text-[#EAE0CF]/70">{item.description}</p>
        )}

        {item.highlights && item.highlights.length > 0 && (
            <ul className="space-y-2 text-sm text-[#EAE0CF]/80">
                {item.highlights.map((highlight, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * i }}
                        className="flex items-start gap-2 text-left"
                    >
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#94B4C1]" />
                        <span>{highlight}</span>
                    </motion.li>
                ))}
            </ul>
        )}

        {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                    <motion.span
                        key={tag}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.1 * idx }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(148,180,193,0.2)" }}
                        className="rounded-full border border-[#547792]/30 px-3 py-1 text-xs uppercase tracking-wide text-[#94B4C1] transition-all"
                    >
                        {tag}
                    </motion.span>
                ))}
            </div>
        )}
    </div>
);

export default Timeline;
