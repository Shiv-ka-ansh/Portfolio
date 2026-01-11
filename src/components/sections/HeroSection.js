"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload, FiArrowUpRight, FiGithub, FiLinkedin } from "react-icons/fi";
import { HeroGeometric } from "@/components/ui";
import { contactInfo, socials } from "@/data";

/**
 * HeroSection - Geometric animated hero with floating shapes
 * 
 * COLOR PALETTE:
 * - Primary: #213448 (Deep Navy)
 * - Secondary: #547792 (Steel Blue)
 * - Tertiary: #94B4C1 (Soft Teal)
 * - Accent: #EAE0CF (Warm Cream)
 * 
 * ANIMATIONS:
 * | Element       | Animation        | Delay  | Why                        |
 * |---------------|------------------|--------|----------------------------|
 * | Shapes        | Drop + float     | Varies | Creates depth and motion   |
 * | Badge         | Fade up          | 0.5s   | First content element      |
 * | Title         | Fade up          | 0.7s   | Main focus                 |
 * | Subtitle      | Fade up          | 0.9s   | Context                    |
 * | CTAs          | Fade up          | 1.1s   | Action items               |
 * | Social icons  | Staggered rise   | 1.3s+  | Connection points          |
 * 
 * TRIGGER: All animations run on mount
 */
const HeroSection = () => {
  return (
    <section id="hero" className="relative">
      <HeroGeometric
        badge="Backend-Focused Full-Stack Developer"
        title1="Shivansh Gupta"
        title2="Building Digital Excellence"
        subtitle={contactInfo.tagline}
      >
        {/* CTA Buttons */}
        {/* <Link
          href="/resume.pdf"
          target="_blank"
          className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#94B4C1] to-[#547792] px-6 py-3 text-sm font-semibold text-[#213448] shadow-[0_15px_40px_rgba(148,180,193,0.3)] transition-all hover:translate-y-[-2px] hover:shadow-[0_20px_50px_rgba(148,180,193,0.4)]"
        >
          <FiDownload className="text-base" />
          View Resume
          <FiArrowUpRight className="text-base transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
        <Link
          href="#projects"
          className="inline-flex items-center gap-3 rounded-full border border-[#EAE0CF]/20 px-6 py-3 text-sm font-semibold text-[#EAE0CF] transition hover:border-[#EAE0CF]/50 hover:bg-[#EAE0CF]/5"
        >
          View Projects
          <FiArrowUpRight className="text-base" />
        </Link> */}
      </HeroGeometric>

      {/* Social Links - Below Hero */}
      <div className="absolute bottom-0 left-0 right-0 z-20 bg-gradient-to-t from-[#213448] to-transparent pt-20 pb-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="flex justify-center gap-6"
          >
            {socials.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.div 
                  key={social.label}
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: 1.4 + index * 0.1, type: "spring" }}
                  whileHover={{ y: -5, scale: 1.15 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    aria-label={social.label}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#EAE0CF]/15 text-[#EAE0CF]/70 transition hover:border-[#94B4C1]/50 hover:text-[#94B4C1] hover:bg-[#94B4C1]/10 hover:shadow-[0_10px_30px_rgba(148,180,193,0.2)]"
                  >
                    <Icon className="text-xl" />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="mt-6 text-center"
          >
            <p className="text-sm text-[#EAE0CF]/60">
              <a 
                href={`tel:${contactInfo.email2}`}
                className="hover:text-[#94B4C1] transition-colors"
              >
                {contactInfo.email2}
              </a>
              {" | "}
              <a 
                href={`mailto:${contactInfo.email}`}
                className="hover:text-[#94B4C1] transition-colors"
              >
                {contactInfo.email}
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
