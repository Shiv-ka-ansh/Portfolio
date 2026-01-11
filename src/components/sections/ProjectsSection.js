"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiArrowUpRight, FiGithub, FiExternalLink } from "react-icons/fi";
import { SectionShell, SectionTitle, GlowCard } from "@/components/ui";
import { projects } from "@/data";

/**
 * ProjectsSection - Premium horizontal scrolling with enhanced animations
 * 
 * COLOR PALETTE:
 * - Background: Deep #213448 with gradient
 * - Cards: Glassmorphism with #547792 accents
 * - Glow: #94B4C1 on hover
 * - Text: #EAE0CF
 * 
 * ANIMATIONS:
 * | Element         | Animation         | Timing      | Why                     |
 * |-----------------|-------------------|-------------|-------------------------|
 * | Container       | Fade in           | Viewport    | Prepare for content     |
 * | Cards           | Slide up + 3D tilt| Staggered   | Premium reveal          |
 * | Image           | Scale + parallax  | Hover       | Depth effect            |
 * | Overlay         | Gradient reveal   | Hover       | Focus on actions        |
 * | Buttons         | Scale + glow      | Hover       | Interactive feedback    |
 */
const ProjectsSection = () => {
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
        hidden: { opacity: 0, y: 80, rotateX: -10 },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    return (
        <SectionShell
            id="projects"
            className="min-h-screen flex items-center rounded-none border-x-0 border-t-0 border-b border-[#EAE0CF]/5 bg-gradient-to-br from-[#213448] via-[#1a2a3a] to-[#213448] p-10 backdrop-blur-2xl lg:p-16"
        >
            <div className="mx-auto w-full max-w-6xl space-y-12">
                <SectionTitle
                    eyebrow="Projects"
                    title="Selected Builds"
                    description="Interactive showcase featuring 3D tilt cards, parallax effects, and premium glassmorphism."
                />

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    className="project-track flex snap-x gap-8 overflow-x-auto pb-6 pt-4"
                >
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            variants={cardVariants}
                            whileHover={{
                                rotateX: 5,
                                rotateY: -5,
                                translateY: -12,
                                transition: { duration: 0.4 },
                            }}
                            className="tilt-card glow-border group flex min-w-[340px] max-w-sm snap-start flex-col gap-6 rounded-[32px] border border-[#EAE0CF]/10 bg-[#213448]/80 p-6 shadow-[0_35px_80px_rgba(33,52,72,0.6)] backdrop-blur-sm"
                        >
                            {/* Project Image */}
                            <div className="relative h-52 overflow-hidden rounded-3xl">
                                <motion.div
                                    className="h-full w-full"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6 }}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        sizes="(max-width: 768px) 320px, 360px"
                                        className="object-cover"
                                    />
                                </motion.div>

                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-[#213448] via-[#213448]/30 to-transparent opacity-80" />

                                {/* Interactive Preview Badge */}
                                <motion.div
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="absolute bottom-4 left-4 flex items-center gap-2 text-xs uppercase tracking-widest text-[#EAE0CF]/80"
                                >
                                    <motion.span
                                        animate={{ scale: [1, 1.2, 1] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                        className="h-2 w-2 rounded-full bg-[#94B4C1]"
                                    />
                                    Interactive Preview
                                </motion.div>
                            </div>

                            {/* Project Content */}
                            <div className="space-y-4">
                                <div className="space-y-2">
                                    <h3 className="text-2xl font-semibold text-[#EAE0CF] group-hover:text-[#94B4C1] transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm text-[#EAE0CF]/60">{project.description}</p>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-2 text-xs uppercase tracking-widest">
                                    {project.tech.map((item) => (
                                        <motion.span
                                            key={item}
                                            whileHover={{ scale: 1.1, backgroundColor: "rgba(148,180,193,0.15)" }}
                                            className="rounded-full border border-[#547792]/30 px-3 py-1 text-[#94B4C1] transition-all"
                                        >
                                            {item}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex gap-3 text-sm font-semibold pt-2">
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                        <Link
                                            href={project.code}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 rounded-full border border-[#EAE0CF]/15 px-4 py-2 text-[#EAE0CF] transition hover:border-[#94B4C1]/50 hover:bg-[#94B4C1]/10"
                                        >
                                            <FiGithub />
                                            Code
                                        </Link>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                        <Link
                                            href={project.demo}
                                            target="_blank"
                                            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#94B4C1] to-[#547792] px-4 py-2 text-[#213448] transition hover:shadow-[0_10px_30px_rgba(148,180,193,0.3)]"
                                        >
                                            <FiExternalLink />
                                            Live Demo
                                        </Link>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </motion.div>
            </div>
        </SectionShell>
    );
};

export default ProjectsSection;
