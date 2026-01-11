"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiMapPin, FiPhone } from "react-icons/fi";
import { Sparkles } from "lucide-react";
import { SectionShell, SectionTitle } from "@/components/ui";
import { socials, contactInfo } from "@/data";

/**
 * ContactSection - Contact form with particle-like animated background
 * 
 * COLOR PALETTE:
 * - Background: Gradient #213448 with #547792/#94B4C1 orbs
 * - Form: Glassmorphism with #EAE0CF inputs
 * - Accents: #94B4C1 highlights
 * 
 * ANIMATIONS:
 * | Element       | Animation     | Trigger        | Why                      |
 * |---------------|---------------|----------------|--------------------------|
 * | Background    | Floating orbs | Continuous     | Visual depth             |
 * | Left content  | Fade in       | Viewport entry | Context first            |
 * | Social icons  | Lift + scale  | Hover          | Interactive feedback     |
 * | Form          | Slide up      | Viewport entry | Main CTA revealed after  |
 * | Submit button | Shimmer       | Continuous     | Draws attention          |
 * | Input focus   | Glow          | Focus state    | Active indication        |
 */
const ContactSection = () => {
    const formVariants = {
        hidden: { opacity: 0, y: 80 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1],
            },
        },
    };

    const iconVariants = {
        hidden: { scale: 0, rotate: -180 },
        visible: (i) => ({
            scale: 1,
            rotate: 0,
            transition: {
                delay: 0.3 + i * 0.1,
                type: "spring",
                stiffness: 200,
            },
        }),
    };

    return (
        <SectionShell
            id="contact"
            className="min-h-screen flex items-center rounded-none border-x-0 border-t-0 border-b border-[#EAE0CF]/5 bg-[#213448] p-10 lg:p-16 relative overflow-hidden"
        >
            {/* Animated background orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 30, 0],
                        y: [0, -20, 0],
                        scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-[#547792]/30 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.15, 1]
                    }}
                    transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-[#94B4C1]/20 to-transparent rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, 20, 0],
                        y: [0, 40, 0]
                    }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
                    className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-[#EAE0CF]/10 to-transparent rounded-full blur-2xl"
                />
            </div>

            <div className="mx-auto w-full max-w-6xl relative z-10">
                <div className="contact-gradient flex flex-col gap-12 rounded-[40px] border border-[#EAE0CF]/10 p-10 lg:flex-row lg:p-16 backdrop-blur-sm">
                    {/* Left - Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="space-y-8 lg:w-2/5"
                    >
                        <SectionTitle
                            eyebrow="Contact"
                            title="Let's build something remarkable"
                            description="Drop a line for collaborations, freelance opportunities, or mentorship chats."
                        />

                        {/* Contact Details */}
                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ x: 5 }}
                                className="flex items-center gap-3 text-[#EAE0CF]/70"
                            >
                                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#547792]/30">
                                    <FiMail className="text-[#94B4C1]" />
                                </div>
                                <Link
                                    href={`mailto:${contactInfo.email}`}
                                    className="text-[#94B4C1] hover:text-[#EAE0CF] transition-colors"
                                >
                                    {contactInfo.email}
                                </Link>
                            </motion.div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {socials.map((social, index) => {
                                const Icon = social.icon;
                                return (
                                    <motion.div
                                        key={social.label}
                                        custom={index}
                                        variants={iconVariants}
                                        initial="hidden"
                                        whileInView="visible"
                                        viewport={{ once: true }}
                                        whileHover={{ y: -5, scale: 1.15 }}
                                    >
                                        <Link
                                            href={social.href}
                                            target="_blank"
                                            aria-label={social.label}
                                            className="group inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-[#EAE0CF]/15 text-[#EAE0CF] transition-all hover:border-[#94B4C1]/50 hover:bg-[#94B4C1]/10 hover:shadow-[0_10px_30px_rgba(148,180,193,0.2)]"
                                        >
                                            <Icon className="text-xl transition group-hover:text-[#94B4C1]" />
                                        </Link>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Decorative sparkle */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute -bottom-10 -left-10 opacity-10"
                        >
                            <Sparkles className="h-40 w-40 text-[#94B4C1]" />
                        </motion.div>
                    </motion.div>

                    {/* Right - Contact Form */}
                    <motion.form
                        variants={formVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        className="space-y-6 lg:w-3/5"
                    >
                        {/* Full Name Field */}
                        <motion.div
                            className="form-field"
                            whileFocus={{ scale: 1.01 }}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder=" "
                                required
                                autoComplete="name"
                            />
                            <label>Full Name</label>
                        </motion.div>

                        {/* Email Field */}
                        <div className="form-field">
                            <input
                                type="email"
                                name="email"
                                placeholder=" "
                                required
                                autoComplete="email"
                            />
                            <label>Email</label>
                        </div>

                        {/* Subject Field */}
                        <div className="form-field">
                            <input
                                type="text"
                                name="subject"
                                placeholder=" "
                                required
                            />
                            <label>Subject</label>
                        </div>

                        {/* Message Field */}
                        <div className="form-field">
                            <textarea
                                name="message"
                                rows="5"
                                placeholder=" "
                                required
                            ></textarea>
                            <label>Message</label>
                        </div>

                        {/* Submit Button with shimmer effect */}
                        <motion.button
                            type="submit"
                            whileHover={{ y: -3, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="relative inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#94B4C1] via-[#547792] to-[#94B4C1] bg-[length:200%_100%] px-6 py-4 font-semibold text-[#213448] shadow-[0_20px_45px_rgba(148,180,193,0.3)] transition-all hover:shadow-[0_25px_50px_rgba(148,180,193,0.4)] animate-[shimmer_3s_ease-in-out_infinite]"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Send Message
                                <FiSend />
                            </span>
                        </motion.button>
                    </motion.form>
                </div>
            </div>
        </SectionShell>
    );
};

export default ContactSection;
