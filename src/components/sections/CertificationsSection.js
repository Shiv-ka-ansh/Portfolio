"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle } from "lucide-react";
import { SectionShell, SectionTitle } from "@/components/ui";
import { certifications } from "@/data";

/**
 * CertificationsSection - Credentials with enhanced animations
 * 
 * COLOR PALETTE:
 * - Background: #213448
 * - Cards: Gradient border effect
 * - Icons: #94B4C1
 * - Text: #EAE0CF
 * 
 * ANIMATIONS:
 * | Element | Animation      | Trigger         | Why                    |
 * |---------|----------------|-----------------|------------------------|
 * | Cards   | Scale + fade   | Viewport entry  | Premium reveal         |
 * | Icons   | Spin in        | After card      | Celebratory feel       |
 * | Badge   | Slide in       | Viewport        | Verification indicator |
 */
const CertificationsSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 30 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <SectionShell
            id="certifications"
            className="min-h-screen flex items-center rounded-none border-x-0 border-t-0 border-b border-[#EAE0CF]/5 bg-gradient-to-br from-[#213448] via-[#213448] to-[#547792]/15 p-10 backdrop-blur-2xl lg:p-16"
        >
            <div className="mx-auto w-full max-w-6xl space-y-12">
                <SectionTitle
                    eyebrow="Certifications"
                    title="Credible Proof"
                    description="Hands-on programs to sharpen the craft."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    className="grid gap-6 md:grid-cols-2"
                >
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.title}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                            className="group relative rounded-3xl border border-[#EAE0CF]/10 bg-[#213448]/70 p-8 backdrop-blur-sm transition-all hover:border-[#94B4C1]/30 hover:shadow-[0_25px_60px_rgba(148,180,193,0.12)] overflow-hidden"
                        >
                            {/* Background gradient on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-[#547792]/10 to-[#94B4C1]/5 opacity-0 transition-opacity group-hover:opacity-100" />

                            <div className="relative flex items-start gap-4">
                                {/* Animated Award Icon */}
                                <motion.div
                                    initial={{ scale: 0, rotate: -180 }}
                                    whileInView={{ scale: 1, rotate: 0 }}
                                    transition={{
                                        delay: 0.3 + index * 0.15,
                                        type: "spring",
                                        stiffness: 200
                                    }}
                                    className="flex-shrink-0 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#547792]/40 to-[#94B4C1]/20"
                                >
                                    <Award className="h-7 w-7 text-[#94B4C1]" />
                                </motion.div>

                                <div className="flex-1">
                                    {/* Organization */}
                                    <motion.div
                                        initial={{ opacity: 0, x: -10 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.4 + index * 0.15 }}
                                        className="flex items-center gap-2"
                                    >
                                        <span className="text-sm uppercase tracking-[0.3em] text-[#94B4C1]">
                                            {cert.org}
                                        </span>
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            whileInView={{ scale: 1 }}
                                            transition={{ delay: 0.6 + index * 0.15, type: "spring" }}
                                        >
                                            <CheckCircle className="h-4 w-4 text-[#94B4C1]" />
                                        </motion.div>
                                    </motion.div>

                                    {/* Certificate Title */}
                                    <motion.h3
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.5 + index * 0.15 }}
                                        className="mt-2 text-xl font-semibold text-[#EAE0CF] group-hover:text-[#94B4C1] transition-colors"
                                    >
                                        {cert.title}
                                    </motion.h3>
                                </div>
                            </div>

                            {/* Decorative corner gradient */}
                            <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br from-[#94B4C1]/10 to-transparent blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </SectionShell>
    );
};

export default CertificationsSection;
