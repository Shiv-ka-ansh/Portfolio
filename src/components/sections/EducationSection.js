"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { SectionShell, SectionTitle } from "@/components/ui";
import { education } from "@/data";

/**
 * EducationSection - Learning journey with enhanced animations
 * 
 * COLOR PALETTE:
 * - Background: #213448
 * - Cards: Glassmorphism with gradient borders
 * - Icons: #94B4C1
 * - Text: #EAE0CF primary, #94B4C1 secondary
 * 
 * ANIMATIONS:
 * | Element | Animation      | Timing            | Why                    |
 * |---------|----------------|-------------------|------------------------|
 * | Cards   | Slide up + rot | Staggered 0.15s   | Playful reveal         |
 * | Icons   | Bounce         | On hover          | Interactive feedback   |
 * | Text    | Fade in        | After card        | Content hierarchy      |
 */
const EducationSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 60, rotate: -2 },
        visible: {
            opacity: 1,
            y: 0,
            rotate: 0,
            transition: {
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <SectionShell
            id="education"
            className="min-h-screen flex items-center rounded-none border-x-0 border-t-0 border-b border-[#EAE0CF]/5 bg-gradient-to-br from-[#213448] via-[#213448]/95 to-[#547792]/10 p-10 backdrop-blur-2xl lg:p-16"
        >
            <div className="mx-auto w-full max-w-6xl space-y-12">
                <SectionTitle
                    eyebrow="Education"
                    title="Learning Journey"
                    description="Foundations built with discipline and curiosity."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid gap-6 md:grid-cols-3"
                >
                    {education.map((item, index) => (
                        <motion.div
                            key={item.title}
                            variants={cardVariants}
                            whileHover={{
                                y: -10,
                                scale: 1.03,
                                rotate: 1,
                                transition: { duration: 0.3 }
                            }}
                            className="group rounded-3xl border border-[#EAE0CF]/10 bg-[#213448]/70 p-6 text-center backdrop-blur-sm transition-all hover:border-[#94B4C1]/30 hover:shadow-[0_25px_60px_rgba(148,180,193,0.12)]"
                        >
                            {/* Animated Icon */}
                            <motion.div
                                initial={{ scale: 0, rotate: -180 }}
                                whileInView={{ scale: 1, rotate: 0 }}
                                transition={{
                                    delay: 0.3 + index * 0.1,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                className="mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#547792]/40 to-[#94B4C1]/20"
                            >
                                <GraduationCap className="h-7 w-7 text-[#94B4C1]" />
                            </motion.div>

                            {/* Period */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="inline-flex items-center gap-2 text-sm text-[#94B4C1]"
                            >
                                <Calendar className="h-3.5 w-3.5" />
                                <span className="uppercase tracking-[0.2em]">{item.period}</span>
                            </motion.div>

                            {/* Title */}
                            <motion.h3
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                className="mt-4 text-2xl font-semibold text-[#EAE0CF] group-hover:text-[#94B4C1] transition-colors"
                            >
                                {item.title}
                            </motion.h3>

                            {/* Institution */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.6 + index * 0.1 }}
                                className="mt-2 flex items-center justify-center gap-1 text-sm text-[#EAE0CF]/60"
                            >
                                <MapPin className="h-3.5 w-3.5 text-[#547792]" />
                                <span>{item.place}</span>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionShell>
    );
};

export default EducationSection;
