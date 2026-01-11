"use client";

import { motion } from "framer-motion";
import { SectionShell, SectionTitle, Timeline } from "@/components/ui";
import { experienceTimeline, experienceHighlights } from "@/data";

/**
 * ExperienceSection - Career timeline with enhanced animations
 * 
 * COLOR PALETTE:
 * - Background: #213448 gradient
 * - Timeline line: #94B4C1 → #547792 gradient
 * - Cards: Glassmorphism with #EAE0CF text
 * - Highlights: #94B4C1 accents
 * 
 * ANIMATIONS:
 * | Element     | Animation        | Trigger        | Why                    |
 * |-------------|------------------|----------------|------------------------|
 * | Line        | Draw (scaleY)    | Scroll         | Career progression     |
 * | Dots        | Pulse + scale    | Viewport       | Milestone markers      |
 * | Cards       | Slide in L/R     | Viewport       | Alternating reveal     |
 * | Highlights  | Fade up          | Viewport       | Supporting content     |
 * | Tags        | Staggered pop    | Viewport       | Skill emphasis         |
 */
const ExperienceSection = () => {
    const exp = experienceHighlights;

    const cardVariants = {
        hidden: { opacity: 0, y: 40, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <SectionShell
            id="experience"
            className="min-h-screen flex items-center rounded-none border-x-0 border-t-0 border-b border-[#EAE0CF]/5 bg-gradient-to-br from-[#213448] via-[#213448]/95 to-[#547792]/15 p-10 backdrop-blur-2xl lg:p-16"
        >
            <div className="mx-auto w-full max-w-6xl space-y-16">
                <SectionTitle
                    eyebrow="Experience"
                    title="Career Journey"
                    description="A timeline of growth, learning, and impactful contributions."
                />

                {/* Timeline Component */}
                <Timeline items={experienceTimeline} />

                {/* Additional Highlights Cards */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {/* Highlights Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="rounded-3xl border border-[#94B4C1]/20 bg-gradient-to-br from-[#547792]/30 to-[#94B4C1]/10 p-6 backdrop-blur-sm transition-all hover:border-[#94B4C1]/40 hover:shadow-[0_20px_60px_rgba(148,180,193,0.15)]"
                    >
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-sm uppercase tracking-[0.3em] text-[#94B4C1]"
                        >
                            Highlights
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 text-lg text-[#EAE0CF]"
                        >
                            {exp.summary}
                        </motion.p>
                    </motion.div>

                    {/* Stack Focus Card */}
                    <motion.div
                        variants={cardVariants}
                        whileHover={{ y: -5, scale: 1.02 }}
                        className="rounded-3xl border border-[#EAE0CF]/10 bg-[#213448]/60 p-6 text-sm backdrop-blur-sm transition-all hover:border-[#94B4C1]/30"
                    >
                        <p className="text-xs uppercase tracking-[0.3em] text-[#94B4C1]">
                            Stack in Focus
                        </p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ delay: 0.3 }}
                            className="mt-4 flex flex-wrap gap-3"
                        >
                            {exp.stack.map((item, idx) => (
                                <motion.span
                                    key={item}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.4 + idx * 0.08 }}
                                    whileHover={{
                                        scale: 1.1,
                                        backgroundColor: "rgba(148,180,193,0.2)",
                                        borderColor: "rgba(148,180,193,0.5)"
                                    }}
                                    className="rounded-full border border-[#547792]/30 px-4 py-1.5 text-xs uppercase tracking-widest text-[#EAE0CF]/80 transition-all cursor-default"
                                >
                                    {item}
                                </motion.span>
                            ))}
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </SectionShell>
    );
};

export default ExperienceSection;
