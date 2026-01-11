"use client";

import { motion } from "framer-motion";
import { SectionShell, SectionTitle } from "@/components/ui";
import { skillGroups } from "@/data";

/**
 * SkillsSection - "Things I'm Good At" with enhanced animations
 * 
 * COLOR PALETTE:
 * - Background: #213448 with subtle gradients
 * - Cards: #547792 accent glow
 * - Text: #EAE0CF primary, #94B4C1 secondary
 * 
 * ANIMATIONS:
 * | Element       | Animation       | Timing            | Why                    |
 * |---------------|-----------------|-------------------|------------------------|
 * | Section       | Fade up         | Viewport entry    | Context before content |
 * | Title         | Staggered text  | Viewport entry    | Progressive reveal     |
 * | Cards         | Slide up + fade | Staggered 0.08s   | Wave effect            |
 * | Icons         | Rotate + scale  | Hover             | Playful interaction    |
 * | Tags          | Fade in         | After card        | Last to appear         |
 */
const SkillsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.2,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 50, scale: 0.95 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <SectionShell
            id="skills"
            className="min-h-screen flex items-center rounded-none border-x-0 border-t-0 border-b border-[#EAE0CF]/5 bg-gradient-to-br from-[#213448] via-[#213448]/95 to-[#547792]/10 p-10 backdrop-blur-2xl lg:p-16"
        >
            <div className="mx-auto w-full max-w-6xl space-y-12">
                <SectionTitle
                    eyebrow="Skills"
                    title="Things I'm Good At"
                    description="Stacks that help me turn complex requirements into thoughtful products, consistently."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
                >
                    {skillGroups.map((group) => {
                        const Icon = group.icon;
                        return (
                            <motion.div
                                key={group.title}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    scale: 1.02,
                                    transition: { duration: 0.3 }
                                }}
                                className="skill-card group relative overflow-hidden rounded-[28px] border border-[#EAE0CF]/10 bg-[#213448]/80 p-7 backdrop-blur-xl transition-all hover:border-[#94B4C1]/30 hover:shadow-[0_20px_60px_rgba(148,180,193,0.15)]"
                            >
                                {/* Gradient accent overlay */}
                                <div className="absolute inset-0 bg-gradient-to-tr from-[#547792]/20 via-transparent to-[#94B4C1]/10 opacity-0 transition-opacity group-hover:opacity-100" />

                                <div className="relative space-y-5">
                                    {/* Animated Icon */}
                                    <motion.div
                                        whileHover={{
                                            scale: 1.15,
                                            rotate: 10,
                                        }}
                                        transition={{ type: "spring", stiffness: 400 }}
                                        className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#547792]/30 to-[#94B4C1]/20 text-[#94B4C1] shadow-lg shadow-[#547792]/20"
                                    >
                                        <Icon className="text-2xl" />
                                    </motion.div>

                                    {/* Title & Description */}
                                    <div>
                                        <h3 className="text-xl font-semibold text-[#EAE0CF]">
                                            {group.title}
                                        </h3>
                                        <p className="mt-2 text-sm text-[#EAE0CF]/60">
                                            {group.description}
                                        </p>
                                    </div>

                                    {/* Tech Tags with stagger */}
                                    <motion.div
                                        className="flex flex-wrap gap-2"
                                        initial={{ opacity: 0 }}
                                        whileInView={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {group.stack.map((item, idx) => (
                                            <motion.span
                                                key={item}
                                                initial={{ opacity: 0, scale: 0.8 }}
                                                whileInView={{ opacity: 1, scale: 1 }}
                                                transition={{ delay: 0.4 + idx * 0.05 }}
                                                whileHover={{ scale: 1.1, backgroundColor: "rgba(148,180,193,0.2)" }}
                                                className="rounded-full border border-[#94B4C1]/20 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#94B4C1] transition-all cursor-default"
                                            >
                                                {item}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </SectionShell>
    );
};

export default SkillsSection;
