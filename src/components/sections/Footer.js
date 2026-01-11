"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { socials } from "@/data";

/**
 * Footer - Minimal site footer with new color palette
 * 
 * COLOR PALETTE:
 * - Background: Transparent over #213448
 * - Text: #EAE0CF primary, #94B4C1 hover
 * - Border: #EAE0CF/10
 * 
 * ANIMATIONS:
 * - Social icons: Scale + color change on hover
 * - Divider: Fade in from center
 */
const Footer = () => {
    return (
        <footer className="relative border-t border-[#EAE0CF]/10 bg-[#213448]">
            <div className="mx-auto w-full max-w-6xl flex flex-col items-center gap-6 py-12 text-sm text-[#EAE0CF]/60 px-6 lg:px-12">
                {/* Social Icons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex gap-5"
                >
                    {socials.map((social, index) => {
                        const Icon = social.icon;
                        return (
                            <motion.div
                                key={social.label}
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + index * 0.1, type: "spring" }}
                                whileHover={{ scale: 1.2, y: -3 }}
                            >
                                <Link
                                    href={social.href}
                                    target="_blank"
                                    aria-label={social.label}
                                    className="text-[#EAE0CF]/70 transition-colors hover:text-[#94B4C1]"
                                >
                                    <Icon className="text-xl" />
                                </Link>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Divider */}
                <motion.div
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="w-24 h-px bg-gradient-to-r from-transparent via-[#547792] to-transparent"
                />

                {/* Copyright */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="text-center"
                >
                    &copy; {new Date().getFullYear()}{" "}
                    <span className="text-[#94B4C1]">Shivansh Gupta</span>. All rights reserved.
                </motion.p>

                {/* Built with badge */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    className="text-xs text-[#EAE0CF]/40"
                >
                    Built with Next.js, Tailwind CSS & Framer Motion
                </motion.p>
            </div>
        </footer>
    );
};

export default Footer;
